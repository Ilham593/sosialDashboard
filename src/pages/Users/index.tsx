import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../redux/userSlice";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/store";

const Users: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { users, loading, error } = useSelector((state: RootState) => state.users)

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  return (
    <div className="p-6">
      <h1 className="text-3xl mb-6">Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p>{user.email}</p>
            <Link to={`/users/${user.id}`} className="text-blue-500">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users