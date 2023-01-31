import "./newProduct.css";
import PublishIcon from "@mui/icons-material/Publish";
// import { useState } from "react";
// import axios from "axios";

export default function NewProduct() {
  // const [text, setText] = useState("");
  // const [error, setError] = useState("");

  // function handleTextChange(event) {
  //   setText(event.target.value);
  // }

  // function handleSave(e) {
  //   e.preventDefault();
  //   if (text === "") {
  //     setError("Task is empy !!!");
  //   } else {
  //     axios
  //       .post("http://localhost:4000", {
  //         name: text,
  //       })

  //       .then((res) => {
  //         const { status } = res;
  //         if (status === 201) {
  //           setText("");
  //           setError("");
  //           // onClose();
  //           // onSave();
  //         }
  //       });
  //     console.log(text);
  //   }
  // }
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/627fa3b6a736222d2161069c/Apple--iPhone-14--iPhone-14-Pro--iPhone-14-Max--iPhone-14-Pro-Max--new-iPhone-/0x0.jpg?format=jpg&crop=1835,1375,x402,y49,safe&width=960"
            alt=""
            className="addProductImg"
          />
          <input type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file">
            <PublishIcon className="addProductIcon" />
          </label>
          <input type="text" />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Iphone" />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="234" />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton">Publish</button>
      </form>
    </div>
  );
}
