import React from "react";
const CartContext = React.createContext({
    medList:[],
    AddToMedList: (item)=>{},
    items: [],
    totalAmount: 0,
    addItem: (item)=>{},
    removeItem: (item)=>{}
})

export default CartContext;