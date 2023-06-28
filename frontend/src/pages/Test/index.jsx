import Card from "@components/Card";

const testData = {
  _id: "648bbf354ce7323d9dacf274",
  name: "Cat cookies",
  category: "Pet Cookies",
  stock: 50,
  price: 50000,
  description: "Delicious cookies for home cats! Many flavors available",
  img: "https://picsum.photos/200",
  createdAt: "2023-06-16T01:47:33.120Z",
  updatedAt: "2023-06-16T01:47:33.120Z",
};
function Test() {
  return (
    <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg p-4">
      <Card
        title={testData.name}
        categoryId={testData.category}
        stock={testData.stock}
        price={testData.price}
        description={testData.description}
        imgURL={testData.img}
      />
    </div>
  );
}

export default Test;
