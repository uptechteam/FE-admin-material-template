import { HTMLAttributes } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";

import { ROUTES } from "@core/constants";

import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { Box, Grid, Link, TextField } from "@mui/material";

import { FIELDS, schema } from "./ForgotPasswordForm.schema";

interface Props extends HTMLAttributes<HTMLFormElement> {
  onSubmit: SubmitHandler<FieldValues>;
  isLoading?: boolean;
}

const ForgotPasswordForm: React.FC<Props> = ({ onSubmit, isLoading }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    delayError: 700,
  });

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ mt: 1 }}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        label="Email Address"
        autoComplete="email"
        autoFocus
        error={!!errors[FIELDS.EMAIL]}
        helperText={errors[FIELDS.EMAIL]?.message as string}
        {...register(FIELDS.EMAIL)}
      />
      <LoadingButton
        type="submit"
        fullWidth
        variant="contained"
        size="small"
        sx={{ mt: 3, mb: 2 }}
        loading={isLoading}
      >
        Send request
      </LoadingButton>
      <Grid container>
        <Link component={RouterLink} to={ROUTES.SIGN_IN}>
          Back to sign-in
        </Link>
      </Grid>
    </Box>
  );
};

export default ForgotPasswordForm;
