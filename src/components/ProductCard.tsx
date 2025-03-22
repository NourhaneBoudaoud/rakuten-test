import React from "react";
import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";

interface ProductProps {
  brand: string;
  href: string;
  title: string;
  newPrice: string;
  usedPrice: string;
  image: string;
}

const ProductCard: React.FC<{ product: ProductProps }> = ({ product }) => {
  return (
    <Card
      sx={{
        height: "152px",
        width: "343px",
        paddingY: "16px",
        display: "flex",
        borderColor: "#E0E0E0",
        borderWidth: "2px",
        alignItems: "center",
      }}
    >
      <CardMedia
        component="img"
        height="120px"
        width="120px"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: "contain" }}
      />
      <CardContent sx={{width: "479px" }}>
        <Typography sx={{fontSize:"12px", color:"#696969", fontWeight:"medium"}}>{product.brand}</Typography>
        <Typography sx={{fontSize:"14px", color:"#333", fontWeight:"bold"}}>{product.title}</Typography>
        <Box sx={{display:"flex",alignItems:"center", color:"#BF0000", gap:"4px"}}>
          <Typography sx={{fontSize:"20px", fontWeight:"medium"}}>{product.newPrice}</Typography>
          <Typography sx={{fontWeight:"medium"}}>Neuf</Typography>
        </Box>
        <Box sx={{display:"flex",alignItems:"center", color:"#333", gap:"4px"}}>
          <Typography>Occasion dès</Typography>
          <Typography sx={{fontSize:"20px", fontWeight:"medium"}}>{product.usedPrice}</Typography>
        </Box>


      </CardContent>
    </Card>
  );
};

export default ProductCard;
