import React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function NotFound() {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        backgroundColor: "background.paper",
        borderRadius: "12px",
        boxShadow: 3,
        p: { xs: 3, md: 5 },
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <Typography variant="h2" component="h2" gutterBottom>
        404 - Sidan hittades inte
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Vi kunde inte hitta sidan du letade efter.
      </Typography>
      <Button component={Link} to="/" variant="contained" color="primary">
        Gå till startsidan
      </Button>
    </Box>
  );
}
