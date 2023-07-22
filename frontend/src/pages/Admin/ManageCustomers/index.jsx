import { useContext, useEffect, useState } from "react";
import AdminPanelLayout from "@components/AdminPanelLayout";
import { fetchData } from "@utils/requestHandler";
import { NavLink } from "react-router-dom";
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import { GlobalContext } from "@context/GlobalContext";

function ManageCustomers() {
  const context = useContext(GlobalContext);

  const [users, setUsers] = useState();
  useEffect(() => {
    context?.setActiveSection("users");
    fetchData("users").then((data) => {
      const roles = "customer";
      const users = data.filter((user) => roles.includes(user.role));
      setUsers(users)
    });
  }, []);
  return (
    <AdminPanelLayout>
      <div className="ml-20 md:ml-4 flex flex-col items-center justify-center">
        <table className="text-center">
          <thead >
            <tr>
              <th colSpan={3}>Clientes</th>
            </tr>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user._id}>
                <td>{`${user.name} ${user.lastName}`}</td>
                <td>{user.email}</td>
                <td>
                <NavLink to={`${user._id}`}><PencilSquareIcon className="h-6 text-gray hover:text-black_blue "/></NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminPanelLayout>
  );
}

export default ManageCustomers;
