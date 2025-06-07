import React, { useState, useContext, useEffect } from "react";
import { RegistrationContext } from "../contexts/RegistrationContext";
import { useFormInput } from "../hooks/useFormInput";
import { useFormValidation } from "../hooks/useFormValidation";
import RegisteredCoursesTable from "../components/RegisteredCoursesTable"; // Import the new component

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
import Tooltip from "@mui/material/Tooltip";

import BackpackIcon from "@mui/icons-material/Backpack";

import courses from "../data/courses";

export default function RegistrationForm() {
  // Use custom hooks for form inputs
  const name = useFormInput("");
  const email = useFormInput("");
  const selectedCourseId = useFormInput("");

  // Use custom hook for form validation
  const { errors, isValid, validate, resetErrors } = useFormValidation({
    name,
    email,
    selectedCourseId,
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("info");

  const [openRegistrationDialog, setOpenRegistrationDialog] = useState(false);
  const [openRegisteredCoursesDialog, setOpenRegisteredCoursesDialog] =
    useState(false);

  const { registeredCourses, registerStudent } =
    useContext(RegistrationContext);

  // Clear message after a few seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleOpenRegistrationDialog = (event) => {
    event.preventDefault(); // Prevent default form submission initially

    setMessage(""); // Clear previous messages
    setMessageType("info"); // Reset message type

    // Validate form using the hook useFormValidation.js
    if (!validate()) {
      setMessage("Vänligen fyll i alla obligatoriska fält korrekt.");
      setMessageType("error");
      return; // Validation failed, do not open dialog
    }

    setOpenRegistrationDialog(true); // Open the registration confirmation dialog
  };

  const handleConfirmRegistration = () => {
    const courseToRegister = courses.find(
      (course) => course.id === selectedCourseId.value
    );

    if (courseToRegister) {
      registerStudent(
        name.value,
        email.value,
        courseToRegister.id,
        courseToRegister.name
      );
      setMessage(
        `Tack, ${name.value}! Du har registrerat dig till kursen "${courseToRegister.name}".`
      );
      setMessageType("success");

      // Reset form fields using the custom hook's reset function
      name.reset();
      email.reset();
      selectedCourseId.reset();
      resetErrors(); // Reset validation errors
    } else {
      setMessage("Ett fel uppstod. Vänligen välj en giltig kurs.");
      setMessageType("error");
    }
    setOpenRegistrationDialog(false); // Close the dialog after registration
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
        value={name.value}
        onChange={name.onChange}
        required
        error={!!errors.name}
        helperText={errors.name || ""}
        sx={{ borderRadius: "8px" }}
      />
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        fullWidth
        value={email.value}
        onChange={email.onChange}
        required
        error={!!errors.email}
        helperText={errors.email || ""}
        sx={{ borderRadius: "8px" }}
      />
      <FormControl fullWidth sx={{ m: 1, minWidth: 120, borderRadius: "8px" }}>
        <InputLabel id="course-select-label">Välj kurs</InputLabel>
        <Select
          labelId="course-select-label"
          id="course-select"
          value={selectedCourseId.value}
          label="Välj kurs"
          onChange={selectedCourseId.onChange}
          required
          error={!!errors.selectedCourseId}
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
        {errors.selectedCourseId && (
          <FormHelperText error>{errors.selectedCourseId}</FormHelperText>
        )}
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
        }}
      >
        Antal registrerade kurser: {registeredCourses.length}
        <Tooltip title="Visa registrerade kurser">
        <BackpackIcon
          fontSize="small"
          sx={{ cursor: "pointer", "&:hover": { color: "primary.main" } }}
          onClick={handleOpenRegisteredCoursesDialog}
        />
        </Tooltip>
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
            {
              courses.find((course) => course.id === selectedCourseId.value)
                ?.name
            }
            " med namnet "{name.value}" och email "{email.value}"?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseRegistrationDialog} color="error">
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

      {/* Material-UI Full-Screen Dialog to show Registered Courses as a Table */}
      <Dialog
        onClose={handleCloseRegisteredCoursesDialog}
        open={openRegisteredCoursesDialog}
        fullScreen
        sx={{
          ".MuiDialog-paperFullScreen": {
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            p: 0,
          }}
        >
          {/* Table component takes up remaining space */}
          <RegisteredCoursesTable
            data={registeredCourses}
            onClose={handleCloseRegisteredCoursesDialog}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
