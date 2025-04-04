import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums } from "../../redux/albumsSlice";
import { AppDispatch, RootState } from "../../store/store";

const Albums = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { albums, loading, error } = useSelector((state: RootState) => state.albums);

  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">📸 Albums</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {albums.map((album) => (
          <div key={album.id} className="bg-white shadow-md rounded-lg p-4 border">
            <h2 className="text-lg font-semibold text-gray-800">{album.title}</h2>
            <p className="text-sm text-gray-500">📷 Album ID: {album.id}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Albums;
