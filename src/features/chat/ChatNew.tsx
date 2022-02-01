import { Navigate } from "react-router-dom";
import { useFormik } from "formik";

import { useAddChatMutation } from "../../app/services/chat";
import validationSchema from "./chatSchema";
import Form from "./ChatForm";

function UserNew() {
  const [mutate, mutateRequest] = useAddChatMutation();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      role: "client",
      firmId: null,
    },
    validationSchema,
    onSubmit: (values) => mutate({ chat: values }),
  });

  if (mutateRequest.isSuccess) {
    return <Navigate to="/chats" />;
  }

  return (
    <Form
      handleSubmit={formik.handleSubmit}
      handleChange={formik.handleChange}
      errors={formik.errors}
      touched={formik.touched}
      values={formik.values}
      isError={mutateRequest.isError}
      isLoading={mutateRequest.isLoading}
    />
  );
}

export default UserNew;
