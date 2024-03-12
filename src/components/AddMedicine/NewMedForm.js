import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import { useContext } from "react";
import CartContext from "../context/cartContext";

const NewMedicine = () => {
  let cart = useContext(CartContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const obj={
        medName: e.target[0].value,
        desc: e.target[1].value,
        price: e.target[2].value,
        quant: e.target[3].value
    }
    console.log("jjj",cart.medList)
    cart.AddToMedList(obj)
  };

  return (
    <form
      onSubmit={(e) => {
        submitHandler(e);
      }}
    >
      <Input id="medName" label="Medicine Name " type="text" />
      <Input id="desc" label="Description " type="text" />
      <Input id="price" label="price " type="number" />
      <Input id="quantity" label="Quantity " type="number" />
      <Button type="submit" label="Add Product" />
    </form>
  );
};

export default NewMedicine;
