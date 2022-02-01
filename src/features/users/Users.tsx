import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../../app/services/users";

function Users() {
  const { data, isLoading, isError } = useGetUsersQuery({});

  if (isLoading) {
    return <div>loading ...</div>;
  }

  if (isError) {
    return <div>data fetch was failed</div>;
  }

  return (
    <div>
      <Link to="/users/new">New</Link>
      <table>
        <thead>
          <tr>
            <td>#</td>
            <td>email</td>
            <td>name</td>
            <td>role</td>
            <td>actions</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>{item.name}</td>
              <td>{item.role}</td>
              <td>
                <Link to={`/users/${item.id}/edit`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
