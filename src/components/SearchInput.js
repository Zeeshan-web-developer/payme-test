import React from "react";
import "./SearchInput.css";

function SearchInput({ setSearchTerm, searchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search__input"
    />
  );
}

export default SearchInput;
