import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "20px",
        marginTop: "20px",
        background: "#f5f5f5",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © 2025 H4G Team
      </Typography>
    </footer>
  );
};

export default Footer;
