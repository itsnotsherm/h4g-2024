import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const users = [
  { email: "timmy@gmail.com", password: "password", isAdmin: false },
  { email: "admin@catchthemall.com", password: "admin", isAdmin: true },
];

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const user = users.find((user) => user.email === email && user.password === password);
  
    if (user) {
      setMessage({ type: "success", text: "Login successful!" });
      localStorage.setItem("user", JSON.stringify(user));  // Store entire user object
      localStorage.setItem("isAdmin", user.isAdmin.toString());  // Store isAdmin separately
      setTimeout(() => {
        navigate(user.isAdmin ? "/admin" : "/");
        window.dispatchEvent(new Event("storage")); // Notify other components
      }, 1000);
    } else {
      setMessage({ type: "error", text: "Invalid email or password" });
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 8,
        p: 4,
        border: "1px solid #444",
        borderRadius: 2,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
        backgroundColor: "#1a1a1a",
        color: "white",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: "#FFD700", fontWeight: "bold" }}
      >
        Login
      </Typography>
      {message.text && (
        <Alert severity={message.type === "success" ? "success" : "error"} sx={{ mb: 2 }}>
          {message.text}
        </Alert>
      )}
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Email"
          type="email"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            mb: 2,
            input: { color: "white" },
            label: { color: "#FFD700" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#444" },
              "&:hover fieldset": { borderColor: "#FFD700" },
              "&.Mui-focused fieldset": { borderColor: "#FFD700" },
            },
          }}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            mb: 2,
            input: { color: "white" },
            label: { color: "#FFD700" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#444" },
              "&:hover fieldset": { borderColor: "#FFD700" },
              "&.Mui-focused fieldset": { borderColor: "#FFD700" },
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#FFD700",
            color: "black",
            "&:hover": {
              backgroundColor: "#90a6d6",
            },
          }}
        >
          Login
        </Button>
        <Typography align="center" sx={{ mt: 2, color: "white" }}>
          <Link
            component="button"
            onClick={() => navigate("/reset-password")}
            sx={{
              textDecoration: "none",
              color: "#FFD700",
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Forgot Password?
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
