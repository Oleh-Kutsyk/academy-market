import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProfile, IUser } from '../../../api';

interface IApp {
  isSideBarOpen: boolean;
  profile: IUser | null;
  error?: string;
}

const initialState: IApp = {
  isSideBarOpen: false,
  profile: null,
};

export const getProfileThunk = createAsyncThunk<IUser>(
  'app/profile',
  async () => {
    return await getProfile();
  }
);

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    handleSideBar: state => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      getProfileThunk.fulfilled,
      (state, { payload }: PayloadAction<IUser>) => {
        state.profile = payload;
      }
    );
    builder.addCase(getProfileThunk.rejected, (state, action) => {
      state.profile = initialState.profile;
      state.error = action.error.message;
    });
  },
});

export const { handleSideBar } = appSlice.actions;
export const app = appSlice.reducer;
