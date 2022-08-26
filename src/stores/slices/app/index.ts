import { createSlice } from '@reduxjs/toolkit';

interface IApp {
  isSideBarOpen: boolean;
}

const initialState: IApp = {
  isSideBarOpen: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    handleSideBar: state => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
  },
});

export const { handleSideBar } = appSlice.actions;
export const app = appSlice.reducer;
