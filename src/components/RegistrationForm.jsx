import React, { useState, useContext, useEffect } from "react";
import { RegistrationContext } from "../contexts/RegistrationContext";
import { useFormInput } from "../hooks/useFormInput";
import { useFormValidation } from "../hooks/useFormValidation";
import RegisteredCoursesTable from "../components/RegisteredCoursesTable";

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
import Slide from "@mui/material/Slide"; // Import Slide for the transition

import BackpackIcon from "@mui/icons-material/Backpack";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import courses from "../data/courses";

// Define the Transition component outside the main component for performance
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
      setMessage("Vänligen fyll i alla fält");
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
        backgroundColor: "background.paper",
        borderRadius: "12px",
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleOpenRegistrationDialog}
    >
      <Typography
        variant="h5"
        component="h2"
        sx={{
          mb: 3,
          width: "100%",
          textAlign: "center",
          color: "primary.main",
        }}
      >
        Fyll i följande uppgifter
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
      />
      <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="course-select-label">Välj kurs</InputLabel>
        <Select
          labelId="course-select-label"
          id="course-select"
          value={selectedCourseId.value}
          label="Välj kurs"
          onChange={selectedCourseId.onChange}
          required
          error={!!errors.selectedCourseId}
          sx={{ borderRadius: "8px" }}
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
          gap: 1,
          color: "text.secondary",
        }}
      >
        Antal registrerade kurser: {registeredCourses.length}
        <Tooltip title="Visa registrerade kurser">
          <BackpackIcon
            fontSize="small"
            sx={{
              cursor: "pointer",
              color: "primary.main",
              transition: "color 0.2s ease-in-out",
              "&:hover": {
                color: "secondary.main",
                transform: "scale(1.1)",
              },
            }}
            onClick={handleOpenRegisteredCoursesDialog}
          />
        </Tooltip>
      </Typography>

      {/* Material-UI Dialog for Registration Confirmation */}
      <Dialog
        onClose={handleCloseRegistrationDialog}
        open={openRegistrationDialog}
        PaperProps={{
          sx: {
            backgroundColor: "background.paper",
            borderRadius: "12px",
            boxShadow: 3,
          },
        }}
      >
        <DialogTitle
          sx={{
            color: "primary.dark",
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          Bekräfta registrering
        </DialogTitle>
        <DialogContent sx={{ pt: 2 }}>
          <Typography sx={{ pt: 1 }}>
            Är du säker på att du vill registrera dig till kursen "
            {
              courses.find((course) => course.id === selectedCourseId.value)
                ?.name
            }
            " med namnet "<strong>{name.value}</strong>" och email "
            <strong>{email.value}</strong>"?
          </Typography>
        </DialogContent>
        <DialogActions
          sx={{ borderTop: "1px solid", borderColor: "divider", pt: 1 }}
        >
          <Button
            onClick={handleCloseRegistrationDialog}
            color="error"
            variant="outlined"
          >
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

      {/* Material-UI Dialog to show Registered Courses as a Table with Transition */}
      <Dialog
        open={openRegisteredCoursesDialog}
        slots={Transition}
        keepMounted
        onClose={handleCloseRegisteredCoursesDialog}
        aria-labelledby="registered-courses-dialog-title"
        maxWidth="lg"
        fullWidth
        sx={{
          backgroundColor: "background.paper",
          borderRadius: "12px",
          boxShadow: 5,
        }}
      >
        <DialogContent
          sx={{
            p: 0,
          }}
        >
          {/* RegisteredCoursesTable component will take up space as needed */}
          <RegisteredCoursesTable
            data={registeredCourses}
            onClose={handleCloseRegisteredCoursesDialog}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
