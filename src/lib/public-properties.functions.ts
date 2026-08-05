import { getAdminProperties } from "@/lib/admin-local-storage";
import { fetchAdminProperties } from "@/lib/json-file-storage";

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
};

// Public: list published properties by category (no auth)
export async function listPublicProperties(category: string): Promise<Property[]> {
  // Try to get from JSON file first (for deployment)
  try {
    const jsonProperties = await fetchAdminProperties();
    const filtered = jsonProperties
      .filter(p => p.published && p.category === category)
      .sort((a, b) => {
        if (a.featured !== b.featured) return a.featured ? -1 : 1;
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      });
    
    // If JSON file has data, use it
    if (filtered.length > 0) return filtered;
  } catch (error) {
    console.error('Error fetching from JSON file, falling back to localStorage:', error);
  }
  
  // Fallback to localStorage (for development)
  const properties = getAdminProperties();
  return properties
    .filter(p => p.published && p.category === category)
    .sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });
}

// Public: get single property by ID (no auth)
export async function getPublicProperty(id: string): Promise<Property | undefined> {
  // Try to get from JSON file first (for deployment)
  try {
    const jsonProperties = await fetchAdminProperties();
    const property = jsonProperties.find(p => p.published && p.id === id);
    if (property) return property;
  } catch (error) {
    console.error('Error fetching from JSON file, falling back to localStorage:', error);
  }
  
  // Fallback to localStorage (for development)
  const properties = getAdminProperties();
  return properties.find(p => p.published && p.id === id);
}
