import MiniCard from "@components/MiniCard";
import { GlobalContext } from "@context/GlobalContext";
import {
  PlusCircleIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useContext } from "react";

function Cart() {
  const context = useContext(GlobalContext);
  const products = context.productCartData;
  const toggleCart = () => {
    context.setIsProductCartOpened(!context.isProductCartOpened);
    context.setIsProductDetailOpened(false);
  };
  return (
    <>
      <div
        className={`${
          context.isProductCartOpened ? "flex" : "hidden"
        } justify-center items-center flex-col fixed top-0 right-0 h-[100vh] w-[100vw] border border-t-light_gray rounded-lg`}
        onClick={() => toggleCart()}
      >
        {products.map((product) =>(
          <MiniCard
          key={product.id + 5}
          id={product.id}
          title={product.title}
          stock={product.stock}
          price={product.price}
          imgURL={product.imgURL}
          />
        ))}
      </div>
    </>
  );
}

export default Cart;
