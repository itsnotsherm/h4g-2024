import React, { useState } from "react";
import { Grid, Container, Typography, Box } from "@mui/material";
import ProductCard from "./ProductCard";
import bulbasaur from "../assets/bulbasaur.png";
import charmander from "../assets/charmander.png";
import squirtle from "../assets/squirtle.png";
import { Product } from "../types/Product";

const ProductList: React.FC = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const handleAddToWishlist = (product: Product) => {
    if (!wishlist.find((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
    alert(`"${product.name}" added to your wishlist!`);
  };

  const handlePreorder = (product: Product) => {
    alert(`You have preordered "${product.name}".`);
  };

  const products: Product[] = [
    {
      id: 1,
      image: bulbasaur,
      name: "Bulbasaur",
      price: 10,
      stock: 5,
      description: "A cute grass type Pokemon",
      isOutOfStock: false,
    },
    {
      id: 2,
      image: charmander,
      name: "Charmander",
      price: 10,
      stock: 0,
      description: "A fiery lizard Pokemon",
      isOutOfStock: true,
    },
    {
      id: 3,
      image: squirtle,
      name: "Squirtle",
      price: 10,
      stock: 3,
      description: "A water turtle Pokemon",
      isOutOfStock: false,
    },
  ];

  return (
    <Box sx={{ mt: 6 }}>
      {" "}
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#FFD700", fontWeight: "bold" }}
      >
        Products{" "}
      </Typography>
      <Container sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {products.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <ProductCard
                product={product}
                onAddToWishlist={handleAddToWishlist}
                onPreorder={handlePreorder}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductList;
