import React from "react";
import { Card, CardContent, Typography, CardMedia, Box, Skeleton } from "@mui/material";

interface ProductProps {
  brand: string;
  href: string;
  title: string;
  newPrice: string;
  usedPrice: string;
  image: string;
}

const ProductCard: React.FC<{ product: ProductProps }> = ({ product }) => {
  const isLoading =
    !product.brand || !product.title || !product.image || !product.newPrice || !product.usedPrice;

  return (
    <Card
      sx={{
        display: "flex",
        maxWidth: "343px",
        flexDirection: { xs: "column", sm: "row" }, // Stack items on mobile, row on larger screens
        borderColor: "#E0E0E0",
        borderWidth: "2px",
        alignItems: "center",
        padding: { xs: "16px", sm: "16px 24px" }, // Adjust padding based on screen size
      }}
    >
      {isLoading ? (
        <Skeleton variant="rectangular" width={120} height={120} sx={{ marginLeft: "12px" }} />
      ) : (
        <CardMedia
          component="img"
          height="120px"
          image={product.image}
          alt={product.title}
          sx={{
            width: "120px",
            objectFit: "contain",
            mb: { xs: "12px", sm: 0 }, // Margin bottom on mobile
          }}
        />
      )}

      <CardContent sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <Typography sx={{ fontSize: "12px", color: "#696969", fontWeight: "medium" }}>
          {isLoading ? <Skeleton width={80} /> : product.brand}
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "#333", fontWeight: "bold" }}>
          {isLoading ? <Skeleton width={200} /> : product.title}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", color: "#BF0000", gap: "4px" }}>
          <Typography sx={{ fontSize: "20px", fontWeight: "medium" }}>
            {isLoading ? <Skeleton width={50} /> : product.newPrice}
          </Typography>
          <Typography sx={{ fontWeight: "medium" }}>
            {isLoading ? <Skeleton width={30} /> : "Neuf"}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", color: "#333", gap: "4px" }}>
          <Typography>{isLoading ? <Skeleton width={50} /> : "Occasion dès"}</Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: "medium" }}>
            {isLoading ? <Skeleton width={50} /> : product.usedPrice}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
