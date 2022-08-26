import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILoginBody, loginApi } from '../../../api';

export interface IAuth {
  isAuth: boolean;
  isAuthChecked: boolean;
  token: string | null;
  isLoading?: boolean;
  error?: string;
}

const initialState: IAuth = {
  isAuth: false,
  isAuthChecked: false,
  token: null,
  isLoading: false,
  error: '',
};

export const loginThunk = createAsyncThunk<string, ILoginBody>(
  'auth/login',
  async body => {
    const res = await loginApi(body);
    localStorage.setItem('token', res.token);
    return res.token;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setStore: (state, { payload }: PayloadAction<IAuth>) => {
      state.isAuth = payload.isAuth;
      state.isAuthChecked = payload.isAuthChecked;
      state.token = payload.token;
    },
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(
      loginThunk.fulfilled,
      (state, { payload }: PayloadAction<string>) => {
        state.isAuth = true;
        state.isAuthChecked = true;
        state.token = payload;
        state.isLoading = false;
      }
    );
    builder.addCase(loginThunk.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.isAuth = false;
      state.isAuthChecked = true;
      state.token = null;
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { setStore } = authSlice.actions;
export const auth = authSlice.reducer;
