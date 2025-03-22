// src/App.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders ProductCard with correct product details", () => {
  render(<App />);

  // Check if product title is displayed
  expect(screen.getByText(/Apple iPhone 11 128 Go Double SIM Noir Sidéral/i)).toBeInTheDocument();

  // Check if brand is displayed (check any of the results for "Apple")
  const brandText = screen.getAllByText(/Apple/i);
  expect(brandText.length).toBeGreaterThan(0);  // Ensure there's at least one "Apple" element

  // Check if prices are displayed
  expect(screen.getByText(/754 €/i)).toBeInTheDocument();
  expect(screen.getByText(/720,99 €/i)).toBeInTheDocument();

  // Check if the image is displayed
  const image = screen.getByAltText(/Apple iPhone 11 128 Go Double SIM Noir Sidéral/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", "https://fr.shopping.rakuten.com/photo/4075345048_ML_NOPAD.jpg");
});
