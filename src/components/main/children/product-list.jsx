import React from "react";
import { ProductItem } from "./product-item";

const products = [
  { id: 1, name: "product1" },
  { id: 2, name: "product2" },
  { id: 3, name: "product3" },
  { id: 4, name: "product4" },
  { id: 5, name: "product5" },
];

// export const ProductList = ({ cart, setCart }) => {
export const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        // <ProductItem
        //   key={product.id}
        //   product={product}
        //   cart={cart}
        //   setCart={setCart}
        // />
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
