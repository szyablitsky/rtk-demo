import { Outlet, Navigate } from "react-router-dom";

import { useAppSelector } from "../../app/hooks";
import { selectIsAuthenticated } from "./authSlice";

function PrivateRoute() {
  const isAuth = useAppSelector(selectIsAuthenticated);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
