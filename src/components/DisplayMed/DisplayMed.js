import { useContext } from "react";
import CartContext from "../context/cartContext";
import Button from "../UI/Button/Button";

const DisplayMed = () => {
  const cart = useContext(CartContext);



  return (
    <>
    {"Medicine List"}
      <ul>
        {Object.keys(cart.medList).map((ele)=>{
            const {desc,price,quant}=cart.medList[ele]
            
            return (
                <li>
                  {ele}-{desc}-{price}-{quant!=0?quant:"no stock"}
                  <Button onClick={()=>{cart.addItem({medName:ele,...cart.medList[ele]})}} type="button" label="Add to cart" status={quant!=0?false:true}/>
                </li>
              )
        })}
      </ul>
    </>
  );
};

export default DisplayMed;
