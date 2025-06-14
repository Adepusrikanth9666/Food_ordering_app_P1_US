export const selectCartItem = (state) => state.cart.items;

export const selectCartTotalQuantity = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const selectedCartTotalPrice = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
