import { Navigate } from "react-router-dom";
import { memo } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useLoginUserMutation } from "../../app/services/login";
import { useAppSelector } from "../../app/hooks";
import { selectIsAuthenticated } from "./authSlice";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

function Login() {
  const isAuth = useAppSelector(selectIsAuthenticated);
  const [login, { isLoading, isError }] = useLoginUserMutation();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => login({ login: values }),
  });

  if (isAuth) {
    return <Navigate to="/" />;
  }

  if (isLoading) {
    return <div>loading ...</div>;
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      {isError ? <div>Auth is failed</div> : null}
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && formik.touched.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default memo(Login);
