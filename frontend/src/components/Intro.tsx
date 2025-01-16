import React from "react";
import { Box, Container, Typography } from "@mui/material";
import pikachu from "../assets/pikachu.png";

const Intro: React.FC = () => {
  return (
    <Container sx={{ mt: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: 2, md: 4 },
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" }, // Stack vertically on smaller screens
        }}
      >
        {/* Text Section */}
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            mb: { xs: 2, md: 0 }, // Adjust margin for responsiveness
            textAlign: "center", // Center-align on smaller screens
          }}
        >
          Catch Them All
        </Typography>

        {/* Image Section */}
        <Box
          component="img"
          src={pikachu}
          alt="Pikachu"
          sx={{
            width: { xs: "60%", md: "150px" },
          }}
        />
      </Box>
    </Container>
  );
};

export default Intro;
