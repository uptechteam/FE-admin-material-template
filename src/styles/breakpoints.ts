import { Breakpoint as BreakpointType } from "@mui/material";

export const breakpoints = {
  values: {
    xs: 350,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

export const getBreakpoint = (value: BreakpointType) =>
  `@media (max-width:${breakpoints.values[value]}px)`;
