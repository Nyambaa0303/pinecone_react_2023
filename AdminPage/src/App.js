import Sidebar from "./components/sidebar/Sidebar";
import { Topbar } from "./components/topbar/Topbar";
import "./app.css";
import Home from "./Pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./Pages/userList/UserList";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
