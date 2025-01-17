import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate(); // Use navigate for redirection

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name && email && password && mobile) {
      // Retrieve existing users from localStorage
      const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");

      // Check if the email already exists
      const emailExists = storedUsers.some(
        (user: { email: string }) => user.email === email
      );

      if (emailExists) {
        setMessage({ type: "error", text: "Email already exists!" });
        return;
      }

      // Add the new user
      const newUser = { name, email, password, mobile, isAdmin: false };
      storedUsers.push(newUser);

      // Update users in localStorage
      localStorage.setItem("users", JSON.stringify(storedUsers));

      setMessage({
        type: "success",
        text: "Signup successful! Redirecting to login page...",
      });

      // Clear input fields
      setName("");
      setEmail("");
      setPassword("");
      setMobile("");

      // Redirect to login page after a short delay
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      setMessage({ type: "error", text: "Please fill in all fields." });
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
        backgroundColor: "#1a1a1a", // Dark grey background
        color: "white", // Text color for better contrast
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: "#FFD700", fontWeight: "bold" }}
      >
        Sign Up
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
          label="Full Name"
          type="text"
          fullWidth
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
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
        <TextField
          label="Mobile"
          type="text"
          fullWidth
          required
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
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
          Sign Up
        </Button>
      </Box>
    </Container>
  );
};

export default Signup;
