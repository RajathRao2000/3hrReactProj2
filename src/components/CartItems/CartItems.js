import { useContext } from "react";
import CartContext from "../context/cartContext";
import Button from "../UI/Button/Button";
import classes from "./CartItems.module.css";
const CartItems = (props) => {
  const cart = useContext(CartContext);
  return (
    <div className={classes.background}>
    <div className={classes.cartContainer}>
      <h2>{"Cart"}</h2>
      {Object.keys(cart.items).length!=0?Object.keys(cart.items).map((ele) => {
        const { description, price, amount } = cart.items[ele];
        return (
          <div className={classes.itemContainer}>
            <div>
              <p className={classes.heading}>{ele}</p>
              <p className={classes.description}>{description}</p>
            </div>
            <div className={classes.itemData}>
            <p className={classes.price}>Rs {price}</p>
            <p className={classes.amount}>x {amount}</p>
            <div className="buttongroup">
              <Button classes={classes.button} label={"+"} onClick={()=>{cart.addItem({medName:ele,...cart.items[ele]})}} />
              <Button classes={classes.button} label={"-"} onClick={()=>{cart.removeItem({medName:ele,...cart.items[ele]})}} />
            </div>
            </div>
          </div>
        );
      }):"Please add items to cart"}
      <Button classes={classes.button} onClick={props.cartViewHandler} label="close" />
    </div>
    </div>
  );
};

export default CartItems;
