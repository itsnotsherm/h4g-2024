import React from "react";
import { Grid, Container } from "@mui/material";
import ProductCard from "./ProductCard";
import bulbasaur from "../assets/bulbasaur.png";
import charmander from "../assets/charmander.png";
import squirtle from "../assets/squirtle.png";
import { Product } from "../types/Product";

const ProductList: React.FC = () => {
  const products: Product[] = [
    {
      image: bulbasaur,
      name: "Bulbasaur",
      price: 10,
      stock: 5,
      description: "A cute grass type Pokemon",
    },
    {
      image: charmander,
      name: "Charmander",
      price: 10,
      stock: 0,
      description: "A fiery lizard Pokemon",
    },
    {
      image: squirtle,
      name: "Squirtle",
      price: 10,
      stock: 3,
      description: "A water turtle Pokemon",
    },
  ];

  return (
    <Container sx={{ py: 5 }}>
      <Grid container spacing={4}>
        {products.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
