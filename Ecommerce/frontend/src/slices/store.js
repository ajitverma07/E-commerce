// store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './ProductSlice';
import authReducer from './AuthSlice';
import userDataReducer from './UserSlice';
import cartReducer from './CartSlice';

const store = configureStore({
  reducer: {
    products: productReducer, 
    auth: authReducer,
    userData: userDataReducer,
    cart: cartReducer
    // cart:cartReducer
    // Add other reducers here if you have more slices
  },
});

export default store;
