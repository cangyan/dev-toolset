import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#00bcd4",
      contrastText: "white",
    },
    secondary: {
      main: "#00e2ff",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    }
  },
});

export default theme;
