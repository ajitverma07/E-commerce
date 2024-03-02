import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../APIs/ProductsAPI';
// Import the function to fetch products

// Define the initial state
const initialState = {
  products: [],
  loading: false,
  error: null,
};

// Define thunk action to fetch products
export const fetchProductsAsync = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const productsData = await fetchProducts();
      // console.log(productsData);
      return productsData.Products;
    } catch (error) {
      throw error;
    }
  }
);

// Create a slice for managing product state
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
