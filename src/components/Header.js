import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = ({ products, setFiltered, setShowFilters, showFilters }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showHamberger, setShowHamberger] = useState(false)

  // 🔍 Search functionality
  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const filtered = products.filter((p) =>
      p.title.toLowerCase().includes(query)
    );
    setFiltered(filtered);
  };

  // ↕️ Sorting functionality
  const handleSort = (e) => {
    const order = e.target.value;
    setSortOrder(order);
    let sorted;

    if (order === "null") {
      setFiltered(products);
      return;
    } else {
      sorted = [...products].sort((a, b) => {
        if (order === "lowToHigh") return a.price - b.price;
        if (order === "highToLow") return b.price - a.price;
        return 0;
      });
    }

    setFiltered(sorted);
  };

  const onClickSearch = () => {
    setShowSearch((prev) => !prev);
  };

  const toggleFilters = () => setShowFilters((prev) => !prev);

  const onClickHamburger = () =>{
    setShowHamberger(prev=> !prev)
  }

  return (
    <>
    <header className="header-large-device">
      
      <div className="logo-section-container">
        <div className="logo-section">
          <img
            src="https://res.cloudinary.com/da4a06plx/image/upload/v1761925485/Logo_oswqku.png"
            alt="Company Logo"
            className="company-logo"
          />
        </div>
        <h1 className="company-name">LOGO</h1>

        <div className="header-icons-items-container">
          <button className="search-btn" onClick={onClickSearch}>
            <img
              src="https://res.cloudinary.com/da4a06plx/image/upload/v1761925485/search-normal_g7ggop.png"
              alt="search icon"
              className="header-icons"
            />
          </button>
          <img
            src="https://res.cloudinary.com/da4a06plx/image/upload/v1761925485/heart_zjyxjg.png"
            alt="heart icon"
            className="header-icons"
          />
          <img
            src="https://res.cloudinary.com/da4a06plx/image/upload/v1761925486/shopping-bag_lsjh9q.png"
            alt="shopping icon"
            className="header-icons"
          />
          <img
            src="https://res.cloudinary.com/da4a06plx/image/upload/v1761925485/profile_ivhj4s.png"
            alt="profile icon"
            className="header-icons"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="header-link-items-container">
        <h1 className="header-link-items active-link">SHOP</h1>
        <h1 className="header-link-items">SKILL</h1>
        <h1 className="header-link-items">STORIES</h1>
        <h1 className="header-link-items">ABOUT</h1>
      </div>

      {/* Heading & Description */}
      <h1 className="header-heading">DISCOVER OUR PRODUCTS</h1>
      <p className="header-description">
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>

      {/* Search Input (toggleable) */}
      {showSearch && (
        <div className="search-section">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      )}

      {/* 🔽 Final Row: Product Count, Show Filters, Sort */}
      <div className="header-bottom-bar">
        <div className="header-count-filter-container">
        <span className="product-count">{products.length} items</span>

        <button className="show-filters-btn" onClick={toggleFilters}>
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
        </div>
        <div className="header-controls">
          <select
            className="sort-select"
            value={sortOrder}
            onChange={handleSort}
          >
            <option className="sort-options" value="null">RECOMMENDED</option>
              <option className="sort-options" value="lowToHigh">Price: Low to High</option>
              <option className="sort-options" value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>
    </header>

    <header className="header-mobile-device">
      <div className="logo-section-container">
        <div className="logo-section">
        <button className="hamburger-btn" onClick={onClickHamburger}>
          <RxHamburgerMenu size={20}/>
        </button>
        <img
            src="https://res.cloudinary.com/da4a06plx/image/upload/v1761925485/Logo_oswqku.png"
            alt="Company Logo"
            className="company-logo-mobile"
          />
        </div>
        <h1 className="company-name-mobile">LOGO</h1>

        <div className="header-icons-items-container nav">
          <button className="search-btn" onClick={onClickSearch}>
            <img
              src="https://res.cloudinary.com/da4a06plx/image/upload/v1761925485/search-normal_g7ggop.png"
              alt="search icon"
              className="header-icons-mobile"
            />
          </button>
        </div>
      </div>
        {showHamberger? (
            <div className="show-hamberger-items-container">
              <div className="each-hamberger-item">
                  <img
                    src="https://res.cloudinary.com/da4a06plx/image/upload/v1761925485/heart_zjyxjg.png"
                    alt="heart icon"
                    className="header-icons-mobile"
                  />
                  <p>Wish List</p>
              </div>
              <div className="each-hamberger-item">
                  <img
                    src="https://res.cloudinary.com/da4a06plx/image/upload/v1761925486/shopping-bag_lsjh9q.png"
                    alt="shopping icon"
                    className="header-icons-mobile"
                  />
                  <p>Cart</p>
              </div>
              <div className="each-hamberger-item">
                  <img
                      src="https://res.cloudinary.com/da4a06plx/image/upload/v1761925485/profile_ivhj4s.png"
                      alt="profile icon"
                      className="header-icons-mobile"
                    />
                  <p>Profile</p>
              </div>
            </div>
        ):(null)}
        <div className="header-link-items-container-mobile">
          <h1 className="header-link-items-mobile">HOME</h1>
          <h1 className="header-link-items-mobile active-link">SHOP</h1>
        </div>
        <h1 className="header-heading-mobile">DISCOVER OUR PRODUCTS</h1>
        <p className="header-description-mobile">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
        {showSearch && (
        <div className="search-section">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      )}
        <div className="header-footer-container-mobile">
          <button className="show-filters-btn" onClick={toggleFilters}>
            {showFilters ? "HIDE FILTERS" : "FILTER"}
          </button>
          <div className="header-controls-mobile">
            <select
              className="sort-select"
              value={sortOrder}
              onChange={handleSort}
            >
              <option className="sort-options" value="null">RECOMMENDED</option>
              <option className="sort-options" value="lowToHigh">Price: Low to High</option>
              <option className="sort-options" value="highToLow">Price: High to Low</option>
            </select>
          </div>
        </div>  
        
    </header>
    </>
  );
};

export default Header;
