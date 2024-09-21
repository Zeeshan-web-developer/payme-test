import React from "react";
import ProductCard from "../../../components/ProductCard";

function ProductList({ sortedProducts, handleAddToCart }) {
  return (
    <div className="products__grid">
      {sortedProducts?.map((product) => (
        <ProductCard
          key={product.id}
          onAddToCart={handleAddToCart}
          product={product}
        />
      ))}
    </div>
  );
}

export default React.memo(ProductList);
