import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, Alert } from "@mui/material";

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Retrieve users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");

    // Check if the email exists
    const user = storedUsers.find((user: { email: string }) => user.email === email);

    if (user) {
      // Simulate sending a password reset email
      const resetToken = Math.random().toString(36).substr(2); // Generate a mock token
      localStorage.setItem("resetToken", JSON.stringify({ email, token: resetToken })); // Store token for simulation
      setMessage({
        type: "success",
        text: "Your password has been reset. The link to recover your account has been sent to your email. This link is only valid for 24 hours.",
      });
    } else {
      setMessage({ type: "error", text: "This email is not registered." });
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
        Reset Password
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
          Reset my password
        </Button>
      </Box>
    </Container>
  );
};

export default ResetPassword;
