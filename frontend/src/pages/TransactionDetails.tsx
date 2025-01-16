import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Paper } from "@mui/material";

const TransactionDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Box
      sx={{
        padding: 4,
        minHeight: "100vh",
        backgroundColor: "#1a1a1a",
        color: "white",
      }}
    >

      <Paper
        elevation={3}
        sx={{
          padding: 3,
          backgroundColor: "#333",
          borderRadius: 2,
        }}
      >
      <Typography variant="h4" gutterBottom sx={{ color: "#FFD700", fontWeight: "600" }}>
        Transaction Details
      </Typography>
        <Typography variant="body1" sx={{ color: "white" }}>
          Transaction ID: {id}
        </Typography>
        {/* Additional transaction details can be fetched and displayed here */}
      </Paper>
    </Box>
  );
};

export default TransactionDetails;
