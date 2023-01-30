import "./newProduct.css";
import PublishIcon from "@mui/icons-material/Publish";

export default function NewProduct() {
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
          <label for="file">
            <PublishIcon className="addProductIcon" />
          </label>
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
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
