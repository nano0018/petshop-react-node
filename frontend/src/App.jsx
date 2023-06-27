import { BrowserRouter } from "react-router-dom";
import Navbar from "@components/Navbar";
import "./styles/App.css";
import AppRoutes from "@utils/AppRoutes";
import Layout from "@components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
