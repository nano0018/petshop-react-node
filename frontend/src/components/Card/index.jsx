import { ShoppingCartIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";
function Card({ title, categoryId, stock, price, description, imgURL }) {
  console.log(title, categoryId, stock, description, imgURL);
  return (
    <div className="bg-white cursor-pointer w-56 h-96 border-solid rounded-lg shadow-lg shadow-light_salmon">
      <figure className="relative w-full h-fit mb-0 transition delay-75 ease-in active:scale-95">
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
        <button className="bg-gray text-white p-2 rounded-md w-5/6 flex flex-row items-center justify-between transition delay-50 ease-in hover:bg-black_blue active:scale-110">
          Agregar al carrito
          <span className="relative">
            <PlusCircleIcon className="absolute top-0 right-0 h-4 w-4 text-black_blue" />
            <ShoppingCartIcon className="h-7 w-7" />
          </span>
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
};

export default Card;
