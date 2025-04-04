// src/App.tsx
import React from "react";
import ProductCard from "./components/ProductCard";

const mockProduct = {
  brand: "Apple",
  href: "/mfp/9623007/apple-iphone-15?pid=11517874360",
  title: "Apple iPhone 11 128 Go Double SIM Noir Sidéral",
  newPrice: "754 €",
  usedPrice: "720,99 €",
  image: "https://fr.shopping.rakuten.com/photo/4075345048_ML_NOPAD.jpg",
};

const App: React.FC = () => {
  return (
    <div className="App">
      <ProductCard product={mockProduct} />
    </div>
  );
};

export default App;
