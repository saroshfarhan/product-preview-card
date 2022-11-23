import "./App.css";
import React, { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";

function App() {
  //custom hook to get windowWidth for card image change
  const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return windowWidth;
  };

  return (
    <main className="container mx-auto my-auto">
      <ProductCard windowWidth={useWindowWidth()} />
    </main>
  );
}

export default App;
