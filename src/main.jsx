import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { RegistrationProvider } from "./contexts/RegistrationContext";

//Material UI Imports for Theming
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import hogwartsTheme from "./theme/hogwartsTheme";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RegistrationProvider>
        <ThemeProvider theme={hogwartsTheme}>
          <App />
        </ThemeProvider>
      </RegistrationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
