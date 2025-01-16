import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Paper } from "@mui/material";

const TransactionDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock data for the details (in a real app, fetch from the backend)
  const mockDetails = {
    date: "2025-01-10",
    amount: 10,
    description: "Redeemed for Pikachu",
    location: "Minimart A",
  };

  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: "#1a1a1a",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: "#FFD700", fontWeight: "bold" }}
      >
        Transaction Details
      </Typography>
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          backgroundColor: "#333",
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Redemption ID: {id}
        </Typography>
        <Typography variant="body1">Date: {mockDetails.date}</Typography>
        <Typography variant="body1">
          Amount: {mockDetails.amount} vouchers
        </Typography>
        <Typography variant="body1">
          Description: {mockDetails.description}
        </Typography>
        <Typography variant="body1">
          Location: {mockDetails.location}
        </Typography>
      </Paper>
    </Box>
  );
};

export default TransactionDetails;
