import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { Product } from "../types/Product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  console.log(product);
  return (
    <Card
      sx={{
        boxShadow: "0px 4px 10px rgba(33, 28, 39, 0.25)", // Custom drop shadow
        borderRadius: 2, // Optional: Rounded corners for a modern look
        overflow: "hidden", // Ensure content stays within rounded corners
      }}
    >
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
        <Button size="small" variant="outlined">
          Add to Cart
        </Button>
        <Button size="small" variant="contained" color="primary">
          Checkout
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
