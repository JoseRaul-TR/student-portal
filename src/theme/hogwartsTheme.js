import { createTheme } from "@mui/material/styles";

const hogwartsTheme = createTheme({
  palette: {
    // Primary Color: Deep Castle Stone / Dark Navy
    primary: {
      main: "#2B2B4A", // Dark Blue/Purple for primary elements (buttons, app bar)
      light: "#4C4C7A", // A lighter shade for hover/active states
      dark: "#1C1C3A", // A darker shade for contrast
      contrastText: "#F8F2E2", // Parchment for text on primary background
    },
    // Secondary Color: Rich Burgundy / Deep Crimson (can be used for accents or secondary buttons)
    secondary: {
      main: "#7B1C2F", // Deep Red for secondary actions or highlights
      light: "#A34254",
      dark: "#5B0F1F",
      contrastText: "#F8F2E2",
    },
    // Error, Warning, Info, Success (can align to house colors or standard)
    error: {
      main: "#D32F2F", // Standard error red
    },
    warning: {
      main: "#FFC107", // Standard warning yellow
    },
    info: {
      main: "#2196F3", // Standard info blue
    },
    success: {
      main: "#4CAF50", // Standard success green
    },
    // Backgrounds and Text Colors
    background: {
      default: "#F8F2E2", // Aged Parchment for general page background
      paper: "#FFFFFF", // Pure white for cards, dialogs, etc. (you can change to parchment for a more antique look)
    },
    text: {
      primary: "#333333", // Standard dark text on light backgrounds
      secondary: "#6D6D6D", // Lighter grey for secondary text
    },
    // Custom colors (can be accessed via theme.palette.hogwarts)
    hogwarts: {
      parchment: "#F8F2E2",
      gold: "#C8AE7F",
      darkGreen: "#1B5E20",
      // House specific if needed:
      gryffindorRed: "#7F0909",
      gryffindorGold: "#EEBA30",
      hufflepuffYellow: "#FFD800",
      hufflepuffBlack: "#372E29",
      ravenclawBlue: "#0E1A40",
      ravenclawBronze: "#946B2D",
      slytherinGreen: "#1A472A",
      slytherinSilver: "#AAAAAA",
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h1: {
      // Example: More majestic heading
      fontSize: "3rem",
      fontWeight: 700,
      color: "#2B2B4A", // Primary dark blue
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
      color: "#7B1C2F", // Secondary deep red
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
      color: "#2B2B4A",
    },
    h4: {
      fontSize: "1.8rem",
      fontWeight: 500,
      color: "#7B1C2F",
    },
    // You can define other typography variants here
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // Slightly more rounded than Bootstrap default
          textTransform: "none", // Prevent uppercase by default
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // Subtle shadow
          "&:hover": {
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          },
        },
        containedPrimary: {
          backgroundColor: "#7B1C2F", // Use burgundy for primary buttons
          "&:hover": {
            backgroundColor: "#5B0F1F", // Darker burgundy on hover
          },
        },
        containedSecondary: {
          // Re-purpose secondary for a different look if needed
          backgroundColor: "#C8AE7F", // Gold for secondary
          color: "#333333",
          "&:hover": {
            backgroundColor: "#B0956A",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px", // Match button border-radius
          },
        },
      },
    },
    MuiPaper: {
      // For cards and other paper surfaces
      styleOverrides: {
        root: {
          borderRadius: "12px", // More prominent rounding for cards
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)", // Slightly stronger shadow
        },
      },
    },
    MuiAlert: {
      // For alerts
      styleOverrides: {
        root: {
          borderRadius: "8px", // Match consistent rounding
        },
      },
    },
  },
});

export default hogwartsTheme;
