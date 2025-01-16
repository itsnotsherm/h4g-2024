import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField,
  Box,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const Header: React.FC = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#1a1a1a",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        maxWidth: "100%",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo Section */}
        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: "bold",
            fontSize: "1rem",
            "&:hover": { color: "#FFD700" },
            paddingLeft: 2,
          }}
        >
          Catch Them All
        </Typography>

        {/* Search and Auth Buttons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 2,
              paddingX: 1,
            }}
          >
            <TextField
              variant="standard"
              placeholder="Search..."
              InputProps={{
                disableUnderline: true,
              }}
              sx={{
                width: 150,
                input: {
                  color: "#333",
                  "&::placeholder": {
                    color: "#666", // Darker color for the placeholder
                    opacity: 1, // Ensure placeholder is fully visible
                  },
                },
              }}
            />
            <IconButton sx={{ color: "#666" }}>
              <SearchIcon />
            </IconButton>
          </Box>
          <Button
            variant="outlined"
            color="inherit"
            component={Link}
            to="/login"
            sx={{
              borderColor: "#FFD700",
              color: "inherit",
              textTransform: "none",
              "&:hover": {
                borderColor: "#FFD700",
                backgroundColor: "rgba(255, 215, 0, 0.1)",
              },
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="/signup"
            sx={{
              backgroundColor: "#FFD700",
              color: "black",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#FFC300",
              },
            }}
          >
            Sign-up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
