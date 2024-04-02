import * as yup from "yup";

export const loginSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username/email must be at least 3 characters")
    .required(),
  password: yup.string().min(5).required(),
});

export const registerSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters")
    .required(),
  email: yup.string().email().required(),
  password: yup.string().min(5).required(),
});
