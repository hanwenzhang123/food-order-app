import React from "react";

const CartContext = React.createContext({
  //create the defaultValue in store, not actually in use but for auto completion
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
