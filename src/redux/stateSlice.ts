import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchState = createAsyncThunk(
  "state/fetchState",
  async () => {
    const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const users = await axios.get("https://jsonplaceholder.typicode.com/users");
    const comments = await axios.get("https://jsonplaceholder.typicode.com/comments");
    const albums = await axios.get("https://jsonplaceholder.typicode.com/albums");

    return {
      postCount: posts.data.length,
      userCount: users.data.length,
      commentCount: comments.data.length,
      albumCount: albums.data.length
    }
  }
)

const stateSlice = createSlice({
  name: "state",
  initialState: {
    postCount: 0,
    userCount: 0,
    commentCount: 0,
    albumCount: 0,
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchState.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchState.fulfilled, (state, action) => {
        state.loading = false;
        state.postCount = action.payload.postCount;
        state.userCount = action.payload.userCount;
        state.commentCount = action.payload.commentCount;
        state.albumCount = action.payload.albumCount;
      })
      .addCase(fetchState.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch state";
      });
  }
})

export default stateSlice.reducer