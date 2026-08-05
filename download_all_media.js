import { createClient } from '@supabase/supabase-js';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

const SUPABASE_URL = "https://pyrenaqhkyjfdvluqqab.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_hg3uk44tfdIC971FdARw6g__DotNy5y";
const LOVABLE_CDN_HOST = "https://69f98387-551c-4301-9e08-a8b384c5d4e2.lovableproject.com";

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

// Helper to download a URL and write to a destination file
async function downloadFile(url, destPath) {
  try {
    const dir = path.dirname(destPath);
    await fs.mkdir(dir, { recursive: true });

    const res = await fetch(url);
    if (!res.ok) {
      console.error(`  Failed to download ${url}: ${res.status} ${res.statusText}`);
      return false;
    }
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    await fs.writeFile(destPath, buffer);
    console.log(`  Saved to ${destPath}`);
    return true;
  } catch (err) {
    console.error(`  Error downloading ${url}:`, err.message);
    return false;
  }
}

// Recursively find files ending with .asset.json
async function getAssetJsonFiles(dir) {
  let results = [];
  const list = await fs.readdir(dir, { withFileTypes: true });
  for (const file of list) {
    const resPath = path.resolve(dir, file.name);
    if (file.isDirectory()) {
      results = results.concat(await getAssetJsonFiles(resPath));
    } else if (file.name.endsWith('.asset.json')) {
      results.push(resPath);
    }
  }
  return results;
}

async function run() {
  console.log("=== STEP 1: Processing .asset.json files under src/ ===");
  const srcDir = path.resolve(process.cwd(), 'src');
  const assetFiles = await getAssetJsonFiles(srcDir);
  console.log(`Found ${assetFiles.length} asset metadata files.`);

  for (const file of assetFiles) {
    try {
      const content = await fs.readFile(file, 'utf-8');
      const json = JSON.parse(content);
      if (json.url) {
        console.log(`Processing asset: ${json.original_filename || path.basename(file)}`);
        const remoteUrl = `${LOVABLE_CDN_HOST}${json.url}`;
        const localPath = path.join(process.cwd(), 'public', json.url.replace(/^\//, ''));
        await downloadFile(remoteUrl, localPath);
      }
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }

  console.log("\n=== STEP 2: Processing Property listing images from Supabase ===");
  const { data: properties, error: pErr } = await supabase
    .from('properties')
    .select('id, title, image_path, gallery');

  if (pErr) {
    console.error("Error fetching properties:", pErr);
  } else {
    console.log(`Fetched ${properties.length} properties.`);
    for (const p of properties) {
      console.log(`Property: ${p.title} (${p.id})`);
      
      // Handle primary image
      if (p.image_path) {
        console.log(`  Primary path: ${p.image_path}`);
        const { data: signData, error: sErr } = await supabase.storage
          .from('property-images')
          .createSignedUrl(p.image_path, 60 * 60 * 24);
        
        if (sErr) {
          console.error(`  Error creating signed URL for primary image:`, sErr);
        } else if (signData?.signedUrl) {
          const localPath = path.join(process.cwd(), 'public', p.image_path);
          await downloadFile(signData.signedUrl, localPath);
        }
      }

      // Handle gallery images
      if (p.gallery && Array.isArray(p.gallery)) {
        for (const gPath of p.gallery) {
          if (gPath && !gPath.startsWith('http')) {
            console.log(`  Gallery path: ${gPath}`);
            const { data: signData, error: sErr } = await supabase.storage
              .from('property-images')
              .createSignedUrl(gPath, 60 * 60 * 24);
            
            if (sErr) {
              console.error(`  Error creating signed URL for gallery image:`, sErr);
            } else if (signData?.signedUrl) {
              const localPath = path.join(process.cwd(), 'public', gPath);
              await downloadFile(signData.signedUrl, localPath);
            }
          }
        }
      }
    }
  }

  console.log("\n=== STEP 3: Processing Gallery items from Supabase ===");
  const { data: galleryItems, error: gErr } = await supabase
    .from('gallery_images')
    .select('id, title, image_path');

  if (gErr) {
    console.error("Error fetching gallery items:", gErr);
  } else {
    console.log(`Fetched ${galleryItems.length} gallery items.`);
    for (const item of galleryItems) {
      console.log(`Gallery Item: ${item.title || 'Untitled'} (${item.id})`);
      if (item.image_path) {
        console.log(`  Path: ${item.image_path}`);
        const { data: signData, error: sErr } = await supabase.storage
          .from('gallery-images')
          .createSignedUrl(item.image_path, 60 * 60 * 24);
        
        if (sErr) {
          console.error(`  Error creating signed URL for gallery item:`, sErr);
        } else if (signData?.signedUrl) {
          const localPath = path.join(process.cwd(), 'public', item.image_path);
          await downloadFile(signData.signedUrl, localPath);
        }
      }
    }
  }

  console.log("\n=== DOWNLOAD COMPLETE ===");
}

run().catch(console.error);
