import React from "react";
import RegistrationForm from "../components/RegistrationForm";
import { Typography } from "@mui/material";

export default function Registration() {
  return (
    <>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ color: "primary.main", mb: "4", textAlign: "center" }}
      >
        Kursregistrering
      </Typography>
      <RegistrationForm />
    </>
  );
}
