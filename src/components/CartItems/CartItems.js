import { useContext } from "react";
import CartContext from "../context/cartContext";
import Button from "../UI/Button/Button";
const CartItems = () => {
  const cart = useContext(CartContext);
  return (
    <>
    {"Cart"}
      {Object.keys(cart.items).map((ele) => {
        console.log(ele)
        console.log(cart.items[ele])
        const {  description, price, amount } = cart.items[ele];
        // cart.items[ele].medName
        return <li>{ele}-{description}-{price}-{amount}<Button label={"+"}/><Button label={"-"}/></li>;
      })}
    </>
  );
};

export default CartItems;
