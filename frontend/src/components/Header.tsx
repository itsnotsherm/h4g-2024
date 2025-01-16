import React from "react";
import { AppBar, Toolbar, Typography, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#333" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Minimart
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Products</Button>
        <Button color="inherit">Vouchers</Button>
        <Button color="inherit">Transactions</Button>
        <Button color="inherit">Account</Button>
        <TextField
          variant="outlined"
          placeholder="Search..."
          size="small"
          sx={{ mx: 2, backgroundColor: "white" }}
        />
        <Button
          variant="outlined"
          color="inherit"
          sx={{ mr: 1 }}
          component={Link}
          to="/login"
        >
          Login
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "gold" }}
          component={Link}
          to="/signup"
        >
          Sign-up
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
