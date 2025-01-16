import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, Alert } from "@mui/material";
import axios from "axios";

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/reset-password", { email });
      setMessage({ type: "success", text: response.data.message });
    } catch (err: any) {
      setMessage({
        type: "error",
        text: err.response?.data.message || "An error occurred. Please try again.",
      });
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8, p: 4, border: "1px solid #ccc", borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Reset Password
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
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Send OTP
        </Button>
      </Box>
    </Container>
  );
};

export default ResetPassword;