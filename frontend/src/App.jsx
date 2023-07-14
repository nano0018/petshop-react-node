import { BrowserRouter } from "react-router-dom";
import Navbar from "@components/Navbar";
import "./styles/App.css";
import AppRoutes from "@utils/AppRoutes";
import Layout from "@components/Layout";
import { GlobalContextProvider } from "@context/GlobalContext";
import Cart from "@components/Cart";

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
          <Cart />
        </Layout>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
