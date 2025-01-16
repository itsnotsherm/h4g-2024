import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { Product } from "../types/Product";

interface ProductCardProps {
  product: Product;
  onAddToWishlist: (product: Product) => void; // Callback to add to wishlist
  onPreorder: (product: Product) => void; // Callback for preorder
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToWishlist,
  onPreorder,
}) => {
  return (
    <Card
      sx={{
        boxShadow: "0px 4px 10px rgba(33, 28, 39, 0.25)", // Custom drop shadow
        borderRadius: 2, // Optional: Rounded corners for a modern look
        overflow: "hidden", // Ensure content stays within rounded corners
        position: "relative", // For overlaying out-of-stock badge
      }}
    >
      {/* Out-of-Stock Badge */}
      {product.isOutOfStock && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "rgba(255, 0, 0, 0.8)",
            color: "white",
            padding: "4px 8px",
            fontSize: "0.8rem",
            fontWeight: "bold",
            borderRadius: "0 0 8px 0",
          }}
        >
          Out of Stock
        </Box>
      )}

      <CardMedia
        component="img"
        sx={{ height: 200, objectFit: "contain", margin: 2 }}
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6" color="black" fontWeight={600}>
          {product.name}
        </Typography>
        <Typography variant="body2" color="black">
          Price: ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        {/* Add to Wishlist Button */}
        <Button
          size="small"
          variant="outlined"
          onClick={() => onAddToWishlist(product)}
        >
          Add to Wishlist
        </Button>

        {/* Preorder Button */}
        {product.isOutOfStock && (
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() => onPreorder(product)}
          >
            Preorder
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;

