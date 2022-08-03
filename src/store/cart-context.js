import React from "react";
console.log("CartContext");

const CartContext = React.createContext({
  
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
