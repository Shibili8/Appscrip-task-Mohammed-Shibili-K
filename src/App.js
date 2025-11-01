import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import Filters from "./components/Filters";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  
  const [filtered, setFiltered] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    document.title = "Product Listing Page | Appscrip Task";

    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setFiltered(res.data);
        
      })
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <>
      <Header products={products} setFiltered={setFiltered} setShowFilters={setShowFilters} showFilters={showFilters}/>
      {console.log(products)}
      <main>
        <div className="main-container">
          
          <div className="filter-section">
            {showFilters && (
              <Filters
                products={products}
                setFiltered={setFiltered}
                toggleFilters={() => setShowFilters()}
                
              />
            )}
          </div>
          <div className="product-section">
            <ProductGrid products={filtered} />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default App;
