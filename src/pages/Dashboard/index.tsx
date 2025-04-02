import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchState } from "../../redux/stateSlice";
import { AppDispatch, RootState } from "../../store/store";
const Dashboard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { postCount, userCount, commentCount, albumCount, loading, error } = useSelector((state: RootState) => state.state)

  useEffect(() => {
    dispatch(fetchState())
  }, [dispatch])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">📊 Social Dashboard</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-3 gap-4 w-full max-w-4xl text-white mx-auto">

        {/* Users (Atas Tengah) */}
        <div className="bg-green-500 p-6 md:p-8 rounded-xl flex flex-col items-center justify-center sm:col-start-2 sm:row-start-1 w-full h-28 md:h-36">
          <h2 className="font-semibold text-lg md:text-2xl">👥 Users</h2>
          <p className="text-2xl md:text-3xl font-bold">{userCount}</p>
        </div>

        {/* Posts & Comments (Tengah Penuh) */}
        <div className="grid sm:grid-cols-2 gap-4 col-span-3 sm:row-start-2">
          <div className="bg-blue-500 p-6 md:p-8 rounded-xl flex flex-col items-center justify-center w-full h-28 md:h-36">
            <h2 className="font-semibold text-lg md:text-2xl">📌 Posts</h2>
            <p className="text-2xl md:text-3xl font-bold">{postCount}</p>
          </div>
          <div className="bg-yellow-500 p-6 md:p-8 rounded-xl flex flex-col items-center justify-center w-full h-28 md:h-36">
            <h2 className="font-semibold text-lg md:text-2xl">💬 Comments</h2>
            <p className="text-2xl md:text-3xl font-bold">{commentCount}</p>
          </div>
        </div>

        {/* Albums (Bawah Tengah) */}
        <div className="bg-purple-500 p-6 md:p-8 rounded-xl flex flex-col items-center justify-center sm:col-start-2 sm:row-start-3 w-full h-28 md:h-36">
          <h2 className="font-semibold text-lg md:text-2xl">📸 Albums</h2>
          <p className="text-2xl md:text-3xl font-bold">{albumCount}</p>
        </div>

      </div>
    </div>



  )
}

export default Dashboard