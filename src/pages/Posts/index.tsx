import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/postsSlice";
import { AppDispatch, RootState } from "../../store/store";
import { Link } from "react-router-dom";
import { fetchUser } from "../../redux/userSlice";
const Posts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, loading, error } = useSelector((state: RootState) => state.posts);
  const { users } = useSelector((state: RootState) => state.users);
  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUser());
  }, [dispatch]);



  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">📌 Latest Posts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts.map((post) => {
          const user = users.find((u) => u.id === post.userId);
          return (
            <div key={post.id} className="bg-white shadow-md rounded-lg p-4 border">
              <h2 className="text-xl font-bold text-gray-800">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.body.slice(0, 80)}...</p>

              <div className="mt-4 flex justify-between items-center">
                <Link to={`/posts/${post.id}`} className="text-blue-500 hover:underline">
                  View Details →
                </Link>
                <p className="text-sm text-gray-500">📝 by User { user ? user.name : "uknown"}</p>
              </div>
            </div>
          )

        })}
      </div>
    </div>
  );
};

export default Posts;
