import Sidebar from "./admin/components/sidebar/Sidebar";
import { useDebounce } from "use-debounce";
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
import { HomePage } from "./clientApp/pages/homePage/HomePage";
import About from "./clientApp/pages/about/About";
import Contact from "./clientApp/pages/contact/Contact";
import OurStore from "./clientApp/pages/ourstore/OurStore";
import { useState } from "react";
import Header from "./clientApp/components/Header/Header";
import Footer from "./clientApp/components/footer/Footer";
// import { createContext } from "react";

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
      <div className="adminContainer">
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
      <Header query={query} setQuery={setQuery} />
      <Routes>
        <Route>
          <Route path="/" element={<HomePage query={searchedQuery} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<OurStore query={searchedQuery} />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}
export default App;
// path="/" element={<Layout />}
