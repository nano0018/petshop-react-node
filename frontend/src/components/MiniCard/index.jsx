import { PlusCircleIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

function MiniCard({ title, stock, price, imgURL }) {
  return (
    <div className="flex flex-row bg-white cursor-pointer w-fit h-96 border-solid rounded-lg shadow-lg shadow-light_salmon">
      <figure className="relative w-full h-fit mb-0 transition delay-75 ease-in active:scale-95">
        <img
          className="w-24 h-fit object-cover rounded-t-lg"
          src={imgURL}
          alt={title}
        />
      </figure>
      <div className="flex flex-col justify-between items-center p-2">
        <p className="flex justify-between items-center w-full">
          <span className="text-sm font-bold">{title}</span>
          <span className="text-lg font-medium">${price}</span>
        </p>
      </div>
    </div>
  );
}

MiniCard.propTypes = {
  title: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  imgURL: PropTypes.string.isRequired,
};

export default MiniCard;
