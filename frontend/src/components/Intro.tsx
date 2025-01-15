import React from "react";
import { Container, Typography, Button } from "@mui/material";


const Intro: React.FC = () => {
    return (
        <Container sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="h3" gutterBottom>
            Minimart
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so folks
            don’t simply skip over it entirely.
          </Typography>
          <div style={{ margin: "20px 0" }}>
            <Button variant="contained" color="primary" sx={{ mr: 2 }}>
              Products
            </Button>
            <Button variant="contained" color="secondary">
              Vouchers
            </Button>
          </div>
        </Container>
      );
};

export default Intro;
