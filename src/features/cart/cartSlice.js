import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  cart: [],
};

const carslice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice += item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice -= item.unitPrice;
      if(item.quantity === 0) carslice.caseReducers.deleteItem(state, action)
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = carslice.actions;

export default carslice.reducer;

export const getCart = (state) => state.cart.cart;

const selectTotalCartPrice = createSelector(getCart, (items) =>
  items.reduce((sum, item) => sum + item.totalPrice, 0),
);

const selectTotalCartQuantity = createSelector(getCart, (items) =>
  items.reduce((sum, item) => sum + item.quantity, 0),
);

export const getCurrentQuantityByID = (id) =>
  createSelector(
    getCart,
    (items) => items.find((item) => item.pizzaId === id)?.quantity ?? 0,
  );

export const getTotalCartPrice = selectTotalCartPrice;

export const getTotalCartQuantity = selectTotalCartQuantity;
