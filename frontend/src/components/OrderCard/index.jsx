import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";
function OrderCard({ id, orderedProducts, updatedAt }) {
  const updatedDate = new Date(updatedAt);
  const formattedDate = updatedDate.toISOString().split("T")[0];
  const qtyOrderedProducts = orderedProducts.reduce(
    (total, product) => total + product?.qtyOrderedProduct,
    0
  );
  return (
    <div className="flex flex-row items-center justify-around bg-white cursor-pointer w-full h-auto mb-2 border-solid rounded-md shadow-sm shadow-light_salmon px-2 py-1">
      <ShoppingBagIcon className="h-12 mr-2 text-black_blue" />
      <section className="flex flex-col items-start">
        <p className="text-gray text-sm text-center">
          ID: <span className="text-black_blue font-bold">{id}</span>
        </p>
        <p className="text-gray text-sm text-center">
          Total productos:{" "}
          <span className="text-black_blue font-bold">
            {qtyOrderedProducts}
          </span>
        </p>
        <p className="text-gray text-sm text-center">
          Fecha pedido:{" "}
          <span className="text-black_blue font-bold">{formattedDate}</span>
        </p>
      </section>
    </div>
  );
}

OrderCard.propTypes = {
  id: PropTypes.string.isRequired,
  orderedProducts: PropTypes.array.isRequired,
  updatedAt: PropTypes.string.isRequired,
};

export default OrderCard;
