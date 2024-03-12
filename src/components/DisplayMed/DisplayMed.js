import { useContext } from "react";
import CartContext from "../context/cartContext";
import Button from "../UI/Button/Button";
import classes from "./DisplayMed.module.css";
const DisplayMed = () => {
  const cart = useContext(CartContext);

  return (
    <>
      {Object.keys(cart.medList).length != 0 ? (
        <table className={classes.table}>
          <h2>Medicines List</h2>
          <tbody>
            <tr>
              <th>Medicine Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Amount</th>
              {/* <th>Amount</th> */}
            </tr>
            {Object.keys(cart.medList).map((ele) => {
              const { desc, price, quant } = cart.medList[ele];
              return (
                <tr>
                  <td>{ele}</td>
                  <td>{desc}</td>
                  <td>{price}</td>
                  <td>{quant != 0 ? quant : "out of stock"}</td>
                  <td>
                    <Button classes={classes.button}
                      onClick={() => {
                        cart.addItem({ medName: ele, ...cart.medList[ele] });
                      }}
                      type="button"
                      label="Add to cart"
                      status={quant != 0 ? false : true}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        "Please Add Medicine Details"
      )}
    </>
  );
};

export default DisplayMed;
