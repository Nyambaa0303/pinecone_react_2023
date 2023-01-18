import { Todos } from "./component/todo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <>
      <Todos />
      <ToastContainer position="top-right" />
    </>
  );
}

export default App;
