import React, { useContext } from "react";
import { cartContext } from "../../../context/cart-context";

// export const ProductItem = ({ product, cart, setCart }) => {
export const ProductItem = ({ product }) => {
  const { cart, setCart } = useContext(cartContext);

  const addToCart = () => {
    const alreadyInCart = cart.find((item) => item.id === product.id);
    if (alreadyInCart) return;
    setCart((prev) => [...prev, product]);
  };
  const removeToCart = () => {
    const alreadyInCart = cart.find((item) => item.id === product.id);
    if (!alreadyInCart) return;
    setCart((prev) => prev.filter((item) => item.id !== product.id));
  };

  return (
    <div className="product-list__item">
      <span>id: {product.id}</span>
      <span>nombre: {product.name}</span>
      <span>
        {cart.find((item) => item.id === product.id) ? "Añadido" : "Sin añadir"}
      </span>
      <button onClick={addToCart}>Añadir</button>
      <button onClick={removeToCart}>Remover</button>
    </div>
  );
};
