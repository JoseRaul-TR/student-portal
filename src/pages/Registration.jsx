import React, { useState, useContext } from "react";
import { RegistrationContext } from "../contexts/RegistrationContext";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const coursesData = [
  { id: 1, name: "Introduktion till Programmering" },
  { id: 2, name: "Avancerad JavaScript" },
  { id: 3, name: "Webbutveckling med React" },
];

export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCourseId, setSelectedCourseId] = useState("");
  const { registerStudent } = useContext(RegistrationContext);

  const handleRegistration = () => {
    if (name && email && selectedCourseId) {
        const selectedCourse = coursesData.find(course => course.id === parseInt(selectedCourseId));
        const courseName = selectedCourse ? selectedCourse.name : 'Okänd kurs';
      registerStudent(name, email, parseInt(selectedCourseId), courseName);
      // Reset the form
      setName("");
      setEmail("");
      setSelectedCourseId("");
    } else {
      alert("Vänligen fyll i alla fält.");
    }
  };

  return (
    <>
      <h2>Kursregistrering</h2>
      <form className="mt-3">
        <TextField
          label="Namn"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-3"
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-3"
        />
        <FormControl fullWidth className="mb-3">
          <InputLabel id="course-select-label">Välj kurs</InputLabel>
          <Select
            labelIde="course-select-label"
            id="course-select"
            value={selectedCourseId}
            label="Välj kurs"
            onChange={(e) => setSelectedCourseId(e.target.value)}
          >
            <MenuItem value="">
              <em>Ingen</em>
            </MenuItem>
            {coursesData.map((course) => (
              <MenuItem key={course.id} value={course.id}>
                {course.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained" color="primay" onClick={handleRegistration}>
          Registrera
        </Button>
      </form>
    </>
  );
}
