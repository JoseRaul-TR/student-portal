import React from "react";
import { Link } from "react-router-dom";

import HowartsCrest from "../assets/Hogwartscrest.webp";
import homeQuickLinks from "../data/homeQuickLinks";

import Button from "@mui/material/Button";

export default function Home() {
  return (
    <div className="text-center py-5 home-section">
      <img
        src={HowartsCrest}
        alt="Hogwarts Crest"
        className="img-fluid home-crest"
      />
      <h1 className="display-4 mb-4">
        Välkommen till Hogwarts skola för häxkonst och trolldom Studentportalen!
      </h1>
      <p className="lead mb-5">
        Din centrala plats för kursinformation, nyheter och registrering.
      </p>
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center quick-menu-buttons">
        {homeQuickLinks.map((link) => (
          <Button
            key={link.path}
            component={Link} // Makes MUI Button behave as a React Router Link
            to={link.path}
            size="large" // Standard Material UI button size
            sx={{ m: 1 }} // Add margin using Material UI system properties, similar to Bootstrap's m-2
            {...link.muiProps} // Spread the Material UI specific props (variant, color)
          >
            {link.text}
          </Button>
        ))}
      </div>
    </div>
  );
}