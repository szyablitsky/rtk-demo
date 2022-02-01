import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../app/hooks";
import { logout } from "./authSlice";

function Logout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logout());
    navigate("/login");
  }, [dispatch, navigate]);

  return null;
}

export default Logout;
