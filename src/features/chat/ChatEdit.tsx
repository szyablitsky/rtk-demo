import { Navigate, useParams } from "react-router-dom";
import { useFormik } from "formik";

import {
  useGetChatQuery,
  useUpdateChatMutation,
} from "../../app/services/chat";
import validationSchema from "./chatSchema";
import Form from "./ChatForm";

function UserEdit() {
  const params = useParams();
  const id = parseInt(params.id, 10);
  const [mutate, mutateRequest] = useUpdateChatMutation();
  const getRequest = useGetChatQuery({ id });

  const formik = useFormik({
    initialValues: {
      name: getRequest.data?.name ?? "",
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => mutate({ chat: values, id }),
  });

  if (mutateRequest.isSuccess) {
    return <Navigate to="/chats" />;
  }

  if (getRequest.isLoading) {
    <div>loading ...</div>;
  }

  if (getRequest.isError) {
    <div>Get request is failed</div>;
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

export default UserEdit;
