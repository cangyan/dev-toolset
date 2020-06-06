import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
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
