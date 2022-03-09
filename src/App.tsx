import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./features/auth/Login";
import Home from "./features/home/Home";
import Users from "./features/users/Users";
import UserNew from "./features/users/UserNew";
import UserEdit from "./features/users/UserEdit";
import Navigation from "./common/components/Navigation";
import Logout from "./features/auth/Logout";
import PrivateRoute from "./features/auth/PrivateRoute";
import Chats from "./features/chat/Chats";
import ChatNew from "./features/chat/ChatNew";
import ChatEdit from "./features/chat/ChatEdit";
import { useAppSelector } from "./app/hooks";
import { selectIsAuthenticated } from "./features/auth/authSlice";

function App() {
  const isAuth = useAppSelector(selectIsAuthenticated);

  return (
    <BrowserRouter>
      {isAuth ? <Navigation /> : null}
      <div className="content">
        <Routes>
          <Route path="/logout" element={<Logout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route index element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/new" element={<UserNew />} />
            <Route path="/users/:id/edit" element={<UserEdit />} />
            <Route path="/chats" element={<Chats />} />
            <Route path="/chats/new" element={<ChatNew />} />
            <Route path="/chats/:id/edit" element={<ChatEdit />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
