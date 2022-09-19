import React from "react";

import { Box, ContainerTypeMap } from "@mui/material";
import { OverrideProps } from "@mui/material/OverridableComponent";
import { SideBar } from "@organisms";

type BoxProps<
  D extends React.ElementType = ContainerTypeMap["defaultComponent"],
  P = Record<string, unknown>,
> = OverrideProps<ContainerTypeMap<P, D>, D>;

const MainLayout: React.FC<BoxProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: "50%",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
