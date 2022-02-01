import { Navigate, useParams } from "react-router-dom";
import { useFormik } from "formik";

import {
  useGetUserQuery,
  useUpdateUserMutation,
} from "../../app/services/users";
import userSchema from "./userSchema";
import UserForm from "./UserForm";

function UserEdit() {
  const params = useParams();
  const id = parseInt(params.id, 10);
  const [updateUser, updateUserRequest] = useUpdateUserMutation();
  const getUserRequest = useGetUserQuery({ id, _expand: ["firm"] });

  const formik = useFormik({
    initialValues: {
      name: getUserRequest.data?.name ?? "",
      email: getUserRequest.data?.email ?? "",
      role: getUserRequest.data?.role ?? "client",
      firmId: getUserRequest.data?.firm?.id ?? null,
    },
    enableReinitialize: true,
    validationSchema: userSchema,
    onSubmit: (values) => updateUser({ user: values, id }),
  });

  if (updateUserRequest.isSuccess) {
    return <Navigate to="/users" />;
  }

  if (getUserRequest.isLoading) {
    <div>loading ...</div>;
  }

  if (getUserRequest.isError) {
    <div>Get request is failed</div>;
  }

  return (
    <UserForm
      handleSubmit={formik.handleSubmit}
      handleChange={formik.handleChange}
      errors={formik.errors}
      touched={formik.touched}
      values={formik.values}
      isError={updateUserRequest.isError}
      isLoading={updateUserRequest.isLoading}
    />
  );
}

export default UserEdit;
