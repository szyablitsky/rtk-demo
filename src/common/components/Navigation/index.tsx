import { memo } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <ul>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/chats">Chats</Link>
      <Link to="/logout">Logout</Link>
    </ul>
  );
}

export default memo(Navigation);
