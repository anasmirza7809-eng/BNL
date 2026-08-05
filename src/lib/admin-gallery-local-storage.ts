type GalleryRow = {
  id: string;
  title: string | null;
  caption: string | null;
  image_url: string | null;
  image_path: string | null;
  sort_order: number;
  published: boolean;
  created_at: string;
};

const STORAGE_KEY = 'bnl_admin_gallery';

// Get all admin-added gallery images from localStorage
export function getAdminGalleryImages(): GalleryRow[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading admin gallery from localStorage:', error);
    return [];
  }
}

// Save a gallery image (create or update)
export function saveAdminGalleryImage(image: GalleryRow): GalleryRow {
  const images = getAdminGalleryImages();
  const existingIndex = images.findIndex(img => img.id === image.id);
  
  const now = new Date().toISOString();
  const imageWithTimestamps = {
    ...image,
    created_at: image.created_at || now,
  };

  if (existingIndex >= 0) {
    images[existingIndex] = imageWithTimestamps;
  } else {
    images.push(imageWithTimestamps);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
  return imageWithTimestamps;
}

// Delete a gallery image
export function deleteAdminGalleryImage(id: string): void {
  const images = getAdminGalleryImages();
  const filtered = images.filter(img => img.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}

// Get a single gallery image by ID
export function getAdminGalleryImageById(id: string): GalleryRow | undefined {
  const images = getAdminGalleryImages();
  return images.find(img => img.id === id);
}
