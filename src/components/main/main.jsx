import { ProductList } from "./children/product-list";

// export const Main = ({ cart, setCart }) => {
export const Main = () => {
  return (
    <div className="main">
      {/* <ProductList cart={cart} setCart={setCart} /> */}
      <ProductList />
    </div>
  );
};
