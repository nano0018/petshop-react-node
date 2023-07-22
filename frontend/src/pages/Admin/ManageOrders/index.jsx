import { useContext, useEffect, useState } from "react";
import AdminPanelLayout from "@components/AdminPanelLayout";
import { fetchData } from "@utils/requestHandler";
import { NavLink } from "react-router-dom";
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import { GlobalContext } from "@context/GlobalContext";

function ManageOrders() {
  const context = useContext(GlobalContext);

  const [orders, setOrders] = useState();
  const [users, setUsers] = useState();
  useEffect(() => {
    context?.setActiveSection("orders");
    fetchData("orders/manage").then((data) => setOrders(data));
    fetchData("users").then((data) => setUsers(data));
  }, []);
  return (
    <AdminPanelLayout>
      <div className="ml-20 md:ml-4 flex flex-col items-center justify-center">
        <table className="text-center">
          <thead >
            <tr>
              <th colSpan={3}>Órdenes</th>
            </tr>
            <tr>
              <th>Nombre</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <tr key={order._id}>
                <td>{`${users?.find((user) => user._id === order.userId)?.name}`}</td>
                <td>{order.stock}</td>
                <td>
                <NavLink to={`${order._id}`}><PencilSquareIcon className="h-6 text-gray hover:text-black_blue "/></NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminPanelLayout>
  );
}

export default ManageOrders;
