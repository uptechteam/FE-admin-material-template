import * as yup from "yup";

export const FIELDS = {
  EMAIL: "email",
};

export const schema = yup.object({
  [FIELDS.EMAIL]: yup.string().email().required(),
});
