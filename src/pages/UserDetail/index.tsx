import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserById } from "../../redux/userSlice";
import { AppDispatch, RootState } from "../../store/store";
import { fetchPostsByUser } from "../../redux/postsSlice";
const UserDetail: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { id } = useParams<{ id: string }>();
  const { user, loading, error } = useSelector((state: RootState) => state.users)
  const { posts } = useSelector((state: RootState) => state.posts)
  useEffect(() => {
    if (id) {
      dispatch(fetchUserById(Number(id)))
      dispatch(fetchPostsByUser(Number(id)))
    }
  }, [dispatch, id])
  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">User Detail</h1>
      {user && (
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold">{user.name}</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
          <h3 className="mt-4 font-semibold">Address:</h3>
          <p>{user.address.street}, {user.address.suite}</p>
          <p>{user.address.city}, {user.address.zipcode}</p>
          <h3 className="mt-4 font-semibold">Posts by {user.name}:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            {posts.map((post) => (
              <div key={post.id} className="bg-white p-4 shadow rounded-lg border">
                <h2 className="text-lg font-bold text-gray-800">{post.title}</h2>
                <p className="text-gray-600 mt-2">{post.body.slice(0, 80)}...</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default UserDetail
