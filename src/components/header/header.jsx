import { useContext } from "react";
import { cartContext } from "../../context/cart-context";

export const Header = () => {
  const { cart } = useContext(cartContext);
  return (
    <div className="header">
      <div>
        <span>Mi tienda</span>
      </div>
      <div>
        <span>Ver carrito ({cart.length})</span>
      </div>
    </div>
  );
};
