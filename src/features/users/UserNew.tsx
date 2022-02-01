import { Navigate } from "react-router-dom";
import { useFormik } from "formik";

import { useAddUserMutation } from "../../app/services/users";
import userSchema from "./userSchema";
import UserForm from "./UserForm";

function UserNew() {
  const [addUser, addUserRequest] = useAddUserMutation();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      role: "client",
      firmId: null,
    },
    validationSchema: userSchema,
    onSubmit: (values) => addUser({ user: values }),
  });

  if (addUserRequest.isSuccess) {
    return <Navigate to="/users" />;
  }

  return (
    <UserForm
      handleSubmit={formik.handleSubmit}
      handleChange={formik.handleChange}
      errors={formik.errors}
      touched={formik.touched}
      values={formik.values}
      isError={addUserRequest.isError}
      isLoading={addUserRequest.isLoading}
    />
  );
}

export default UserNew;
