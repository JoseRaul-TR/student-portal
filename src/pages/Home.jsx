import React from "react";
import { Link } from "react-router-dom";

import Hogwartscrest from "../assets/Hogwartscrest.webp";
import homeQuickLinks from "../data/homeQuickLinks";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

export default function Home() {
  const theme = useTheme(); // Acces the theme object

  return (
    <>
      <Box
        component="img"
        src={Hogwartscrest}
        alt="Hogwarts Vapensköld"
        sx={{
          maxWidth: { xs: "120px", sm: "150px", md: "200px" },
          height: "auto",
          mb: { xs: 2, sm: 3 },
        }}
      />
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          color: "secondary.main", // Use secondary color (burgundy) for this heading
          fontWeight: 700,
          fontSize: {
            xs: theme.typography.h4.fontSize,
            sm: theme.typography.h3.fontSize,
            md: theme.typography.h2.fontSize,
          },
          textAlign: "center",
        }}
      >
        Välkommen till Hogwarts Studentportal!
      </Typography>
      <Typography
        variant="h6"
        component="p"
        sx={{
          color: "text.primary",
          mb: { xs: 3, sm: 4 },
          maxWidth: { xs: "90%", sm: "600px" },
          textAlign: "center",
          px: { xs: 1, sm: 0 },
        }}
      >
        Din digitala guide till magi, kunskap och gemenskap på Hogwarts skola
        för häxkonster och trolldom.
      </Typography>

      <Box
        className="quick-menu-buttons"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: { xs: 1.5, sm: 2 },
          justifyContent: "center",
          width: "100%",
          px: { xs: 2, sm: 0 },
        }}
      >
        {homeQuickLinks.map((link) => (
          <Button
            key={link.path}
            component={Link}
            to={link.path}
            variant={link.muiProps.variant}
            color={link.muiProps.color}
            sx={{ 
              minWidth: { xs: "100%", sm: "200px" },
              flexGrow: 1,
              maxWidth: { xs: "100%", sm: "calc(50% - 8px)", md: "200px" },
            }}
          >
            {link.text}
          </Button>
        ))}
      </Box>
    </>
  );
}
