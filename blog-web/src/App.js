import "bootstrap/dist/css/bootstrap.min.css";
import "react-awesome-button/dist/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminApp } from "./component/admin/AdminApp";
import { ClientApp } from "./component/client/ClientApp";
import { createContext } from "react";

export const UserContext = createContext("Guest");

function Greeting() {
  return (
    <div>
      <strong>Context</strong>
    </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/admin/*"
          element={
            <UserContext.Provider
              value={{ greeting: <Greeting />, name: "Nyambaa" }}
            >
              <AdminApp />
            </UserContext.Provider>
          }
        />
        <Route path="*" element={<ClientApp />} />
      </Routes>
      <ToastContainer position="top-right" />
    </BrowserRouter>
  );
}

export default App;
