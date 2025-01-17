import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, Alert } from "@mui/material";

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "timmy@gmail.com") {
        setMessage({ type: "success", text: "Your password has been reset. The link to recover your account has been sent to your email. This link is only valid for 24 hours."})
        setMessage({ type: "error", text: "This email is not registered." });
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
          sx={{ mb: 2, input: { color: "black" }}}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Reset my password
        </Button>
      </Box>
    </Container>
  );
};

export default ResetPassword;