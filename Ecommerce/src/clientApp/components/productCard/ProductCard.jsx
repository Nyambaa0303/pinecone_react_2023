import React from "react";
import "./productCard.css";
export default function ProductCard() {
  return (
    <div className="col-2">
      <div className="product-card">
        <div className="product-img">
          <img
            src="https://images.unsplash.com/photo-1674478969244-a8bbf5e06624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="product img"
          />
        </div>
        <div className="product-detials">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">New Brand</h5>
        </div>
      </div>
    </div>
  );
}
