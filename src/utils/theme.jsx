import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7c3aed",
    },
    secondary: {
      main: "#22c55e",
    },
    background: {
      default: "#0f0f17",
      paper: "#171726",
    },
    text: {
      primary: "#f5f3ff",
      secondary: "#c4b5fd",
    },
    textColor: {
      main: "#f5f3ff",
    },
  },
  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
  },
});