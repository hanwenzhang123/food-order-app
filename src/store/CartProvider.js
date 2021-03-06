import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  //will be used in reducer
  items: [],
  totalAmount: 0,
};

//logics are here in the reducer
const cartReducer = (state, action) => {
  //reducer, used to modify the local state based on the action, change the state over time
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      //check if the item is already part of the cart
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex]; //only works if the item is part of the array
    let updatedItems;

    if (existingCartItem) {
      //truthy if it is already part of the array
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item); //add the item which returns a new array (immutable way), do not use push which adds to the existing array
    }

    return {
      //return the new state of the snapshot
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex]; //get the item itself
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  //manage context data and provide that context to all components that want to access to the data
  const [cartState, dispatchCartAction] = useReducer(
    //1st state snapshot, 2nd dispatch action to reducer
    cartReducer, //reducer function
    defaultCartState //initial state
  );

  //dispatch actions
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    //here will be dynamic, are the values store in the global store
    //the current context value(local state at the moment)
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    //wrap the current local state value as a wrapper which will be imported to App.js
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
