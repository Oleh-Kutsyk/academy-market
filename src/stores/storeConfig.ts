import { configureStore } from '@reduxjs/toolkit';
import { auth } from './slices';

export const store = configureStore({
  reducer: {
    auth,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type TRootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type TAppDispatch = typeof store.dispatch;
