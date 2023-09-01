import * as yup from "yup";

export const employeeloginSchema = yup.object().shape({
  username: yup.string().required("*Required"),
  password: yup.string().required("*Required"),
});

export const employeeSignupSchema = yup.object().shape({
  fName: yup.string().required("*Required"),
  username: yup.string().required("*Required"),
  email: yup.string().email("Please enter a valid email").required("*Required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    .required("*Required"),
  cPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password do not match")
    .required("*Required"),
});
