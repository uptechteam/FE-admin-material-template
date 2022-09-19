import React from "react";
import { FieldValues } from "react-hook-form";

import { ForgotPasswordForm } from "@molecules";
import { Typography } from "@mui/material";

const ForgotPassword = () => {
  const onSubmit = (data: FieldValues) => {
    console.log("signIn", data);
  };

  return (
    <>
      <Typography component="h1" variant="h5">
        Password recovery
      </Typography>
      <ForgotPasswordForm onSubmit={onSubmit} />
    </>
  );
};

export default ForgotPassword;
