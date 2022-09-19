import { CSSProperties } from "react";

import { createTheme } from "@mui/material";

import { breakpoints } from "./breakpoints";
import { components } from "./components";
import { palette } from "./palette";
import { typography } from "./typography";

declare module "@mui/material/styles" {
  interface Palette {
    gray: { [key: number]: string };
    mainBackground: CSSProperties["color"];
  }

  interface PaletteColorOptions {
    main: string;
    light?: string;
    dark?: string;
    contrastText?: string;
  }

  interface PaletteOptions {
    gray?: { [key: number]: string };
  }
}

export const theme = createTheme({
  breakpoints,
  typography,
  palette,
  components,
});
