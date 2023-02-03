import "./newProduct.css";
import PublishIcon from "@mui/icons-material/Publish";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

export default function NewProduct() {
  const [img, setImg] = useState("");
  const [text, setText] = useState("");
  const [stock, setStock] = useState("");
  const [status, setStatus] = useState("No");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const [category, setCategory] = useState();

  function handleSave(e) {
    e.preventDefault();
    if (text === "") {
      setError("Task is empy !!!");
    } else {
      axios
        .post("http://localhost:4000", {
          name: text,
          img: img,
          stock: stock,
          status: status,
          price: price,
          categories: category,
        })

        .then((res) => {
          const { status } = res;
          if (status === 201) {
            setText("");
            setError("");
            setImg("");
            setStock("");
            setStatus("No");
            setPrice("");
            toast.success("Success", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
        });
    }
  }
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <img src={img} alt="image" className="addProductImg" />
          <input type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file">
            <PublishIcon className="addProductIcon" />
          </label>
          <input
            onChange={(e) => setImg(e.target.value)}
            value={img}
            placeholder="img URL"
          />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <select
            name="active"
            id="active"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="Empy">Empy</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Redmi">Redmi</option>
            <option value="Dell">Dell</option>
            <option value="Huawei">Huawei</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input
            type="text"
            placeholder="product name"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            type="text"
            placeholder="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input
            type="text"
            placeholder="stock"
            onChange={(e) => setStock(e.target.value)}
            value={stock}
          />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select
            name="active"
            id="active"
            onChange={(e) => setStatus(e.target.value)}
            value={status}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <button className="addProductButton" onClick={handleSave}>
          Publish
        </button>
      </form>
    </div>
  );
}
