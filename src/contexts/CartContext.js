import React, { createContext, useContext, useReducer, useEffect } from "react";

// Create a context
const CartContext = createContext();

// Reducer function
const appReducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "UPDATE_CART":
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};

// Create a provider component
export const CartContextProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(appReducer, {
    cart: JSON.parse(localStorage.getItem("payme-cart")) || [], // Initialize from localStorage
  });

  useEffect(() => {
    // Sync cart with localStorage
    localStorage.setItem("payme-cart", JSON.stringify(cartState.cart));
  }, [cartState.cart]); // Runs whenever cart state changes

  return (
    <CartContext.Provider
      value={{
        cart: cartState.cart,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook for using the context
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }
  return context;
};
