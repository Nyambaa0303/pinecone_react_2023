import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/header.js";
import Admins from "./component/admin.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/about",
    element: <div>About!</div>,
  },
  {
    path: "/",
    element: <AdminApp />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;

function AdminApp() {
  return (
    <>
      <Header />
      <Admins />
    </>
  );
}
