import { configureStore } from "@reduxjs/toolkit";
// cart & wishlist items etc....
import cartReducer from "./redux/reducers/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
