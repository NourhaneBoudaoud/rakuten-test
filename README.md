# Product Card Component

This is a React component that displays a product card with details such as brand, title, new price, used price, and an image. The component includes a responsive design and ensures that data is correctly rendered only when available.

## Features
- **Responsive Design**: The card adjusts its layout based on screen size (mobile, tablet, and desktop).
- **Conditional Rendering**: Ensures that the product details only render when all necessary data (brand, title, price, and image) is available.
- **Skeleton Loading**: Displays loading skeletons for each piece of data while it’s being fetched or is missing.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NourhaneBoudaoud/rakuten-test.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the app:
   ```bash
   npm start
   ```

## Usage

```tsx
import React from 'react';
import ProductCard from './ProductCard';

const product = {
  brand: "Nike",
  href: "#",
  title: "Air Max 2021",
  newPrice: "$120.00",
  usedPrice: "$80.00",
  image: "https://example.com/product-image.jpg"
};

const App = () => {
  return (
    <div>
      <ProductCard product={product} />
    </div>
  );
};

export default App;
```

## Props

- `product` (object): The product data to display in the card.
  - `brand` (string): The brand name of the product.
  - `href` (string): Link to the product page.
  - `title` (string): The product title.
  - `newPrice` (string): The price of the new product.
  - `usedPrice` (string): The price of the used product.
  - `image` (string): The URL of the product image.
