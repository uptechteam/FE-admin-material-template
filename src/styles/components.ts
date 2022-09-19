import { Components } from "@mui/material";

import { fontSizes } from "./typography";

export const components: Components = {
  MuiButton: {
    defaultProps: {
      variant: "text",
      size: "small",
    },
    styleOverrides: {
      root: {
        ":hover": {},
        ":active": {},
        ":disabled": {},
      },
      sizeSmall: {
        ...fontSizes.body1,
      },
      sizeMedium: {
        ...fontSizes.h6,
      },
      sizeLarge: {
        ...fontSizes.h4,
      },
    },
  },
};
