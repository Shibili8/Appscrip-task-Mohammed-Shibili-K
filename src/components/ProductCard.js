import React from "react";

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt="" />
    <h3>{product.title}</h3>
    <p>${product.price}</p>
    <button>Add to Cart</button>
  </div>
);

export default ProductCard;
