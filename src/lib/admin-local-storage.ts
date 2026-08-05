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

const STORAGE_KEY = 'bnl_admin_properties';

// Get all admin-added properties from localStorage
export function getAdminProperties(): Property[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading admin properties from localStorage:', error);
    return [];
  }
}

// Save a property (create or update)
export function saveAdminProperty(property: Property): Property {
  const properties = getAdminProperties();
  const existingIndex = properties.findIndex(p => p.id === property.id);
  
  const now = new Date().toISOString();
  const propertyWithTimestamps = {
    ...property,
    updated_at: now,
    created_at: property.created_at || now,
  };

  if (existingIndex >= 0) {
    properties[existingIndex] = propertyWithTimestamps;
  } else {
    properties.push(propertyWithTimestamps);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(properties));
  return propertyWithTimestamps;
}

// Delete a property
export function deleteAdminProperty(id: string): void {
  const properties = getAdminProperties();
  const filtered = properties.filter(p => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}

// Get a single property by ID
export function getAdminPropertyById(id: string): Property | undefined {
  const properties = getAdminProperties();
  return properties.find(p => p.id === id);
}

// Get properties by category
export function getAdminPropertiesByCategory(category: string): Property[] {
  const properties = getAdminProperties();
  return properties.filter(p => p.category === category);
}
