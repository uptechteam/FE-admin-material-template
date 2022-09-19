import { PaletteOptions } from "@mui/material";
import { blueGrey, green, grey, orange, red } from "@mui/material/colors";

export const palette: PaletteOptions = {
  primary: {
    main: orange[200],
    light: orange[100],
    dark: orange[400],
    contrastText: grey[800],
  },
  secondary: {
    main: blueGrey[700],
    light: blueGrey[100],
    dark: blueGrey[400],
    contrastText: grey[200],
  },
  text: {
    primary: grey[800],
    secondary: grey[300],
  },
  error: {
    main: red[400],
  },
  warning: {
    main: orange[400],
  },
  success: {
    main: green[400],
  },
  background: {
    default: grey[100],
  },
  gray: {
    100: "#949494",
    90: "#263238",
    80: "#37474F",
    70: "#455A64",
    60: "#546E7A",
    50: "#607D8B",
    40: "#78909C",
    30: "#90A4AE",
    20: "#B0BEC5",
    10: "#CFD8DC",
    5: "#ECEFF1",
  },
};
