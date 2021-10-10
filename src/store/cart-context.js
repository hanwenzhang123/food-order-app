import React from "react";

const CartContext = React.createContext({
  //create the defaultValue in store
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
