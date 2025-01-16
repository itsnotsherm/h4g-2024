import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Intro from "./components/Intro";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";

// function App() {
//   return (
//     <div>
//       <Header />
//       <Intro />
//       <ProductList />
//       <Footer />
//     </div>
//   );
// }
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Default route */}
        <Route
          path="/"
          element={
            <>
              <Intro />
              <ProductList />
            </>
          }
        />

        {/* Login and Signup routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Placeholder for other routes if needed */}
        <Route path="/products" element={<h1>Products Page</h1>} />
        <Route path="/vouchers" element={<h1>Vouchers Page</h1>} />
        <Route path="/transactions" element={<h1>Transactions Page</h1>} />
        <Route path="/account" element={<h1>Account Page</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
