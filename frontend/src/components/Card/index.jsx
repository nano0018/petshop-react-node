import { GlobalContext } from "@context/GlobalContext";
import { ShoppingCartIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";
import { useContext } from "react";
function Card({ title, stock, price, description, imgURL, id }) {
  const context = useContext(GlobalContext);
  const openProductDetail = () => {
    context.setIsProductDetailOpened(true);
    context.setIsProductCartOpened(false);
    context.setProductDetailData({ title, stock, price, description, imgURL });
  };

  const addProductToCart = () => {
    context.setCartProductCount(context.cartProductCount + 1);
    const existingProduct = context.productCartData.find(
      (item) => item.id === id
    );
    if (existingProduct) {
      const updatedProductData = context.productCartData.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count + 1,
          };
        }
        return item;
      });

      context.setProductCartData(updatedProductData);
    } else {
      const newProduct = {
        id,
        title,
        stock,
        price,
        description,
        imgURL,
        count: 1,
      };
      context.setProductCartData([
        ...context.productCartData,
        newProduct
      ]);
    }
  };
  return (
    <div className="bg-white cursor-pointer w-56 h-96 border-solid rounded-lg shadow-lg shadow-light_salmon">
      <figure
        className="relative w-full h-fit mb-0 transition delay-75 ease-in active:scale-95"
        onClick={() => openProductDetail()}
      >
        <img
          className="w-full h-fit object-cover rounded-t-lg"
          src={imgURL}
          alt={title}
        />
      </figure>
      <div className="flex flex-col justify-between items-center p-2">
        <p className="flex justify-between items-center w-full">
          <span className="text-sm font-bold">{title}</span>
          <span className="text-lg font-medium">${price}</span>
        </p>
        <p className="text-sm flex flex-col w-full mb-2">
          <span className="text-gray h-10">{description}</span>
          <span>Stock: {stock} Unidades</span>
        </p>
        <button
          className="bg-gray text-white p-2 rounded-md w-5/6 flex flex-row items-center justify-between transition delay-50 ease-in hover:bg-black_blue active:scale-110"
          onClick={() => addProductToCart()}
        >
          Agregar al carrito
          <span className="relative">
            <PlusCircleIcon className="absolute top-0 right-[-4px] h-5 w-5 text-black_blue" />
            <ShoppingCartIcon className="h-7 w-7" />
          </span>
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  imgURL: PropTypes.string.isRequired,
};

export default Card;
