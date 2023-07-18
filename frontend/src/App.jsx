import { BrowserRouter } from "react-router-dom";
import Navbar from "@components/Navbar";
import "./styles/App.css";
import AppRoutes from "@utils/AppRoutes";
import Layout from "@components/Layout";
import { GlobalContextProvider } from "@context/GlobalContext";
import Cart from "@components/Cart";
import ChangePasswordModal from "@components/ChangePasswordModal";

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
          <Cart />
          <ChangePasswordModal />
        </Layout>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
