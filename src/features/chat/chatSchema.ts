import * as Yup from "yup";

const chatSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(255, "Too Long!")
    .required("Required"),
});

export default chatSchema;
