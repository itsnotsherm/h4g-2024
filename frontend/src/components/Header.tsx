import { AppBar, Toolbar, Typography, Button, TextField } from "@mui/material";

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
        <Button variant="outlined" color="inherit" sx={{ mr: 1 }}>
          Login
        </Button>
        <Button variant="contained" sx={{ backgroundColor: "gold" }}>
          Sign-up
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
