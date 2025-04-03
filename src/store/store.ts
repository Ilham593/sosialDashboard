import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "../redux/stateSlice.ts"
import userReducer from "../redux/userSlice.ts"
import postReducer from "../redux/postsSlice.ts"
const store  = configureStore({
  reducer: {
    state: stateReducer,
    users: userReducer,
    posts: postReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store