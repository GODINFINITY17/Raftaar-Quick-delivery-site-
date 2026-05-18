# 🚀 RAFTAAR - Quick Commerce Web App

![RAFTAAR Banner](https://via.placeholder.com/1200x300.png?text=RAFTAAR+-+Quick+Commerce)

RAFTAAR is a modern, ultra-fast quick-commerce (10-minute delivery style) web application built using the MERN stack (MongoDB, Express, React, Node.js). It offers a sleek and intuitive UI inspired by leading quick-commerce platforms, providing users with a seamless grocery and essential shopping experience.

## ✨ Features

- **🛍️ Complete E-Commerce Flow**: Browse products, add to cart, proceed to checkout, and place orders.
- **⚡ Quick-Commerce Aesthetic**: Designed with modern web standards, featuring a clean UI, subtle micro-animations, and vibrant brand colors.
- **🛒 Persistent Local Cart**: Seamlessly add items to your cart and wishlist without needing to log in, utilizing local storage.
- **📍 Smart Location Detection**: Integrated geolocation features using OpenStreetMap (Nominatim) for automatic delivery address detection.
- **📱 Fully Responsive**: Optimized for all devices, from desktop to mobile, with a dedicated sticky bottom navigation on smaller screens.
- **🔐 User Authentication**: Secure login and registration flows for users to manage past orders and saved addresses.
- **⚙️ Admin Panel**: A dedicated admin interface to manage products, categories, orders, and users.

## 🛠️ Tech Stack

- **Frontend**: React.js, Material-UI (MUI), React Router, Axios, Bootstrap, Swiper
- **Backend (Admin & API)**: Node.js, Express.js (Assumed external dependency)
- **Database**: MongoDB (Mongoose)

## 📁 Project Structure

```text
RAFTAAR/
├── admin/      # Admin dashboard (React) — runs on port 3002
├── frontend/   # Customer storefront (React) — runs on port 3000
└── package.json
```

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/raftaar.git
   cd raftaar
   ```

2. **Install Dependencies**:
   You can install dependencies for both the frontend and admin panel simultaneously:
   ```bash
   npm run install:all
   ```
   *Or install them manually:*
   ```bash
   cd admin && npm install
   cd ../frontend && npm install --legacy-peer-deps
   ```

3. **Environment Variables**:
   Create a `.env` file in both the `frontend` and `admin` directories with the necessary API URLs:
   ```env
   # frontend/.env
   REACT_APP_BASE_URL=http://localhost:4000
   
   # admin/.env
   REACT_APP_BASE_URL=http://localhost:4000
   ```

### Running the App Locally

Start the **Customer Storefront** (runs on `http://localhost:3000`):
```bash
npm run start:frontend
```

Start the **Admin Dashboard** (runs on `http://localhost:3002`):
```bash
npm run start:admin
```

## 💡 Acknowledgements
Built as a comprehensive demonstration of a modern quick-commerce storefront. Designed to be fast, reliable, and visually engaging.
