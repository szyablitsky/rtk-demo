import { memo } from "react";
import { Link } from "react-router-dom";
import { useGetChatsQuery } from "../../app/services/chat";

function Chats() {
  const { data, isLoading, isError } = useGetChatsQuery();

  if (isLoading) {
    return <div>loading ...</div>;
  }

  if (isError) {
    return <div>data fetch was failed</div>;
  }

  return (
    <div>
      <Link to="/chats/new">New</Link>
      <table>
        <thead>
          <tr>
            <td>#</td>
            <td>name</td>
            <td>actions</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <Link to={`/chats/${item.id}/edit`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default memo(Chats);
