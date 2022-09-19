import React from "react";

import { LockOpenOutlined } from "@mui/icons-material";
import {
  Avatar,
  Container,
  ContainerTypeMap,
  CssBaseline,
  Paper,
} from "@mui/material";
import { OverrideProps } from "@mui/material/OverridableComponent";

type BoxProps<
  D extends React.ElementType = ContainerTypeMap["defaultComponent"],
  P = Record<string, unknown>,
> = OverrideProps<ContainerTypeMap<P, D>, D>;

const AuthLayout: React.FC<BoxProps> = ({ children }) => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper
        sx={{
          marginTop: 8,
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.dark" }}>
          <LockOpenOutlined />
        </Avatar>
        {children}
      </Paper>
    </Container>
  );
};

export default AuthLayout;
