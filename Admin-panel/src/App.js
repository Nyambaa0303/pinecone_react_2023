import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./component/header.js";
import Admins from "./component/admin.js";

const MainComponent = () => (
  <>
    <Header />
    <Admins />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainComponent />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
