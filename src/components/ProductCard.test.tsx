// src/components/ProductCard.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
import exp from "constants";

const mockProduct = {
  brand: "Apple",
  href: "/mfp/9623007/apple-iphone-15?pid=11517874360",
  title: "Apple iPhone 11 128 Go Double SIM Noir Sidéral",
  newPrice: "754 €",
  usedPrice: "720,99 €",
  image: "https://fr.shopping.rakuten.com/photo/4075345048_ML_NOPAD.jpg",
};

test("renders the product details correctly", () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText(mockProduct.brand)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.newPrice)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.usedPrice)).toBeInTheDocument();
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", mockProduct.image);
    expect(img).toHaveAttribute("alt", mockProduct.title);
  });

  test("renders 'Neuf' next to the new price", () => {
    render(<ProductCard product={mockProduct} />);
        expect(screen.getByText("Neuf")).toBeInTheDocument();
  });
