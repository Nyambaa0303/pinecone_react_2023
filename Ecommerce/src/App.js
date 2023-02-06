import Sidebar from "./admin/components/sidebar/Sidebar";

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
import Layout from "./clientApp/components/layout/Layout";
import { HomePage } from "./clientApp/pages/homePage/HomePage";
import About from "./clientApp/pages/about/About";
import Contact from "./clientApp/pages/contact/Contact";
import OurStore from "./clientApp/pages/ourstore/OurStore";
import { useState } from "react";

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
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<OurStore />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
