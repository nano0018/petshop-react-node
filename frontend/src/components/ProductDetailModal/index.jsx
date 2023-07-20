import { GlobalContext } from "@context/GlobalContext";
import {
  PlusCircleIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useContext } from "react";

function ProductDetailModal() {
  const context = useContext(GlobalContext);
  const product = context.productDetailData;
  const toggleProductDetail = () => {
    context.setIsProductDetailOpened(!context.isProductDetailOpened);
  };
  return (
    <>
      <div
        className={`${
          context.isProductDetailOpened ? "flex" : "hidden"
        } justify-center items-center flex-col fixed top-0 right-0 h-[100vh] w-[100vw] border border-t-light_gray rounded-lg backdrop-blur-lg bg-black_blue/80 `}
      ></div>
      <div
        className={`${
          context.isProductDetailOpened ? "flex" : "hidden"
        } justify-center items-center flex-col fixed top-0 right-0 h-[100vh] w-[100vw] border border-t-light_gray rounded-lg`}
        onClick={() => toggleProductDetail()}
      >
        <aside className="flex flex-col justify-between items-center w-72 md:w-96 h-auto bg-white z-1 rounded-lg">
          <figure className="relative w-full h-fit mb-0">
            <div className="absolute top-0 right-0">
              <XMarkIcon className="h-6 w-6 text-white cursor-pointer" />
            </div>
            <img
              className="w-96 h-fit object-cover rounded-t-lg"
              src={product.imgURL}
              alt={product.title}
            />
          </figure>
          <div className="flex flex-col w-full justify-between items-center p-2">
            <p className="flex justify-between items-center w-full">
              <span className="text-xl font-bold mb-1">{product.title}</span>
              <span className="text-xl font-medium">${product.price}</span>
            </p>
            <p className="text-sm flex flex-col w-full mb-2">
              <span className="text-gray h-10">{product.description}</span>
              <span>Stock: {product.stock} Unidades</span>
            </p>
          </div>
          <button
            className="bg-gray text-white p-2 mb-4 rounded-md w-5/6 flex flex-row items-center justify-between transition delay-50 ease-in hover:bg-black_blue active:scale-110"
            onClick={(e) => {
              e.stopPropagation();
              context.setCartProductCount(context.cartProductCount + 1);
            }}
          >
            Agregar al carrito
            <span className="relative">
              <PlusCircleIcon className="absolute top-0 right-0 h-4 w-4 text-black_blue" />
              <ShoppingCartIcon className="h-7 w-7" />
            </span>
          </button>
        </aside>
      </div>
    </>
  );
}

export default ProductDetailModal;
