import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Users from './components/fetchUser'

export default function App () {
  const [users, setUsers] = useState(null)
  const [err, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/1.0/users'
        )
        if (response.statusText !== 'OK') {
          setError(err)
        }
        if (response.status === 200) {
          console.log(response.data)
          setUsers(response.data)
        }
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    getUsers()
  }, [])

  return (
    <>
      <Users users={users} loading={loading} err={err} />
    </>
  )
}
