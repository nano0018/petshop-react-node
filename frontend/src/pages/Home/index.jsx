import Card from "@components/Card";
import ProductDetailModal from "@components/ProductDetailModal";
import { fetchData } from "@utils/requestHandler";
import { useEffect, useState } from "react";

function Home() {
  // Get Products
  const [items, setItems] = useState([]);
  useEffect(() => {
    const URL = "products";
    fetchData(URL).then((data) => setItems(data));
  }, []);
  return (
    <>
      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-flow-row content-center place-content-center max-w-screen-lg w-auto">
        {items.map((item) => (
          <Card
            key={item._id}
            id={item._id}
            title={item.name}
            categoryId={item.category}
            stock={item.stock}
            price={item.price}
            description={item.description}
            imgURL={item.img}
          />
        ))}
      </div>
      <ProductDetailModal />
    </>
  );
}

export default Home;
