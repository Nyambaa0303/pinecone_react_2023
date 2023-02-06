import Sidebar from "./admin/components/sidebar/Sidebar";
import ClientTopBar from "./clientPage/components/topBar/ClientTopBar";
import { Topbar } from "./admin/components/topbar/Topbar";
import "./app.css";
import Home from "./admin/Pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./admin/Pages/userList/UserList";
import User from "./admin/Pages/user/User";
import NewUser from "./admin/Pages/newUser/newUser";
import ProductList from "./admin/Pages/productList/ProductList";
import Product from "./admin/Pages/Product/Product";
import NewProduct from "./admin/Pages/newProduct/NewProduct";
import { ToastContainer } from "react-toastify";
import HomePage from "./clientPage/pages/homepage/HomePage";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import SinglePage from "./clientPage/pages/singlepage/SinglePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminApp />} />
        <Route path="*" element={<ClientApp />} />
      </Routes>
    </BrowserRouter>
  );
}

function AdminApp() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />

        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="users" element={<UserList />} />
          <Route path="users/:userId" element={<User />} />
          <Route path="newUser" element={<NewUser />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:productId" element={<Product />} />
          <Route path="newproduct" element={<NewProduct />} />
        </Routes>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

function ClientApp() {
  const [query, setQuery] = useState("");
  const [searchedQuery] = useDebounce(query, 1000);
  return (
    <>
      <ClientTopBar query={query} setQuery={setQuery} />
      <div className="container">
        <Routes>
          <Route path="/home" element={<HomePage query={searchedQuery} />} />
          <Route path="/single/:productId" element={<SinglePage />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
