import { useState } from "react";
import "./App.css";
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { cartContext } from "./context/cart-context";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      <div className="container">
        {/* <Header cart={cart} />
        <Main cart={cart} setCart={setCart} /> */}
        <Header />
        <Main />
      </div>
    </cartContext.Provider>
  );
}

export default App;
