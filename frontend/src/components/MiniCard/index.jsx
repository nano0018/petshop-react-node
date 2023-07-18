import { useState } from "react";
import { GlobalContext } from "@context/GlobalContext";
import { XMarkIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";
import { useContext, useEffect } from "react";

function MiniCard({ title, price, imgURL, id, deleteProduct }) {
  const context = useContext(GlobalContext);
  const products = context.productCartData;
  const [countItem, setCountItem] = useState(0);

  const getProductQty = () => {
    return products.filter((product) => product.id === id)[0].count;
  };


  useEffect(() => {
    setCountItem(getProductQty());
  }, [context.cartProductCount]);

  return (
    <div className="flex flex-row items-center bg-white cursor-pointer w-[22rem] h-20 mb-2 border-solid rounded-md shadow-lg shadow-light_salmon">
      <figure className="relative h-fit mb-0 transition delay-75 ease-in active:scale-95">
        <img
          className="h-16 object-cover rounded-sm mx-2"
          src={imgURL}
          alt={title}
        />
      </figure>
      <div className="flex flex-col justify-between items-center p-2 w-[20rem]">
        <p className="flex justify-between items-center w-full">
          <span className="text-sm font-bold">{title}</span>
          <XMarkIcon
            className="w-6 h-6 text-light_salmon hover:text-salmon"
            onClick={(e) => {
              e.stopPropagation();
              deleteProduct(id);
            }}
          />
        </p>
        <p className="flex justify-between items-center w-full">
          <span className="text-lg font-medium">${price}</span>
          <span className="text-sm text-gray">
            Unidades pedidas: {countItem}
          </span>
        </p>
      </div>
    </div>
  );
}

MiniCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imgURL: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteProduct: PropTypes.any,
};

export default MiniCard;
