import {
  TypographyOptions,
  TypographyStyleOptions,
} from "@mui/material/styles/createTypography";

import { getBreakpoint } from "./breakpoints";

const h1: TypographyStyleOptions = {
  fontWeight: 600,
  fontSize: "48px",
  lineHeight: "50px",
};

const h2: TypographyStyleOptions = {
  fontWeight: 600,
  fontSize: "40px",
  lineHeight: "42px",
  [getBreakpoint("sm")]: {
    fontSize: "28px",
    lineHeight: "34px",
  },
};

const h3: TypographyStyleOptions = {
  fontWeight: 600,
  fontSize: "32px",
  lineHeight: "36px",
  [getBreakpoint("sm")]: {
    fontSize: "26px",
    lineHeight: "32px",
  },
};

const h4: TypographyStyleOptions = {
  fontWeight: 600,
  fontSize: "26px",
  lineHeight: "30px",
  [getBreakpoint("sm")]: {
    fontSize: "20px",
    lineHeight: "24px",
  },
};

const h5: TypographyStyleOptions = {
  fontWeight: 500,
  fontSize: "24px",
  lineHeight: "30px",
  [getBreakpoint("sm")]: {
    fontSize: "20px",
    lineHeight: "24px",
  },
};

const h6: TypographyStyleOptions = {
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "24px",
  letterSpacing: "0.2px",
  [getBreakpoint("md")]: {
    fontSize: "18px",
    lineHeight: "22px",
  },
};

const subtitle1: TypographyStyleOptions = {
  fontWeight: 400,
  fontSize: "20px",
  lineHeight: "22px",
  [getBreakpoint("md")]: {
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "22px",
  },
};

const subtitle2: TypographyStyleOptions = {
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "18px",
  [getBreakpoint("md")]: {
    fontSize: "12px",
    lineHeight: "16px",
  },
};

const body1: TypographyStyleOptions = {
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "20px",
};

const body2: TypographyStyleOptions = {
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "20px",
};

const caption: TypographyStyleOptions = {
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "14px",
  [getBreakpoint("md")]: {
    fontSize: "10px",
  },
};

const button: TypographyStyleOptions = {
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "12px",
  textTransform: "capitalize",
};

const overline: TypographyStyleOptions = {
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "20px",
};

export const fontSizes = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  subtitle1,
  subtitle2,
  body1,
  body2,
  caption,
  button,
  overline,
};

export const typography: TypographyOptions = {
  ...fontSizes,
  // eslint-disable-next-line quotes
  fontFamily: "'Source Sans Pro', sans-serif",
};
