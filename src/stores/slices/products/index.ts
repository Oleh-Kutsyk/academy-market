import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  addProduct,
  getAllProducts,
  getAllProductsInCategory,
  getSingleProduct,
  IProduct,
  IProductBE,
  IProductsFilters,
} from '../../../api';

export interface IProducts {
  selectedProduct: IProduct | null;
  list: Array<IProduct>;
  isLoading: boolean;
  error?: string;
}

const initialState: IProducts = {
  selectedProduct: null,
  list: [],
  isLoading: false,
  error: '',
};

export const productsThunk = createAsyncThunk<
  Array<IProduct>,
  IProductsFilters | undefined
>('main/products', async filters => {
  return await getAllProducts(filters);
});

export const productsInCategoryThunk = createAsyncThunk<
  Array<IProduct>,
  string
>('main/productsInCategory', async category => {
  return await getAllProductsInCategory(category);
});

export const singleProductThunk = createAsyncThunk<IProduct, string>(
  'main/singleProduct',
  async productId => {
    return await getSingleProduct(productId);
  }
);
export const addProductThunk = createAsyncThunk<IProduct, IProductBE>(
  'main/addProduct',
  async body => {
    return await addProduct(body);
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    removeProducts: state => {
      state.list = initialState.list;
      state.selectedProduct = initialState.selectedProduct;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      productsThunk.fulfilled,
      (state, { payload }: PayloadAction<Array<IProduct>>) => {
        state.list = payload;
        state.isLoading = false;
      }
    );
    builder.addCase(productsThunk.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(productsThunk.rejected, (state, action) => {
      state.list = initialState.list;
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(
      productsInCategoryThunk.fulfilled,
      (state, { payload }: PayloadAction<Array<IProduct>>) => {
        state.list = payload;
        state.isLoading = false;
      }
    );
    builder.addCase(productsInCategoryThunk.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(productsInCategoryThunk.rejected, (state, action) => {
      state.list = initialState.list;
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(
      singleProductThunk.fulfilled,
      (state, { payload }: PayloadAction<IProduct>) => {
        state.selectedProduct = payload;
        state.isLoading = false;
      }
    );
    builder.addCase(singleProductThunk.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(singleProductThunk.rejected, (state, action) => {
      state.selectedProduct = initialState.selectedProduct;
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { removeProducts } = productsSlice.actions;
export const products = productsSlice.reducer;
