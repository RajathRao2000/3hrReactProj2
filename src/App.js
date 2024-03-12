import "./App.css";
import NewMedicine from "./components/AddMedicine/NewMedForm";
import CartItems from "./components/CartItems/CartItems";
import DisplayMed from "./components/DisplayMed/DisplayMed";
import CartProvider from "./components/context/cart-provider";

function App() {
  return (
    <CartProvider>
      <NewMedicine />
      <DisplayMed />
      <CartItems />
    </CartProvider>
  );
}

export default App;
