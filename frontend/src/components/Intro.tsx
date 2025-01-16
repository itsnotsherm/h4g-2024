import React from "react";
import { Container, Typography } from "@mui/material";

const Intro: React.FC = () => {
  return (
    <Container sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", mb: 6 }}>
        Catch Them All
      </Typography>
      <Typography variant="h6" gutterBottom>
        Available Products
      </Typography>
    </Container>
  );
};

export default Intro;
