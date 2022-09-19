import * as yup from "yup";

export const FIELDS = {
  EMAIL: "email",
  PASSWORD: "password",
};

export const schema = yup.object({
  [FIELDS.EMAIL]: yup.string().email().required(),
  [FIELDS.PASSWORD]: yup.string().min(8).max(50).required(),
});
