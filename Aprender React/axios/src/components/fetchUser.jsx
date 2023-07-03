
const Users = ({ users, loading, error }) => {
  return (
    <>
      <div className='App'>
        <h1>AXIOS</h1>
        <div className='card'>
          <ul>
            {error && <li>Error: {error}</li>}
            {loading && <li>Loading...</li>}
            {users?.map((user) => (
              <li key={user._id}>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <img src={user.avatar} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Users
