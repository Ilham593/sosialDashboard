import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../redux/userSlice";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/store";

const Users: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { users, loading, error } = useSelector((state: RootState) => state.users)

  useEffect(() => {
    // dispatch(fetchUser())
    setTimeout(() => {
      dispatch(fetchUser())
    }, 2000)
  }, [dispatch])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  return (
    <div className="p-6">
    <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Users</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <div
          key={user.id}
          className="bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transform transition duration-300 ease-in-out hover:scale-105 p-6"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{user.name}</h2>
          <p className="text-gray-600 mb-4">{user.email}</p>
          <Link
            to={`/users/${user.id}`}
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Users