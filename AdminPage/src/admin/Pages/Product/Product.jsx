import "./product.css";
import { Link } from "react-router-dom";
import { Chart } from "../../../admin/components/chart/Chart";
import { productData, productRows } from "../../../dummyData";
import PublishIcon from "@mui/icons-material/Publish";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Product() {
  useEffect(() => {
    axios.get("http://localhost:4000").then((response) => {
      const { data, status } = response;
      if (status === 200) {
      } else {
        alert(`aldaa garlaaa: ${status}`);
      }
    });
  }, []);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/admin/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src="" alt="title img" className="productInfoImg" />
            <span className="priductName">title</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">324</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Sales:</span>
              <span className="productInfoValue">1324</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Iphone" />
            <label>In Stock</label>
            <select name="instock" id="idstock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://imageio.forbes.com/specials-images/imageserve/627fa3b6a736222d2161069c/Apple--iPhone-14--iPhone-14-Pro--iPhone-14-Max--iPhone-14-Pro-Max--new-iPhone-/0x0.jpg?format=jpg&crop=1835,1375,x402,y49,safe&width=960"
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <PublishIcon />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
