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

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulated login validation
    if (email === "timmy@gmail.com" && password === "password") {
      setMessage({ type: "success", text: "Login successful! Welcome back." });
    } else {
      setMessage({ type: "error", text: "Invalid email or password." });
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 8,
        p: 4,
        border: "1px solid",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      {message.text && (
        <Alert
          severity={message.type === "success" ? "success" : "error"}
          sx={{ mb: 2 }}
        >
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
          sx={{ mb: 2 }}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" fullWidth>
          Login
        </Button>
        <Typography align="center" sx={{ mt: 2 }}>
          <Link
            component="button"
            onClick={() => navigate("/reset-password")}
            sx={{ textDecoration: "none", cursor: "pointer" }}
          >
            Forgot Password?
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
