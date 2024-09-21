// src/ProductCard.jsx
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./ProductCard.css"; // Import the CSS for styling

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product__card">
      <div className="product__image__wrapper">
        <LazyLoadImage
          alt={product?.image?.alt}
          height="100%"
          src={product?.image}
          width="100%"
          className="product__image"
        />
      </div>
      <h2 className="product__title">{product?.title}</h2>
      <p className="product__price">{product?.price.toFixed(2)} - Rs</p>
      <button
        className="add__to__cart__button"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
