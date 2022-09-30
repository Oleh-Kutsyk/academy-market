import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProfile, IUser } from '../../../api';
import { VariantType } from 'notistack';

export interface ISnackBar {
  message: string;
  variant?: VariantType;
  autoHideDuration?: number;
  id: number;
}

interface IApp {
  isSideBarOpen: boolean;
  profile: IUser | null;
  snackbars: Array<ISnackBar>;
  error?: string;
}

const initialState: IApp = {
  isSideBarOpen: false,
  profile: null,
  snackbars: [],
};

const autoHideDuration = 4000;

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
    addSideBar: (state, { payload }: PayloadAction<Omit<ISnackBar, 'id'>>) => {
      const snackBar: ISnackBar = {
        variant: payload.variant || 'default',
        autoHideDuration: payload.autoHideDuration || autoHideDuration,
        message: payload.message,
        id: new Date().getTime(),
      };

      const isExist = state.snackbars.find(
        item => item.message === snackBar.message
      );
      if (!isExist) {
        state.snackbars = [...state.snackbars, snackBar];
      }
    },
    removeSideBar: (state, action: PayloadAction<ISnackBar['id']>) => {
      state.snackbars = state.snackbars.filter(
        snackbar => snackbar.id !== action.payload
      );
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

export const { handleSideBar, addSideBar, removeSideBar } = appSlice.actions;
export const app = appSlice.reducer;
