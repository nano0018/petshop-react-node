import { useContext, useEffect, useState } from "react";
import AdminPanelLayout from "@components/AdminPanelLayout";
import { fetchData } from "@utils/requestHandler";
import { NavLink } from "react-router-dom";
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import { GlobalContext } from "@context/GlobalContext";

function ManageCategories() {
  const context = useContext(GlobalContext);

  const [products, setProducts] = useState();
  useEffect(() => {
    context?.setActiveSection("categories");
    fetchData("categories").then((data) => setProducts(data));
  }, []);
  return (
    <AdminPanelLayout>
      <div className="ml-20 md:ml-4 flex flex-col items-center justify-center">
        <table className="text-center">
          <thead >
            <tr>
              <th colSpan={2}>Categorías de producto</th>
            </tr>
            <tr>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr key={product._id}>
                <td>{`${product.name}`}</td>
                <td>
                <NavLink to={`${product._id}`}><PencilSquareIcon className="h-6 text-gray hover:text-black_blue "/></NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminPanelLayout>
  );
}

export default ManageCategories;
