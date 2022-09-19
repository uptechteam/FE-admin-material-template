import { FieldValues } from "react-hook-form";

import { SignInForm } from "@molecules";
import { Typography } from "@mui/material";

const SignIn = () => {
  const onSubmit = (data: FieldValues) => {
    console.log("signIn", data);
  };
  return (
    <>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <SignInForm onSubmit={onSubmit} isLoading={false} />
    </>
  );
};

export default SignIn;
