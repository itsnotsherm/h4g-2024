import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Button,
  Divider,
} from "@mui/material";
import { Product } from "../types/Product";

const Wishlist: React.FC = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const handleRemove = (id: number) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <>
      <Box
        sx={{
          padding: 4,
          backgroundColor: "#1a1a1a",
          color: "white",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#FFD700", fontWeight: "600" }}
        >
          Wishlist
        </Typography>
        <Paper
          elevation={3}
          sx={{
            padding: 3,
            backgroundColor: "#333",
            borderRadius: 2,
          }}
        >
          <List>
            {wishlist.length > 0 ? (
              wishlist.map((item) => (
                <React.Fragment key={item.id}>
                  <ListItem>
                    <ListItemText
                      primary={
                        <Typography variant="h6" sx={{ color: "#FFD700" }}>
                          {item.name}
                        </Typography>
                      }
                      secondary={`Price: $${item.price}`}
                    />
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </Button>
                  </ListItem>
                  <Divider sx={{ backgroundColor: "#555" }} />
                </React.Fragment>
              ))
            ) : (
              <Typography variant="body1" sx={{ color: "white" }}>
                Your wishlist is empty.
              </Typography>
            )}
          </List>
        </Paper>
      </Box>

      <Box
        sx={{
          padding: 4,
          backgroundColor: "#1a1a1a",
          color: "white",
          minHeight: "100vh",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#FFD700", fontWeight: "600" }}
        >
          Preorders
        </Typography>
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            backgroundColor: "#333",
            borderRadius: 2,
          }}
        >
          <Typography variant="body1" sx={{ color: "white" }}>
            Your preorder list is empty.
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default Wishlist;
