import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ email: string; role: string } | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setIsLoggedIn(true);
        setUser(JSON.parse(storedUser));
      } else {
        setIsLoggedIn(false);
        setUser(null);
        setAnchorEl(null); // Ensure menu closes when user logs out
      }
    };

    // Run on mount
    checkLoginStatus();

    // Listen for login/logout changes
    window.addEventListener("storage", checkLoginStatus);
    return () => window.removeEventListener("storage", checkLoginStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    setAnchorEl(null); // Ensure menu closes on logout
    setTimeout(() => navigate("/login"), 1000);

    // Notify other components that logout occurred
    window.dispatchEvent(new Event("storage"));
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1a1a1a" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{ textDecoration: "none", color: "inherit", fontWeight: "bold" }}
        >
          Catch Them All
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {isLoggedIn ? (
            <>
              <IconButton sx={{ color: "white" }} onClick={handleMenuOpen}>
                <AccountCircleIcon />
              </IconButton>
              <Menu 
                anchorEl={anchorEl} 
                open={Boolean(anchorEl)} 
                onClose={handleMenuClose} 
                onClick={handleMenuClose} // Close menu when clicking inside
              >
                <MenuItem onClick={() => navigate("/account")} style={{color: 'black'}}>My Account</MenuItem>
                <MenuItem onClick={handleLogout} style={{color: 'black'}}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/signup">
                Sign-up
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
