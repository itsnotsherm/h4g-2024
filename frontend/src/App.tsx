import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Intro from "./components/Intro";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TransactionDetails from "./pages/TransactionDetails";
import ResetPassword from "./components/ResetPassword";
import Voucher from "./components/Voucher";
import Wishlist from "./pages/WishlistPage";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    background: {
      default: "#212120", // Set the default background to dark grey
    },
    text: {
      primary: "#ffffff", // Default text color (white) for better contrast
    },
    primary: {
      main: "#405782", // Set primary color to gold
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          {/* Default route */}
          <Route
            path="/"
            element={
              <>
                <Intro />
                <Voucher />
                <ProductList />
              </>
            }
          />

          {/* Login and Signup routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/transactions/:id" element={<TransactionDetails />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/account" element={<h1>Account Page</h1>} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
