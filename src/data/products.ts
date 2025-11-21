




// src/data/products.ts

export interface Product {
  id: number;
  name: string;
  price: number;
  discountedPrice?: number;
  perBottlePrice?: number;
  image: string;
  description: string;
  features?: string[];
  category?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "19 Litre Bottle",
    price: 280,
    discountedPrice: 250,
    image: "/images/products/19-litre-bottle.jpg",
    description: "Ideal for offices, homes, schools & hospitals — crystal clear purity and safety in every drop.",
    features: ["19L sealed BPA-free bottle", "Free doorstep delivery", "Fits standard dispensers"],
    category: "Packaged Water",
  },
  {
    id: 2,
    name: "1.5 Litre Bottle",
    price: 60,
    image: "/images/products/1.5-Litre-bottle.jpg",  // آپ کے پاس بڑا L ہے، اس لیے درست
    description: "Perfect family-size bottle for travel, dining, and everyday hydration.",
    features: ["Premium-grade PET bottle", "Lightweight and portable", "100% pure mineral water"],
    category: "Packaged Water",
  },
  {
    id: 3,
    name: "500ml Bottle",
    price: 30,
    image: "/images/products/500ml-bottle.jpg",
    description: "Small and convenient — stay hydrated wherever you go.",
    features: ["Compact travel-friendly size", "Eco-safe & recyclable material", "Perfect for school or gym"],
    category: "Packaged Water",
  },
  {
    id: 4,
    name: "1.5 Litre Pack (6 Bottles)",
    price: 400,
    discountedPrice: 360,
    perBottlePrice: 60,
    image: "/images/products/NW-1.5litre-Shrink-Carton.jpg",
    description: "Bundle for families and small offices — convenient multi-pack savings.",
    features: ["Pack of 6 x 1.5L bottles", "Shrink-wrapped for hygiene", "Best value for families", "Per bottle Rs 60"],
    category: "Shrink Packs",
  },
  {
    id: 5,
    name: "500ml Pack (12 Bottles)",
    price: 400,
    discountedPrice: 360,
    perBottlePrice: 30,
    image: "/images/products/NW-500-ml-Shrink-Carton.jpg",  // ← درست نام (ہائفن والا)
    description: "12-bottle shrink pack — perfect for travel, meetings, and events.",
    features: ["Pack of 12 x 500ml bottles", "Lightweight & easy to carry", "Ideal for corporate or outdoor use", "Per bottle Rs 30"],
    category: "Shrink Packs",
  },
  {
    id: 6,
    name: "Bottle Cover 19L",
    price: 500,
    image: "/images/products/table-top-cover.PNG", 
    description: "Protective and stylish cover for your 19L bottle.",
    features: ["Compatible with 19L bottles", "Dust-proof & hygienic", "Easy to clean"],
    category: "Dispensers",
  },
  {
    id: 7,
    name: "Table Top Dispenser",
    price: 1500,
    image: "/images/products/table-top.jpeg",  
    description: "Compact, stylish, and durable — perfect for 19L bottle use in homes and offices.",
    features: ["Compatible with 19L bottles", "No electricity required", "Easy to clean & maintain"],
    category: "Dispensers",
  },
];

export default products;