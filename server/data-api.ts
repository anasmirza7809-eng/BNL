import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import fs from 'fs';
import path from 'path';

// Helper function to get the data directory path
function getDataDir() {
  // In production, this will be the deployed path
  // In development, it will be the project root
  const basePath = process.cwd();
  return path.join(basePath, 'public', 'data');
}

// Helper function to read JSON file
function readJsonFile(filename: string): any[] {
  try {
    const filePath = path.join(getDataDir(), filename);
    if (!fs.existsSync(filePath)) {
      return [];
    }
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading ${filename}:`, error);
    return [];
  }
}

// Helper function to write JSON file
function writeJsonFile(filename: string, data: any[]): void {
  try {
    const dataDir = getDataDir();
    
    // Ensure data directory exists
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    const filePath = path.join(dataDir, filename);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.error(`Error writing ${filename}:`, error);
    throw new Error(`Failed to write ${filename}: ${error}`);
  }
}

// API: Get all admin properties
export const getServerProperties = createServerFn({ method: "GET" })
  .handler(async () => {
    return readJsonFile('admin-properties.json');
  });

// API: Save admin properties
export const saveServerProperties = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ data }) => {
    const properties = data as any[];
    writeJsonFile('admin-properties.json', properties);
    return { success: true };
  });

// API: Get all admin gallery images
export const getServerGallery = createServerFn({ method: "GET" })
  .handler(async () => {
    return readJsonFile('admin-gallery.json');
  });

// API: Save admin gallery images
export const saveServerGallery = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ data }) => {
    const gallery = data as any[];
    writeJsonFile('admin-gallery.json', gallery);
    return { success: true };
  });