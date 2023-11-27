import { configureStore } from '@reduxjs/toolkit';

import userReducer from './features/user/userSlice';
import cartReducer from './features/cart/cartSlice';
const store = configureStore({
  reducer: {
    auth: userReducer,
    cart: cartReducer,
  },
});

export default store;
