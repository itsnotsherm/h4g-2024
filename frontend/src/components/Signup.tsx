import React, { useState } from "react";
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    Alert,
  } from "@mui/material";

const Signup: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate signup success
    if (name && email && password && mobile) {
      setMessage({ type: "success", text: "Signup successful! Please log in." });
    } else {
      setMessage({ type: "error", text: "Please fill in all fields." });
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8, p: 4, border: "1px solid #ccc", borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Sign Up
      </Typography>
      {message.text && (
        <Alert severity={message.type === "success" ? "success" : "error"} sx={{ mb: 2 }}>
          {message.text}
        </Alert>
      )}
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full Name"
          type="text"
          fullWidth
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 2 }}
        />
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
        <TextField
          label="Mobile"
          type="mobile"
          fullWidth
          required
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="success" fullWidth>
          Sign Up
        </Button>
      </Box>
    </Container>
  );
};

export default Signup;
