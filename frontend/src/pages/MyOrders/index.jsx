import { useState } from "react";

function MyOrders() {
  const [orders, setOrders] = useState([]);

  return (
    <div
      className={`flex justify-center items-center flex-col fixed top-0 right-0 h-[100vh] w-[100vw] `}
    >

      <div className="flex justify-center items-center flex-col p-4 w-80 h-auto bg-white rounded-lg shadow-light_salmon shadow-lg">
        <section className="flex relative justify-center items-center flex-col pb-2 w-full h-auto bg-white rounded-md border border-gray/25">
          <p className="absolute top-[-14px] left-2 bg-white text-gray">
            Listado de órdenes:
          </p>
        </section>
      </div>
    </div>
  );
}

export default MyOrders;
