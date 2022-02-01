import * as Yup from "yup";

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(255, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  role: Yup.string().required("Required"),
  firmId: Yup.number().required("Required"),
});

export default userSchema;
