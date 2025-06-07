import React from "react";
import { Link } from "react-router-dom";

import Hogwartscrest from "../assets/Hogwartscrest.webp";
import homeQuickLinks from "../data/homeQuickLinks";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: { xs: 4, md: 8 }, // Responsive padding
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // Replaced home-section class with MUI sx props
        backgroundColor: 'background.paper', // Use theme's paper background for the section
        borderRadius: '1rem',
        boxShadow: '0 8px 16px rgba(0,0,0,0.08)',
        p: { xs: 3, md: 6 } // Adjusted padding for the box
      }}
    >
      <Box
        component="img"
        src={Hogwartscrest}
        alt="Hogwarts Vapensköld"
        sx={{
          maxWidth: "150px",
          height: "auto",
          mb: 3,
        }}
        className="home-crest" // Keep class if specific external styles apply
      />
      <Typography
        variant="h3" // Use a typography variant from the theme
        component="h1"
        gutterBottom
        sx={{
          color: 'secondary.main', // Use secondary color (burgundy) for this heading
          fontWeight: 700,
        }}
      >
        Välkommen till Hogwarts Studentportal!
      </Typography>
      <Typography
        variant="h6" // Use a typography variant for lead text
        component="p"
        sx={{
          color: 'text.secondary', // Use secondary text color
          mb: 4,
          maxWidth: '600px' // Constrain width for readability
        }}
      >
        Din digitala guide till magi, kunskap och gemenskap på Hogwarts skola för häxkonster och trolldom.
      </Typography>

      <Box
        className="quick-menu-buttons"
        sx={{
          display: 'flex',
          flexWrap: 'wrap', // Allow buttons to wrap on smaller screens
          gap: 2, // Spacing between buttons
          justifyContent: 'center', // Center buttons
          width: '100%'
        }}
      >
        {homeQuickLinks.map((link) => (
          <Button
            key={link.path}
            component={Link}
            to={link.path}
            variant={link.muiProps.variant}
            color={link.muiProps.color}
            sx={{ minWidth: { xs: '100%', sm: '200px' } }} // Responsive minWidth
          >
            {link.text}
          </Button>
        ))}
      </Box>
    </Box>
  );
}