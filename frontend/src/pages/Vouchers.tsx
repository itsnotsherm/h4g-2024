import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface VoucherHistory {
  id: string; // Add an ID field for navigation
  date: string;
  amount: number;
  description: string;
}

const Vouchers: React.FC = () => {
  const [voucherBalance, setVoucherBalance] = useState<number>(0);
  const [voucherHistory, setVoucherHistory] = useState<VoucherHistory[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Mock API call to fetch voucher data
    const fetchVoucherData = async () => {
      const mockData = {
        balance: 50,
        history: [
          {
            id: "1",
            date: "2025-01-10",
            amount: 10,
            description: "Redeemed for Pikachu",
          },
          {
            id: "2",
            date: "2025-01-08",
            amount: 20,
            description: "Added by admin",
          },
        ],
      };

      setVoucherBalance(mockData.balance);
      setVoucherHistory(mockData.history);
    };

    fetchVoucherData();
  }, []);

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
        Voucher Balance
      </Typography>
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          marginBottom: 3,
          backgroundColor: "#333",
          color: "white",
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Current Balance: {voucherBalance} vouchers
        </Typography>
      </Paper>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#FFD700" }}
      >
        Redemption History
      </Typography>
      <List
        sx={{
          backgroundColor: "#333",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        {voucherHistory.map((record, index) => (
          <React.Fragment key={record.id}>
            <ListItem
              component="div" // Use "div" or any element if needed
              onClick={() => navigate(`/redemption/${record.id}`)}
              sx={{
                cursor: "pointer", // Add pointer cursor to indicate it's clickable
                "&:hover": {
                  backgroundColor: "#444",
                },
              }}
            >
              <ListItemText
                primary={
                  <Typography sx={{ fontWeight: "bold" }}>
                    {record.amount} vouchers
                  </Typography>
                }
                secondary={
                  <Typography sx={{ color: "#cccccc" }}>
                    {record.date} - {record.description}
                  </Typography>
                }
              />
            </ListItem>
            {index < voucherHistory.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default Vouchers;
