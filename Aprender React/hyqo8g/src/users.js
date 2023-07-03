
export default function Users({ users, err, loading }) {
  return (
    <>
      <h1>Users</h1>
      <ul>
        {err && <li>Error: {err} </li>}
        {loading && <li>Loading...</li>}
        {users?.map((user) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <img src={user.avatar} alt="avatar" />
          </li>
        ))}
      </ul>
    </>
  );
}
