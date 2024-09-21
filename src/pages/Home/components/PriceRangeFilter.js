import React from "react";

function PriceRangeFilter({ priceRange, setPriceRange }) {
  return (
    <div className="price__filter">
      <label>
        Min Price:
        <input
          type="number"
          value={priceRange[0]}
          onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
          className="price__input"
        />
      </label>
      <label>
        Max Price:
        <input
          type="number"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
          className="price__input"
        />
      </label>
    </div>
  );
}

export default React.memo(PriceRangeFilter);
