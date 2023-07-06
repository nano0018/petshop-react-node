import { XMarkIcon } from "@heroicons/react/24/solid";

function ProductDetailSideBar() {
  const imgURL =
    "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  const title = "Camiseta";
  const price = "100";
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  const stock = "10";
  let status = "hidden"
  const change = () => {
    status = "hidden"
    console.log(status)
  }
  return (
<>
<div className={`${status} justify-center items-center flex-col fixed top-0 right-0 h-[100vh] w-[100vw] border border-t-light_gray rounded-lg backdrop-blur-lg bg-black_blue/80 `}></div>
<div className={`${status} justify-center items-center flex-col fixed top-0 right-0 h-[100vh] w-[100vw] border border-t-light_gray rounded-lg`}>
      <aside className="flex flex-col justify-between items-center w-96 h-[50vh] bg-white z-1 rounded-lg">
        <figure className="relative w-full h-fit mb-0">
        <div className="absolute top-0 right-0" onClick={() => change()}>
          <XMarkIcon className="h-6 w-6 text-white cursor-pointer" />
        </div>
          <img
            className="w-96 h-fit object-cover rounded-t-lg"
            src={imgURL}
            alt={title}
          />
        </figure>
        <div className="flex flex-col w-full justify-between items-center p-2">
          <p className="flex justify-between items-center w-full">
            <span className="text-xl font-bold mb-1">{title}</span>
            <span className="text-xl font-medium">${price}</span>
          </p>
          <p className="text-sm flex flex-col w-full mb-2">
            <span className="text-gray h-10">{description}</span>
            <span>Stock: {stock} Unidades</span>
          </p>
        </div>
      </aside>
    </div>
</>
  );
}

export default ProductDetailSideBar;
