import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAuth {
  isAuth: boolean;
  isAuthChecked: boolean;
  token: string | null;
}

const initialState: IAuth = {
  isAuth: false,
  isAuthChecked: false,
  token: null,
};

interface ILoginReq {
  username: string;
  password: string;
}

export const login = createAsyncThunk<string, ILoginReq>(
  'auth/login',
  async ({ username, password }) => {
    console.log('username', username);
    console.log('password', password);
    return ' token';
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
    builder.addCase(login.fulfilled, state => {
      state.isAuth = true;
      state.isAuthChecked = true;
      state.token = 'token';
    });
    builder.addCase(login.pending, state => {
      state.isAuth = true;
      state.isAuthChecked = true;
      state.token = 'token';
    });
    builder.addCase(login.rejected, state => {
      state.isAuth = true;
      state.isAuthChecked = true;
      state.token = 'token';
    });
  },
});

export const { setStore } = authSlice.actions;
export const auth = authSlice.reducer;
