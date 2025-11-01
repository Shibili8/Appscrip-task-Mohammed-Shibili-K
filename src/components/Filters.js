import React from "react";

const Filters = ({ products, setFiltered, toggleFilters }) => {
  const handleIdealFilter = (type) => {
    let filteredData = [];

    if (type === "Men") {
      filteredData = products.filter((p) => p.category === "men's clothing");
    } else if (type === "Women") {
      filteredData = products.filter((p) => p.category === "women's clothing");
    
    } else {
      filteredData = products;
    }

    setFiltered(filteredData);
  };

  
  const handleCategoryFilter = (category) => {
    if (category === "all") {
      setFiltered(products);
    } else {
      const filteredData = products.filter((p) =>
        p.category.toLowerCase().includes(category.toLowerCase())
      );
      setFiltered(filteredData);
    }
  };

  return (
    <aside className="filters">
      <div className="filters-header">
        <h2>Filters</h2>
        <button className="close-filters" onClick={toggleFilters}>
          ✕
        </button>
      </div>

      
      <div className="filter-group">
        <h3>Ideal For</h3>
        <button onClick={() => handleIdealFilter("Men")}>Men</button>
        <button onClick={() => handleIdealFilter("Women")}>Women</button>
        
      </div>

      
      <div className="filter-group">
        <h3>Category</h3>
        <button onClick={() => handleCategoryFilter("all")}>All</button>
        <button onClick={() => handleCategoryFilter("clothing")}>
          Clothing
        </button>
        <button onClick={() => handleCategoryFilter("jewelery")}>
          Jewellery
        </button>
        <button onClick={() => handleCategoryFilter("electronics")}>
          Electronics
        </button>
      </div>
    </aside>
  );
};

export default Filters;
