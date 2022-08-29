import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllCategories } from '../../../api';

export interface ICategories {
  list: Array<string>;
  isLoading: boolean;
  error?: string;
}

const initialState: ICategories = {
  list: [],
  isLoading: false,
  error: '',
};

export const categoriesThunk = createAsyncThunk<Array<string>>(
  'main/categories',
  async () => {
    return await getAllCategories();
  }
);

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      categoriesThunk.fulfilled,
      (state, { payload }: PayloadAction<Array<string>>) => {
        state.list = payload;
        state.isLoading = false;
      }
    );
    builder.addCase(categoriesThunk.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(categoriesThunk.rejected, (state, action) => {
      state.list = initialState.list;
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const categories = categoriesSlice.reducer;
