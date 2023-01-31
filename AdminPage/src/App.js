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
          <Route path="home/" element={<Home />} />
          <Route path="users/" element={<UserList />} />
          <Route path="users/:userId" element={<User />} />
          <Route path="newUser/" element={<NewUser />} />
          <Route path="products/" element={<ProductList />} />
          <Route path="products/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
        </Routes>
      </div>
    </>
  );
}

function ClientApp() {
  return <>ClientApp</>;
}
export default App;
