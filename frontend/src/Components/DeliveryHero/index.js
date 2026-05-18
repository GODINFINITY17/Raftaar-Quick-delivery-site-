import React from "react";

const DeliveryHero = () => {
  const location = localStorage.getItem("location") || "your area";

  return (
    <div className="container mt-3">
      <div className="delivery-hero">
        <h1>Groceries delivered in minutes</h1>
        <p>
          Order fresh food, dairy, snacks & more to <strong>{location}</strong>.
          All prices in ₹ (INR).
        </p>
        <div className="delivery-hero-badges">
          <span>⚡ 10–15 min delivery</span>
          <span>🏷️ Up to 30% off</span>
          <span>💳 UPI · Cards · COD</span>
        </div>
      </div>
    </div>
  );
};

export default DeliveryHero;
