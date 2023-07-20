import OrderCard from "@components/OrderCard";
import { GlobalContext } from "@context/GlobalContext";
import { fetchData } from "@utils/requestHandler";
import { useContext, useEffect, useState } from "react";

function MyOrders() {
  const context = useContext(GlobalContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (context.userId) {
      const URL = `orders/user/${context.userId}`;
      fetchData(URL).then((data) => setOrders(data));
    } else {
      setOrders([]);
    }
  }, []);
  return (
    <div
      className={`flex md:justify-center items-center flex-col h-[100vh] w-[100vw]`}
    >
      <div className="flex justify-center items-center flex-col p-4 w-80 h-auto bg-white rounded-lg shadow-light_salmon shadow-lg">
        <section className="flex relative justify-center items-center flex-col pb-2 w-full h-auto bg-white rounded-md border border-gray/25">
          <p className="absolute top-[-14px] left-2 bg-white text-gray">
            Listado de órdenes:
          </p>
          <div className="flex flex-col justify-center items-center w-full h-full mt-4 px-4">
            {orders.length ? orders.map((order) => (
              <OrderCard
                key={order._id}
                id={order._id}
                orderedProducts={order.orderedProducts}
                updatedAt={order.updatedAt}
              />
            )) : <p className="text-gray text-sm text-center mb-2">No hay órdenes</p>}
          </div>
        </section>
      </div>
    </div>
  );
}

export default MyOrders;
