/** Demo grocery catalog — shown when API has few/no products; prices in INR */
export const DEMO_PRODUCTS = [
  {
    id: "demo-amul-milk",
    name: "Amul Taaza Toned Milk",
    price: 28,
    oldPrice: 32,
    discount: 12,
    unit: "500 ml",
    rating: 4.8,
    countInStock: 50,
    category: "Dairy",
    images: [
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&h=500&fit=crop",
    ],
    description:
      "Fresh toned milk — perfect for tea, coffee & daily use. Delivered chilled.",
  },
  {
    id: "demo-brown-bread",
    name: "Britannia Brown Bread",
    price: 45,
    oldPrice: 50,
    discount: 10,
    unit: "400 g",
    rating: 4.5,
    countInStock: 30,
    category: "Bakery",
    images: [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&h=500&fit=crop",
    ],
    description: "Soft whole wheat bread, no added colours.",
  },
  {
    id: "demo-bananas",
    name: "Robusta Bananas",
    price: 49,
    oldPrice: 65,
    discount: 25,
    unit: "1 dozen",
    rating: 4.6,
    countInStock: 40,
    category: "Fruits",
    images: [
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11fe08?w=500&h=500&fit=crop",
    ],
    description: "Naturally ripened bananas, handpicked daily.",
  },
  {
    id: "demo-eggs",
    name: "Farm Fresh Eggs",
    price: 89,
    oldPrice: 99,
    discount: 10,
    unit: "6 pcs",
    rating: 4.7,
    countInStock: 25,
    category: "Dairy",
    images: [
      "https://images.unsplash.com/photo-1582722872445-44dc5f7e58c9?w=500&h=500&fit=crop",
    ],
    description: "Protein-rich white eggs from cage-free farms.",
  },
  {
    id: "demo-tomatoes",
    name: "Hybrid Tomatoes",
    price: 32,
    oldPrice: 42,
    discount: 24,
    unit: "500 g",
    rating: 4.4,
    countInStock: 60,
    category: "Vegetables",
    images: [
      "https://images.unsplash.com/photo-1546094096-0df4f05548f8?w=500&h=500&fit=crop",
    ],
    description: "Juicy red tomatoes for curries & salads.",
  },
  {
    id: "demo-basmati-rice",
    name: "India Gate Basmati Rice",
    price: 189,
    oldPrice: 220,
    discount: 14,
    unit: "1 kg",
    rating: 4.9,
    countInStock: 35,
    category: "Staples",
    images: [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&h=500&fit=crop",
    ],
    description: "Long-grain aromatic basmati — biryani ready.",
  },
  {
    id: "demo-butter",
    name: "Amul Salted Butter",
    price: 58,
    oldPrice: 62,
    discount: 6,
    unit: "100 g",
    rating: 4.8,
    countInStock: 45,
    category: "Dairy",
    images: [
      "https://images.unsplash.com/photo-1589985270824-647f06bdbc2f?w=500&h=500&fit=crop",
    ],
    description: "Creamy table butter for parathas & toast.",
  },
  {
    id: "demo-coke",
    name: "Coca-Cola Soft Drink",
    price: 40,
    oldPrice: 45,
    discount: 11,
    unit: "750 ml",
    rating: 4.3,
    countInStock: 80,
    category: "Beverages",
    images: [
      "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&h=500&fit=crop",
    ],
    description: "Chilled cola — perfect with snacks.",
  },
  {
    id: "demo-chips",
    name: "Lay's Classic Salted",
    price: 20,
    oldPrice: 25,
    discount: 20,
    unit: "52 g",
    rating: 4.5,
    countInStock: 100,
    category: "Snacks",
    images: [
      "https://images.unsplash.com/photo-1566478989037-e429fcd158a9?w=500&h=500&fit=crop",
    ],
    description: "Crispy potato chips — India's favourite snack.",
  },
  {
    id: "demo-atta",
    name: "Aashirvaad Whole Wheat Atta",
    price: 249,
    oldPrice: 275,
    discount: 9,
    unit: "5 kg",
    rating: 4.7,
    countInStock: 20,
    category: "Staples",
    images: [
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&h=500&fit=crop",
    ],
    description: "100% MP whole wheat flour for soft rotis.",
  },
  {
    id: "demo-onions",
    name: "Red Onions",
    price: 38,
    oldPrice: 55,
    discount: 31,
    unit: "1 kg",
    rating: 4.2,
    countInStock: 70,
    category: "Vegetables",
    images: [
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&h=500&fit=crop",
    ],
    description: "Fresh red onions — kitchen essential.",
  },
  {
    id: "demo-chicken",
    name: "Fresh Chicken Breast",
    price: 199,
    oldPrice: 240,
    discount: 17,
    unit: "500 g",
    rating: 4.6,
    countInStock: 15,
    category: "Meat",
    images: [
      "https://images.unsplash.com/photo-1604503468506-a8da358d04a5?w=500&h=500&fit=crop",
    ],
    description: "Antibiotic-free boneless breast — cut fresh.",
  },
  {
    id: "demo-paneer",
    name: "Amul Fresh Paneer",
    price: 95,
    oldPrice: 105,
    discount: 10,
    unit: "200 g",
    rating: 4.7,
    countInStock: 28,
    category: "Dairy",
    images: [
      "https://images.unsplash.com/photo-1631452180519-c014fe9461e6?w=500&h=500&fit=crop",
    ],
    description: "Soft cottage cheese for paneer tikka & curries.",
  },
  {
    id: "demo-oranges",
    name: "Nagpur Oranges",
    price: 79,
    oldPrice: 99,
    discount: 20,
    unit: "1 kg",
    rating: 4.5,
    countInStock: 35,
    category: "Fruits",
    images: [
      "https://images.unsplash.com/photo-1547514704-6c962893e371?w=500&h=500&fit=crop",
    ],
    description: "Sweet & juicy oranges — vitamin C boost.",
  },
  {
    id: "demo-maggi",
    name: "Maggi 2-Minute Noodles",
    price: 14,
    oldPrice: 16,
    discount: 12,
    unit: "70 g",
    rating: 4.9,
    countInStock: 120,
    category: "Snacks",
    images: [
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&h=500&fit=crop",
    ],
    description: "India's favourite instant noodles — masala taste.",
  },
  {
    id: "demo-curd",
    name: "Mother Dairy Dahi",
    price: 35,
    oldPrice: 40,
    discount: 12,
    unit: "400 g",
    rating: 4.6,
    countInStock: 40,
    category: "Dairy",
    images: [
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&h=500&fit=crop",
    ],
    description: "Thick set curd — probiotic & fresh.",
  },
  {
    id: "demo-ice-cream",
    name: "Magnum Truffle Ice Cream",
    price: 90,
    oldPrice: 100,
    discount: 10,
    unit: "80 ml",
    rating: 4.8,
    countInStock: 25,
    category: "Dairy",
    images: [
      "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500&h=500&fit=crop",
    ],
    description: "Premium chocolate truffle ice cream stick.",
  },
  {
    id: "demo-kurkure",
    name: "Kurkure Masala Munch",
    price: 20,
    oldPrice: 20,
    discount: 0,
    unit: "90 g",
    rating: 4.6,
    countInStock: 150,
    category: "Snacks",
    images: [
      "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=500&h=500&fit=crop",
    ],
    description: "Spicy and crunchy corn puffs.",
  },
  {
    id: "demo-chocolate",
    name: "Cadbury Dairy Milk Silk",
    price: 85,
    oldPrice: 90,
    discount: 5,
    unit: "60 g",
    rating: 4.9,
    countInStock: 60,
    category: "Snacks",
    images: [
      "https://images.unsplash.com/photo-1614088685112-0a760b71a3c8?w=500&h=500&fit=crop",
    ],
    description: "Smooth and creamy milk chocolate.",
  },
  {
    id: "demo-coffee",
    name: "Nescafe Classic Coffee",
    price: 150,
    oldPrice: 165,
    discount: 9,
    unit: "50 g",
    rating: 4.7,
    countInStock: 45,
    category: "Beverages",
    images: [
      "https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=500&h=500&fit=crop",
    ],
    description: "100% pure instant coffee for a perfect start.",
  }
];

