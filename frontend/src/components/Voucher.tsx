import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Fade,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Voucher: React.FC = () => {
  const [voucherBalance, setVoucherBalance] = useState<number>(0);
  const [transactionHistory, setTransactionHistory] = useState<
    { id: string; date: string; amount: number; description: string }[]
  >([]);
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate API call to fetch voucher and transaction data
    setVoucherBalance(50);
    setTransactionHistory([
      { id: "1", date: "2025-01-10", amount: 10, description: "Groceries" },
      { id: "2", date: "2025-01-08", amount: 20, description: "Electronics" },
      { id: "3", date: "2025-01-05", amount: 5, description: "Snacks" },
    ]);

    // Trigger fade-in animation
    setFadeIn(true);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 4,
        padding: 4,
        backgroundColor: "#1a1a1a",
        color: "white",
      }}
    >
      {/* Voucher Balance Section */}
      <Fade in={fadeIn} timeout={1000}>
        <Paper
          elevation={3}
          sx={{
            padding: 3,
            backgroundColor: "#333",
            borderRadius: 2,
            flex: 1,
          }}
        >
          <Typography
            variant="h5"
            sx={{ mb: 2, color: "#FFD700", fontWeight: "bold" }}
          >
            Voucher Balance
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: "bold", color: "white" }}>
            {voucherBalance}
          </Typography>
        </Paper>
      </Fade>

      {/* Transaction History Section */}
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          backgroundColor: "#333",
          borderRadius: 2,
          flex: 2,
          overflowY: "auto",
          maxHeight: "70vh",
        }}
      >
        <Typography
          variant="h5"
          sx={{ mb: 2, color: "#FFD700", fontWeight: "bold" }}
        >
          Transaction History
        </Typography>
        <List>
          {transactionHistory.map((transaction, index) => (
            <React.Fragment key={transaction.id}>
              <ListItem
                component="div"
                onClick={() => navigate(`/transaction/${transaction.id}`)}
                sx={{
                  "&:hover": { backgroundColor: "#444" },
                }}
              >
                <ListItemText
                  primary={
                    <Typography sx={{ fontWeight: "bold", color: "#white" }}>
                      {transaction.amount} vouchers
                    </Typography>
                  }
                  secondary={
                    <Typography sx={{ color: "#cccccc" }}>
                      {transaction.date} - {transaction.description}
                    </Typography>
                  }
                />
              </ListItem>
              {index < transactionHistory.length - 1 && (
                <Divider sx={{ backgroundColor: "#555" }} />
              )}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Voucher;
