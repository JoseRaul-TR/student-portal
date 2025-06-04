import React, { useState, useContext } from "react";
import { RegistrationContext } from "../contexts/RegistrationContext";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";

import courses from "../data/courses";

export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCourseId, setSelectedCourseId] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState('info');

  const { registeredCourses, registerStudent } =
    useContext(RegistrationContext);

  const handleRegistration = (event) => {
    event.preventDefault();

    if (!name || !email || !selectedCourseId) {
      setMessage("Vänligen fyll i alla fält.");
      setMessageType("error");
      return;
    }

    const selectedCourse = courses.find(
      (course) => course.id === selectedCourseId
    );

    if (selectedCourse) {
      registerStudent(name, email, selectedCourse.id, selectedCourse.name);
      setMessage(
        `Tack, ${name}! Du har registrerat dig till kursen "${selectedCourse.name}".`
      );
      setMessageType("succes");
      // Reset form
      setName("");
      setEmail("");
      setSelectedCourseId("");
    } else {
      setMessage("Ett fel uppstod. Vänligen välj en giltig kurs.");
      setMessageType("error");
    }
    // Clean message after 5 sec
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "500px",
        margin: "auto",
        p: 3,
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleRegistration}
    >
      <Typography
        variant="h5"
        component="h2"
        sx={{ mb: 3, width: "100%", textAlign: "center" }}
      >
        Registrera dig
      </Typography>

      {message && (
        <Alert
          severity={messageType}
          sx={{ width: "100%", mb: 2, borderRadius: "8px" }}
        >
          {message}
        </Alert>
      )}

      <TextField
        label="Namn"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        sx={{ borderRadius: "8px" }}
      />
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        sx={{ borderRadius: "8px" }}
      />
      <FormControl fullWidth sx={{ m: 1, minWidth: 120, borderRadius: "8px" }}>
        <InputLabel id="course-select-label">Välj kurs</InputLabel>
        <Select
          labelId="course-select-label"
          id="course-select"
          value={selectedCourseId}
          label="Välj kurs"
          onChange={(e) => setSelectedCourseId(e.target.value)}
          required
        >
          <MenuItem value="">
            <em>Ingen</em>
          </MenuItem>
          {courses.map((course) => (
            <MenuItem key={course.id} value={course.id}>
              {course.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="contained"
        type="submit"
        sx={{
          mt: 3,
          width: "100%",
          borderRadius: "8px",
          padding: "12px 0",
          fontSize: "1.1rem",
          background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
          boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
        }}
      >
        Registrera
      </Button>
      <Typography
        variant="body2"
        sx={{ mt: 2, width: "100%", textAlign: "center" }}
      >
        Antal registrerade kurser: {registeredCourses.length}
      </Typography>
    </Box>
  );
}
