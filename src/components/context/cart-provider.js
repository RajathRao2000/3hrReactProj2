import CartContext from "./cartContext";
import { useState } from "react";

const CartProvider = (props) => {
  let [cartContext, setCartContext] = useState({
    medList: {
      "Avastin 100mg Injection":{
        // medName:"ha",
        desc: "Avastin 100mg Injection is an anticancer medication.",
        price: "27768",
        quant: 8,
      },
      "Benadryl Syrup":{
        desc: "Benadryl Syrup is used in the treatment of cough",
        price: "125",
        quant: 9,
      },
      "Castophene Tablet":{
        desc: "Castophene Tablet is a medicine used to treat constipation",
        price: "24",
        quant: 1,
      },
    },
    AddToMedList: AddToMedList,
    items: {},
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  });

  function AddToMedList(item) {
    // console.log("addtomedlist",cartContext,item)
    setCartContext((prev) => {
      const newList = { ...prev };
      // console.log("befor add",newList.medList)
      // console.log("here",{...newList})
      console.log("here", item);
      if (!newList.medList[item.medName]) {
        newList.medList[item.medName] = {
          // name: item.medName,
          desc: item.desc,
          price: item.price,
          quant: item.quant,
        };
      } else {
        alert("already exists");
      }
      // newList.medList.push(item);
      // console.log("after add",newList.medList)

      return newList;
    });
  }

  function addItemToCartHandler(item) {
    console.log("here",item)
    const { medName, desc, price } = item;

    setCartContext((prev) => {
      const newList = { ...prev };
      // console.log("newlist",newList)
      if (!newList.items[medName]) {
        newList.items[medName] = {
          description: desc,
          price: price,
          amount: 1,
        };
        newList.medList[medName].quant =
          Number(newList.medList[medName].quant) - 1;
      } else {
        newList.items[medName].amount =
          Number(newList.items[medName].amount) + 1;
        newList.medList[medName].quant =
          Number(newList.medList[medName].quant) - 1;
      }
      return newList;
    });
  }

  function removeItemFromCartHandler(item) {
    // console.log("here",item)
    const { medName, desc, price } = item;

    setCartContext((prev) => {
      const newList = { ...prev };
      // console.log("newlist",newList)
      // if(!newList.items[medName]){
      //   newList.items[medName]={
      //     description: desc,
      //     price: price,
      //     amount: 1
      //   }
      //   newList.medList[medName].quant=Number(newList.medList[medName].quant)-1

      //   }else{
      newList.items[medName].amount = Number(newList.items[medName].amount) - 1;
      newList.medList[medName].quant =
        Number(newList.medList[medName].quant) + 1;
      if (Number(newList.items[medName].amount) === 0)
        delete newList.items[medName];
      // console.log(newList,newList.medList[medName].amount)
      // }
      return newList;
    });
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
