// Function to filter products
export const filterProducts = (
  products,
  priceRange,
  searchTerm,
  selectedCategory
) => {
  return products?.filter(
    (product) =>
      product.title.toLowerCase()?.includes(searchTerm?.toLowerCase()) && // Search by title
      (selectedCategory === "all" || product?.category === selectedCategory) && // Filter by category
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] // Filter by price range
  );
};

// Function to sort products
export const sortProducts = (filteredProducts, sortOption) => {
  return filteredProducts?.sort((a, b) => {
    if (sortOption === "price-asc") return a?.price - b?.price; //  ascending --price
    if (sortOption === "price-desc") return b.price - a?.price; //  descending --price
    if (sortOption === "title-asc") return a?.title?.localeCompare(b?.title); //  title A-Z
    if (sortOption === "title-desc") return b?.title?.localeCompare(a?.title); //  title Z-A
    return 0;
  });
};
