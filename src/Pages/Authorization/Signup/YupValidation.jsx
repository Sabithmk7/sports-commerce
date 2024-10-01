import * as Yup from "yup";
 const validationSchema = Yup.object({
  name: Yup.string().min(2, "Too short").required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is requires")
    .min(5, "Minimum 5 letters"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

export default validationSchema;
