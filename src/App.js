import "./App.css";
import NewMedicine from "./components/AddMedicine/NewMedForm";
import CartItems from "./components/CartItems/CartItems";
import DisplayMed from "./components/DisplayMed/DisplayMed";
import Button from "./components/UI/Button/Button";
import CartProvider from "./components/context/cart-provider";
import { createPortal } from "react-dom";
import { useState } from "react";

function App() {
  const [cartView,setCartView]=useState(false)
  const cartViewHandler=()=>{
    if(cartView==false){
      setCartView(true)
    }else{
      setCartView(false)
    }
  }
  return (
    <CartProvider>
      <div className="header">
    <h1>Inventory Management</h1>
      <Button classes="Cartbutton" label="open cart" onClick={cartViewHandler}/>
      </div>
      <NewMedicine />
      <DisplayMed />
      
    {createPortal(cartView?<CartItems cartViewHandler={cartViewHandler}/>:null,document.getElementById("cart"))}
    </CartProvider>
  );
}

export default App;
