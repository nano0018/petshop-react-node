import MiniCard from "@components/MiniCard";
import { GlobalContext } from "@context/GlobalContext";
import {
  CheckBadgeIcon,
  ShoppingCartIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import { PostDataToken } from "@utils/APICall";
import getId from "@utils/auth/getId";
import { api } from "@utils/config/APIUrl";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);
  const context = useContext(GlobalContext);
  const products = context.productCartData;
  const toggleCart = () => {
    context.setIsProductCartOpened(!context.isProductCartOpened);
    context.setIsProductDetailOpened(false);
  };

  const deleteProduct = (id) => {
    const currentProduct = context.productCartData.find(
      (product) => product.id == id
    );
    const filteredProducts = context.productCartData.filter(
      (product) => product.id != id
    );
    context.setProductCartData(filteredProducts);
    context.setCartProductCount(
      context.cartProductCount - currentProduct.count
    );
  };

  const sumTotalPrice = (products) => {
    let total = 0;
    products.forEach((product) => {
      total += product.price * product.count;
    });
    return total;
  };

  const postOrder = async (order) => {
    try {
      const response = await PostDataToken(`${api.baseURL}/orders`, order);
      return response;
    } catch (error) {
      return error.response;
    }
  };

  const checkoutCart = async (products) => {
    const checkoutProducts = [];
    products.forEach((product) => {
      checkoutProducts.push({
        productId: product.id,
        qtyOrderedProduct: product.count,
      });
    });
    const userId = getId();
    if (userId === null) {
      navigate("/login");
      toggleCart();
    } else {
      await postOrder( {
        userId,
        orderedProducts: checkoutProducts,
      });
      context.setProductCartData([]);
      context.setCartProductCount(0);
      toggleCart();
      navigate("/my-orders");
    }
  };

  useEffect(() => {
    setTotalPrice(sumTotalPrice(context.productCartData));
  }, [context.cartProductCount]);

  return (
    <>
      <div
        className={`${
          context.isProductCartOpened ? "flex" : "hidden"
        } font-display justify-start items-center flex-col fixed right-0 top-12 h-auto w-96 bg-white rounded-lg py-2`}
      >
        <div className="flex flex-row justify-between items-center p-2 w-full px-6">
          <p className="text-lg font-semibold">Carrito de compras</p>
          <XCircleIcon
            className="w-6 h-6 text-light_gray hover:text-salmon cursor-pointer"
            onClick={() => toggleCart()}
          />
        </div>
        {products.map((product) => (
          <MiniCard
            key={product.id + 5}
            id={product.id}
            title={product.title}
            price={product.price}
            imgURL={product.imgURL}
            deleteProduct={deleteProduct}
          />
        ))}
        <div className="flex flex-row items-center bg-white cursor-pointer w-[22rem] h-auto mb-2 border-solid rounded-md shadow-lg shadow-light_salmon">
          <p className="flex justify-between items-center w-full px-2">
            <span className="text-lg font-medium">Total compra:</span>
            <span className="text-lg font-medium">Total: ${totalPrice}</span>
          </p>
        </div>
        <button
          className="bg-gray text-white p-2 rounded-md w-[22rem] flex flex-row items-center justify-between transition delay-50 ease-in hover:bg-black_blue active:scale-110 shadow-lg shadow-light_salmon text-lg font-medium"
          onClick={() => checkoutCart(products)}
        >
          Finalizar pedido
          <span className="relative">
            <CheckBadgeIcon className="absolute top-0 right-0 h-5 w-5 text-black_blue" />
            <ShoppingCartIcon className="h-7 w-7" />
          </span>
        </button>
      </div>
    </>
  );
}

export default Cart;