export const DEMO_BANNERS = [
  {
    id: "banner-1",
    images: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=400&fit=crop",
    ],
    title: "Groceries in 10 minutes",
    subtitle: "Fresh fruits, dairy & snacks at your door",
  },
  {
    id: "banner-2",
    images: [
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&h=400&fit=crop",
    ],
    title: "Up to 30% off today",
    subtitle: "Best deals on staples & beverages",
  },
  {
    id: "banner-3",
    images: [
      "https://images.unsplash.com/photo-1579117079885-3e610f54806f?w=1200&h=400&fit=crop",
    ],
    title: "Free delivery above ₹199",
    subtitle: "Order now — pay via UPI or cards",
  },
];

export const getDemoProductById = (id) =>
  DEMO_PRODUCTS.find((p) => p.id === id) || null;

export const isDemoProductId = (id) =>
  typeof id === "string" && id.startsWith("demo-");

/** Merge API products with demo catalog; demo fills gaps when API is empty */
export const mergeWithDemoProducts = (apiProducts = []) => {
  const list = Array.isArray(apiProducts) ? [...apiProducts] : [];
  if (list.length >= 8) {
    return list.map(enrichProduct);
  }
  const apiIds = new Set(list.map((p) => p.id || p._id));
  const extras = DEMO_PRODUCTS.filter((d) => !apiIds.has(d.id)).slice(
    0,
    Math.max(0, 30 - list.length)
  );
  return [...list.map(enrichProduct), ...extras];
};

export const enrichProduct = (product) => {
  if (!product) return product;
  const images =
    product.images?.length > 0 && product.images[0]
      ? product.images
      : DEMO_PRODUCTS[0].images;
  return {
    ...product,
    id: product.id || product._id,
    images,
    unit: product.unit || product.weight || "1 pc",
    price: Number(product.price) || 0,
  };
};
