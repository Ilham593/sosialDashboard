import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAlbums = createAsyncThunk(
  "albums/fetchAlbums",
  async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/albums");
    return response.data
  }
)


const albumsSlice = createSlice({
  name: "albums",
  initialState: {
    albums: [],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAlbums.fulfilled, (state, action) => {
      state.albums = action.payload;
    });
  },
})

export default albumsSlice.reducer