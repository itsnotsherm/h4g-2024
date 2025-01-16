import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Intro: React.FC = () => {
  return (
    <Container sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", mb: 6 }}>
        Catch Them All
      </Typography>
      {/* Navigation Buttons */}
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          color="inherit"
          component={RouterLink}
          to="/vouchers"
          sx={{
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: 500,
            "&:hover": { color: "#FFD700" },
          }}
        >
          Vouchers
        </Button>
      </Box>
      <Typography variant="h6" gutterBottom>
        Available Products
      </Typography>
    </Container>
  );
};

export default Intro;
