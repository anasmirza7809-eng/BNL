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

// Local property data using images from public/properties directory
export const localPropertyData: Property[] = [
  {
    id: "prop-1",
    category: "dubai-apartments",
    title: "Skyline Luxury Apartment",
    location: "Downtown Dubai",
    price: "AED 2,500,000",
    bedrooms: "2",
    area: "1,450 sq ft",
    description: "Modern luxury apartment with stunning city views",
    full_description: "Experience luxury living in this stunning 2-bedroom apartment located in the heart of Downtown Dubai. Featuring floor-to-ceiling windows, premium finishes, and breathtaking views of the Burj Khalifa.",
    image_url: "/properties/04b60530-e2e3-4acc-8e7a-e7aae205a894.jpeg",
    image_path: null,
    gallery: [
      "/properties/04b60530-e2e3-4acc-8e7a-e7aae205a894.jpeg",
      "/properties/247dcba4-8eee-45cc-a554-45b4dc8cbe97.jpeg",
      "/properties/46b5e61c-66b1-4245-8389-f87ef2d425ce.jpeg",
    ],
    highlights: ["City Views", "Premium Finishes", "Smart Home", "Concierge"],
    featured: true,
    published: true,
  },
  {
    id: "prop-2",
    category: "dubai-apartments",
    title: "Marina View Residence",
    location: "Dubai Marina",
    price: "AED 1,800,000",
    bedrooms: "1",
    area: "950 sq ft",
    description: "Stunning marina views in prime location",
    full_description: "Beautiful 1-bedroom apartment with panoramic marina views. Features modern kitchen, spacious living area, and access to world-class amenities.",
    image_url: "/properties/247dcba4-8eee-45cc-a554-45b4dc8cbe97.jpeg",
    image_path: null,
    gallery: [
      "/properties/247dcba4-8eee-45cc-a554-45b4dc8cbe97.jpeg",
      "/properties/4a5b54f3-bb52-492e-a980-397ba80aeb8a.jpeg",
    ],
    highlights: ["Marina Views", "Modern Kitchen", "Gym Access", "Pool"],
    featured: false,
    published: true,
  },
  {
    id: "prop-3",
    category: "dubai-villas",
    title: "Palm Jumeirah Villa",
    location: "Palm Jumeirah",
    price: "AED 8,500,000",
    bedrooms: "5",
    area: "5,200 sq ft",
    description: "Exclusive beachfront villa with private pool",
    full_description: "Magnificent 5-bedroom villa on Palm Jumeirah with private beach access, infinity pool, and stunning Arabian Gulf views.",
    image_url: "/properties/46b5e61c-66b1-4245-8389-f87ef2d425ce.jpeg",
    image_path: null,
    gallery: [
      "/properties/46b5e61c-66b1-4245-8389-f87ef2d425ce.jpeg",
      "/properties/532a7c19-3ccb-4adf-889b-7f9560654104.jpeg",
      "/properties/68963928-32c8-43aa-b39c-6ca9782d7976.jpeg",
    ],
    highlights: ["Private Beach", "Infinity Pool", "Maids Room", "Smart Home"],
    featured: true,
    published: true,
  },
  {
    id: "prop-4",
    category: "dubai-villas",
    title: "Emirates Hills Estate",
    location: "Emirates Hills",
    price: "AED 15,000,000",
    bedrooms: "6",
    area: "8,500 sq ft",
    description: "Luxurious estate with landscaped gardens",
    full_description: "Prestigious 6-bedroom villa in Emirates Hills featuring expansive gardens, home cinema, and premium finishes throughout.",
    image_url: "/properties/4a5b54f3-bb52-492e-a980-397ba80aeb8a.jpeg",
    image_path: null,
    gallery: [
      "/properties/4a5b54f3-bb52-492e-a980-397ba80aeb8a.jpeg",
      "/properties/75e55b68-948d-4330-878d-1d13097e1e0f.jpeg",
    ],
    highlights: ["Landscaped Gardens", "Home Cinema", "Wine Cellar", "Golf Course View"],
    featured: true,
    published: true,
  },
  {
    id: "prop-5",
    category: "dubai-commercial",
    title: "DIFC Office Space",
    location: "DIFC",
    price: "AED 3,200,000",
    bedrooms: null,
    area: "2,800 sq ft",
    description: "Grade A office space in financial district",
    full_description: "Premium office space in Dubai International Financial Centre with modern fit-out, stunning views, and world-class building amenities.",
    image_url: "/properties/532a7c19-3ccb-4adf-889b-7f9560654104.jpeg",
    image_path: null,
    gallery: [
      "/properties/532a7c19-3ccb-4adf-889b-7f9560654104.jpeg",
      "/properties/7a15fc0c-efc7-4d1b-84f1-228af0661205.jpeg",
    ],
    highlights: ["Grade A Building", "DIFC Location", "Modern Fit-out", "Parking"],
    featured: false,
    published: true,
  },
  {
    id: "prop-6",
    category: "india-residential",
    title: "South Mumbai Penthouse",
    location: "South Mumbai",
    price: "₹15,00,00,000",
    bedrooms: "4",
    area: "3,500 sq ft",
    description: "Luxury penthouse in prime South Mumbai location",
    full_description: "Exclusive 4-bedroom penthouse in South Mumbai with panoramic sea views, private terrace, and premium amenities.",
    image_url: "/properties/68963928-32c8-43aa-b39c-6ca9782d7976.jpeg",
    image_path: null,
    gallery: [
      "/properties/68963928-32c8-43aa-b39c-6ca9782d7976.jpeg",
      "/properties/9acdd4b3-1e29-4f30-ab81-1ecbb961c2d4.jpeg",
    ],
    highlights: ["Sea Views", "Private Terrace", "Premium Location", "Concierge"],
    featured: true,
    published: true,
  },
  {
    id: "prop-7",
    category: "india-residential",
    title: "Bandra West Apartment",
    location: "Bandra West, Mumbai",
    price: "₹5,50,00,000",
    bedrooms: "3",
    area: "1,800 sq ft",
    description: "Modern apartment in trendy Bandra West",
    full_description: "Stylish 3-bedroom apartment in Bandra West with contemporary design, proximity to cafes and beaches, and modern amenities.",
    image_url: "/properties/75e55b68-948d-4330-878d-1d13097e1e0f.jpeg",
    image_path: null,
    gallery: [
      "/properties/75e55b68-948d-4330-878d-1d13097e1e0f.jpeg",
      "/properties/ad5589f0-e6d7-4344-839b-6a21f79e7689.jpeg",
    ],
    highlights: ["Trendy Location", "Modern Design", "Proximity to Beach", "Parking"],
    featured: false,
    published: true,
  },
  {
    id: "prop-8",
    category: "india-commercial",
    title: "Cyber City Office",
    location: "Gurugram",
    price: "₹2,50,00,000",
    bedrooms: null,
    area: "4,000 sq ft",
    description: "Premium office space in Cyber City Gurugram",
    full_description: "Grade A office space in Cyber City with excellent connectivity, modern infrastructure, and premium building amenities.",
    image_url: "/properties/7a15fc0c-efc7-4d1b-84f1-228af0661205.jpeg",
    image_path: null,
    gallery: [
      "/properties/7a15fc0c-efc7-4d1b-84f1-228af0661205.jpeg",
      "/properties/b7b445c1-73a7-45ad-8e48-35706c517a76.jpeg",
    ],
    highlights: ["Prime Location", "Grade A Building", "Excellent Connectivity", "Parking"],
    featured: false,
    published: true,
  },
  {
    id: "prop-9",
    category: "india-land",
    title: "Alibaug Land Parcel",
    location: "Alibaug",
    price: "₹1,20,00,000",
    bedrooms: null,
    area: "2 Acres",
    description: "Scenic land parcel near Mumbai",
    full_description: "Beautiful 2-acre land parcel in Alibaug with clear title, near beach access, and excellent development potential.",
    image_url: "/properties/9acdd4b3-1e29-4f30-ab81-1ecbb961c2d4.jpeg",
    image_path: null,
    gallery: [
      "/properties/9acdd4b3-1e29-4f30-ab81-1ecbb961c2d4.jpeg",
      "/properties/c56df1b8-6dc1-4470-b317-d39791bfdc70.jpeg",
    ],
    highlights: ["Clear Title", "Near Beach", "Development Potential", "Scenic"],
    featured: false,
    published: true,
  },
  {
    id: "prop-10",
    category: "india-land",
    title: "Lonavala Plot",
    location: "Lonavala",
    price: "₹80,00,000",
    bedrooms: null,
    area: "1 Acre",
    description: "Hill station plot with valley views",
    full_description: "Scenic 1-acre plot in Lonavala with stunning valley views, excellent road connectivity, and perfect for weekend home development.",
    image_url: "/properties/ad5589f0-e6d7-4344-839b-6a21f79e7689.jpeg",
    image_path: null,
    gallery: [
      "/properties/ad5589f0-e6d7-4344-839b-6a21f79e7689.jpeg",
      "/properties/cc9e9fe6-b1f4-4462-9404-14475311b730.jpeg",
    ],
    highlights: ["Valley Views", "Hill Station", "Road Connectivity", "Weekend Home"],
    featured: false,
    published: true,
  },
];

export function getLocalPropertiesByCategory(category: string): Property[] {
  return localPropertyData.filter((p) => p.category === category && p.published);
}

export function getLocalPropertyById(id: string): Property | undefined {
  return localPropertyData.find((p) => p.id === id && p.published);
}
