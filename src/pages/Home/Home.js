import React, { useState } from "react";
import useProductsFetchList from "../../hooks/useProductsFetchList";

import SearchInput from "../../components/SearchInput";
import ProductDetail from "../../components/ProductDetail";
import Modal from "../../components/Modal";
import {
  ProductList,
  CategoryFilter,
  PriceRangeFilter,
  ProductSorting,
} from "./components/index";

import { filterProducts, sortProducts } from "../../utils";
import "./Home.css";
function HomeContainer() {
  const { products, loading, error } = useProductsFetchList();

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  // Get filtered and sorted products
  const filteredProducts = filterProducts(
    products,
    priceRange,
    searchTerm,
    selectedCategory
  );
  const sortedProducts = sortProducts(filteredProducts, sortOption);

  const handleAddToCart = (product) => {
    if (!product?.id) return;
    setSelectedProduct(product);
    setIsOpen(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="home__container">
      {error && <div>{error?.message || "Something went wrong"}</div>}
      <SearchInput setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <CategoryFilter
        {...{
          products,

          selectedCategory,
          setSelectedCategory,
        }}
      />

      <PriceRangeFilter {...{ priceRange, setPriceRange }} />
      <ProductSorting sortOption={sortOption} setSortOption={setSortOption} />
      <ProductList {...{ sortedProducts, handleAddToCart }} />
      <Modal {...{ modalIsOpen, setIsOpen }}>
        <ProductDetail product={selectedProduct} />
      </Modal>
    </div>
  );
}

export default HomeContainer;
