import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Users from "./users";

export default function App() {
  const [users, setUsers] = useState([]);
  const [err, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(
          "https://643876e51b9a7dd5c951c4a3.mockapi.io/users"
        );
        setUsers(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);
  return <>
  <Users users={users}  err={err} loading={loading} />
  </>;
}
