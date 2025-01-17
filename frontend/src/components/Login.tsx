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
import { supabase } from "../services/supabaseClient"; // Adjust the path as needed

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Query Supabase for user with matching email and password
      const { data: users, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", email);

      if (error) throw error;

      if (users && users.length > 0) {
        const user = users[0];

        // Check if the password matches
        if (user.password === password) {
          // Set success message
          setMessage({ type: "success", text: "Login successful!" });

          // Store the user in local storage
          localStorage.setItem(
            "user",
            JSON.stringify({ email: user.email, isAdmin: user.is_admin })
          );
          localStorage.setItem("isAdmin", user.is_admin.toString());

          // Trigger storage event for Header
          window.dispatchEvent(new Event("storage"));

          // Navigate to the appropriate page
          setTimeout(() => {
            navigate(user.is_admin ? "/admin" : "/");
          }, 1000);
        } else {
          // Incorrect password
          setMessage({ type: "error", text: "Invalid email or password." });
        }
      } else {
        // User not found
        setMessage({ type: "error", text: "Invalid email or password." });
      }
    } catch (error: any) {
      console.error("Error logging in:", error.message);
      setMessage({ type: "error", text: "An error occurred. Please try again." });
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
