import Card from "@components/Card";
import FetchData from "@utils/FetchData";
import { useEffect, useState } from "react";

function Home() {
  // Get Products
  const [items, setItems] = useState([]);
  useEffect(() => {
    const URL = "http://localhost:3000/api/v1/products";
    try {
      FetchData(URL).then((data) => setItems(data));
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <>
      <h1 className="text-6xl font-display text-gray-600">Hola mundo</h1>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items.map((item) => (
          <Card
            key={item._id}
            title={item.name}
            categoryId={item.category}
            stock={item.stock}
            price={item.price}
            description={item.description}
            imgURL={item.img}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
