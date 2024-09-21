import React from "react";

function ProductSorting({ sortOption, setSortOption }) {
  return (
    <select
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value)}
      className="sort-select"
    >
      <option value="default">Sort by</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="title-asc">Title: A-Z</option>
      <option value="title-desc">Title: Z-A</option>
    </select>
  );
}

export default ProductSorting;
