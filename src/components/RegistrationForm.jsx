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
import FormHelperText from "@mui/material/FormHelperText";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";

import CloseIcon from "@mui/icons-material/Close";
import BackpackIcon from "@mui/icons-material/Backpack";

import courses from "../data/courses";

// Simple email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCourseId, setSelectedCourseId] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("info");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailFormatError, setEmailFormatError] = useState(false);
  const [courseError, setCourseError] = useState(false);

  const [openRegistrationDialog, setOpenRegistrationDialog] = useState(false); // New state for registration dialog
  const [openRegisteredCoursesDialog, setOpenRegisteredCoursesDialog] =
    useState(false);

  const { registeredCourses, registerStudent } =
    useContext(RegistrationContext);

    // Helper function to validate form inputs
    const validateForm = () => {
      let isValid = true;

      if (!name.trim()) {
        setNameError(true);
        isValid = false;
      } else {
        setNameError(false);
      }

    if (!email.trim()) {
      setEmailError(true);
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailFormatError(true);
      isValid = false;
    } else {
      setEmailError(false);
      setEmailFormatError(false);
    }

    if (!selectedCourseId) {
      setCourseError(true);
      isValid = false;
    } else {
      setCourseError(false);
    }

    return isValid;
  };

  const handleOpenRegistrationDialog = (event) => {
    event.preventDefault(); // Prevent default form submission initially

    setMessage(""); // Clear previous messages
    setMessageType("Info"); // Reset message type

    if (!validateForm()) {
      setMessage("Vänligen fyll i alla obligatoriska fält korrekt.");
      setMessageType("error");
      setTimeout(() => setMessage(""), 5000);
      return;
    }

    setOpenRegistrationDialog(true); // Open the registration confirmation dialog
  };

  const handleConfirmRegistration = () => {
    const selectedCourse = courses.find(
      (course) => course.id === selectedCourseId
    );

    if (selectedCourse) {
      registerStudent(name, email, selectedCourse.id, selectedCourse.name);
      setMessage(
        `Tack, ${name}! Du har registrerat dig till kursen "${selectedCourse.name}".`
      );
      setMessageType("success");
      // Reset form
      setName("");
      setEmail("");
      setSelectedCourseId("");
      setNameError(false);
      setEmailError(false);
      setCourseError(false);
      setEmailFormatError(false);
    } else {
      setMessage("Ett fel uppstod. Vänligen välj en giltig kurs.");
      setMessageType("error");
    }
    setOpenRegistrationDialog(false); // Close the dialog after registration
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  const handleCloseRegistrationDialog = () => {
    setOpenRegistrationDialog(false);
    setMessage(""); // Clear message if dialog is closed without confirming
  };

  const handleOpenRegisteredCoursesDialog = () => {
    setOpenRegisteredCoursesDialog(true);
  };

  const handleCloseRegisteredCoursesDialog = () => {
    setOpenRegisteredCoursesDialog(false);
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
      onSubmit={handleOpenRegistrationDialog}
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
        error={nameError}
        helperText={nameError ? "Namn får inte vara tomt" : ""}
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
        error={emailError || emailFormatError}
        helperText={
          emailError
            ? "Email får inte vara tomt"
            : emailFormatError
            ? "Vänligen ange en giltig email-adress"
            : ""
        }
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
        {courseError && <FormHelperText>Välj en kurs</FormHelperText>}
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
        }}
      >
        Registrera
      </Button>
      <Typography
        variant="body2"
        sx={{
          mt: 2,
          width: "100%",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.8",
          cursor: "pointer",
          "&:hover": {
            color: "primary.main",
            textDecoration: "underline",
          },
        }}
        onClick={handleOpenRegisteredCoursesDialog}
      >
        Antal registrerade kurser: {registeredCourses.length}
        <BackpackIcon fontSize="small" />
      </Typography>

      {/* Material-UI Dialog for Registration Confirmation */}
      <Dialog
        onClose={handleCloseRegistrationDialog}
        open={openRegistrationDialog}
      >
        <DialogTitle>Bekräfta registrering</DialogTitle>
        <DialogContent>
          <Typography>
            Är du säker på att du vill registrera dig till kursen "
            {courses.find((course) => course.id === selectedCourseId)?.name}"
            med namnet "{name}" och email "{email}"?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseRegistrationDialog} color="primary">
            Avbryt
          </Button>
          <Button
            onClick={handleConfirmRegistration}
            color="primary"
            variant="contained"
          >
            Bekräfta
          </Button>
        </DialogActions>
      </Dialog>

      {/* Material-UI Full-Screen Dialog to show Registered Courses */}
      <Dialog
        onClose={handleCloseRegisteredCoursesDialog}
        open={openRegisteredCoursesDialog}
        fullScreen
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
          }}
        >
          Dina registrerade kurser
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleCloseRegisteredCoursesDialog}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ p: 3 }}>
          {registeredCourses.length > 0 ? (
            <List>
              {registeredCourses.map((reg) => (
                <ListItem key={reg.id} disablePadding>
                  <ListItemText
                    primary={
                      <>
                        <Typography
                          component="span"
                          sx={{ fontWeight: "bold" }}
                        >
                          Kurs:
                        </Typography>
                        <Typography component="span">{` ${reg.courseName}`}</Typography>
                      </>
                    }
                    secondary={
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.secondary"
                      >
                        <Typography
                          component="span"
                          sx={{ fontWeight: "bold" }}
                        >
                          Student:
                        </Typography>
                        {` ${reg.studentName} (${reg.studentEmail}). `}
                        <Typography
                          component="span"
                          sx={{ fontWeight: "bold" }}
                        >
                          Registreringsdatum:
                        </Typography>
                        {` ${new Date(reg.registrationTime).toLocaleString(
                          "sv-SE",
                          {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )}.`}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography variant="body1" sx={{ textAlign: "center", p: 4 }}>
              Inga kurser är registrerade ännu.
            </Typography>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
