/** Demo categories for quick-commerce home screen */
export const DEMO_CATEGORIES = [
  {
    _id: "demo-cat-dairy",
    id: "demo-cat-dairy",
    name: "Dairy",
    color: "#E8F5E9",
    images: [
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=200&h=200&fit=crop",
    ],
  },
  {
    _id: "demo-cat-fruits",
    id: "demo-cat-fruits",
    name: "Fruits",
    color: "#FFF3E0",
    images: [
      "https://images.unsplash.com/photo-1619566636852-adc1d1b3e8b0?w=200&h=200&fit=crop",
    ],
  },
  {
    _id: "demo-cat-veg",
    id: "demo-cat-veg",
    name: "Vegetables",
    color: "#E8F5E9",
    images: [
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=200&h=200&fit=crop",
    ],
  },
  {
    _id: "demo-cat-snacks",
    id: "demo-cat-snacks",
    name: "Snacks",
    color: "#FFF8E1",
    images: [
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=200&h=200&fit=crop",
    ],
  },
  {
    _id: "demo-cat-beverages",
    id: "demo-cat-beverages",
    name: "Beverages",
    color: "#E3F2FD",
    images: [
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=200&h=200&fit=crop",
    ],
  },
  {
    _id: "demo-cat-staples",
    id: "demo-cat-staples",
    name: "Staples",
    color: "#FBE9E7",
    images: [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&h=200&fit=crop",
    ],
  },
  {
    _id: "demo-cat-meat",
    id: "demo-cat-meat",
    name: "Meat",
    color: "#FFEBEE",
    images: [
      "https://images.unsplash.com/photo-1604503468506-a8da358d04a5?w=200&h=200&fit=crop",
    ],
  },
  {
    _id: "demo-cat-bakery",
    id: "demo-cat-bakery",
    name: "Bakery",
    color: "#EFEBE9",
    images: [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&h=200&fit=crop",
    ],
  },
];

export const getDisplayCategories = (apiCategories = []) => {
  const list = Array.isArray(apiCategories) ? apiCategories : [];
  if (list.length >= 4) return list;
  return DEMO_CATEGORIES;
};
