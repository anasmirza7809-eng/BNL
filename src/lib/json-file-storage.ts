// JSON file storage functions for admin data
// These handle reading/writing JSON files for admin-added content

type Property = {
  id: string;
  category: string;
  title: string;
  location: string | null;
  price: string | null;
  bedrooms: string | null;
  area: string | null;
  description: string | null;
  full_description: string | null;
  image_url: string | null;
  image_path: string | null;
  gallery: string[] | null;
  highlights: string[] | null;
  featured: boolean;
  published: boolean;
  created_at: string;
  updated_at: string;
};

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

// Fetch admin properties from JSON file
export async function fetchAdminProperties(): Promise<Property[]> {
  try {
    const response = await fetch('/data/admin-properties.json');
    if (!response.ok) return [];
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching admin properties:', error);
    return [];
  }
}

// Fetch admin gallery from JSON file
export async function fetchAdminGallery(): Promise<GalleryRow[]> {
  try {
    const response = await fetch('/data/admin-gallery.json');
    if (!response.ok) return [];
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching admin gallery:', error);
    return [];
  }
}

// Export localStorage data as JSON for deployment
export function exportAdminData() {
  const properties = localStorage.getItem('bnl_admin_properties');
  const gallery = localStorage.getItem('bnl_admin_gallery');
  
  const exportData = {
    properties: properties ? JSON.parse(properties) : [],
    gallery: gallery ? JSON.parse(gallery) : [],
    exportedAt: new Date().toISOString(),
  };
  
  // Create and download the export file
  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `bnl-admin-data-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Import admin data from JSON file (for deployment setup)
export function importAdminData(jsonData: any) {
  if (jsonData.properties) {
    localStorage.setItem('bnl_admin_properties', JSON.stringify(jsonData.properties));
  }
  if (jsonData.gallery) {
    localStorage.setItem('bnl_admin_gallery', JSON.stringify(jsonData.gallery));
  }
}