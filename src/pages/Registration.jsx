import React from "react";
import RegistrationForm from "../components/RegistrationForm";
import { Typography } from "@mui/material";

export default function Registration() {
  return (
    <>
      <Typography
        variant="h3"
        component="h1"
        className="mb-4 text-center"
        gutterBottom
      >
        Kursregistrering
      </Typography>
      <RegistrationForm />
    </>
  );
}
