import React from "react";

function CategoryFilter({ selectedCategory, setSelectedCategory, products }) {
  const getUniqueCategories = (products) => {
    const categories = products.map((product) => product.category);
    return ["all", ...new Set(categories)];
  };

  return (
    <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
      className="category__select"
    >
      {getUniqueCategories(products).map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default React.memo(CategoryFilter);
