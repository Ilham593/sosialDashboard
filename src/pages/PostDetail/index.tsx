import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostById } from "../../redux/postsSlice";
import { AppDispatch, RootState } from "../../store/store";
import { fetchUserById } from "../../redux/userSlice";
const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { post, loading, error } = useSelector((state: RootState) => state.posts);
  const { user } = useSelector((state: RootState) => state.users);
  useEffect(() => {
    if (id) {
      dispatch(fetchPostById(Number(id)));
    }
  }, [dispatch, id]);
  
  useEffect(() => {
    if (post && post.userId) {
      dispatch(fetchUserById(post.userId));
    }
  }, [post, dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Post Detail</h1>
      {post && (
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold">{post.title}</h2>
          <p className="mt-2">{post.body}</p>
          <p className="mt-4 font-bold">by {user ? user.name : "Unknown User"}</p>
        </div>
      )}
    </div>
  );
}

export default PostDetail