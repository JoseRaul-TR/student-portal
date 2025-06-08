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
    // Gold as a distinct accent color for highlights, active states
    accent: {
      main: "#FFC14E", // Warm Gold
      light: "#FFD78F",
      dark: "#E0A32C",
      contrastText: "#333333", // Dark text on gold
    },
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
      paper: "#FFFFFF", // Pure white for cards, dialogs, etc. (you can change to parchment for a more antique look if desired, e.g., #FBF6EC)
    },
    text: {
      primary: "#333333", // Standard dark text on light backgrounds
      secondary: "#6D6D6D", // Lighter grey for secondary text
      light: "#FAFAFA", // Near White Text for dark backgrounds
    },
    // Custom colors (can be accessed via theme.palette.hogwarts)
    hogwarts: {
      parchment: "#F8F2E2",
      gold: "#FFC14E", // Updated to the brighter gold in CSS vars
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
    button: {
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0.5rem", // Match your Bootstrap button radius
          textTransform: "none", // Prevent uppercase by default
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // Subtle shadow
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          },
        },
        containedPrimary: {
          backgroundColor: "#7B1C2F", // Burgundy for primary buttons
          "&:hover": {
            backgroundColor: "#5B0F1F", // Darker burgundy on hover
          },
          color: "#F8F2E2", // Light text on primary buttons
        },
        containedSecondary: {
          backgroundColor: "#FFC14E", // Gold for secondary buttons
          color: "#333333", // Dark text on gold
          "&:hover": {
            backgroundColor: "#E0A32C", // Darker gold on hover
          },
        },
        containedSuccess: {
          backgroundColor: "#1B5E20",
          color: "#FAFAFA",
          "&:hover": {
            backgroundColor: "#113e14",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "0.5rem", // Match button border-radius
          },
        },
      },
    },
    MuiPaper: {
      // For cards and other paper surfaces (e.g., MuiCard, MuiDialog)
      styleOverrides: {
        root: {
          borderRadius: "0.75rem", // Match your original card radius
          boxShadow: "0 4px 8px rgba(0,0,0,0.05)", // Match your original card shadow
          backgroundColor: "#F8F2E2", // Use parchment for cards by default
          color: "#333333", // Dark text on cards
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: "0.5rem", // Match consistent rounding
        },
      },
    },
    MuiAppBar: {
      // Styling for your Navbar if you migrate to MUI AppBar (recommended)
      styleOverrides: {
        root: {
          backgroundColor: "#2B2B4A", // Dark Navbar
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          color: "#FAFAFA", // Light text for navbar
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          color: "#FAFAFA", // Light text for links in AppBar
          transition: "color 0.3s ease",
          "&:hover": {
            color: "#FFC14E", // Gold on hover
          },
          "&.active": {
            // If using NavLink from react-router-dom, you might need to handle active state in your Navbar component
            color: "#FFC14E", // Gold for active link
            fontWeight: 700,
          },
        },
      },
    },
  },
});

export default hogwartsTheme;