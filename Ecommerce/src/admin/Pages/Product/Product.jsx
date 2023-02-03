import "./product.css";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { Chart } from "../../components/chart/Chart";
import { productData, productRows } from "../../../dummyData";
import PublishIcon from "@mui/icons-material/Publish";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Product() {
  const [product, setProduct] = useState();
  let { productId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4000/${productId}`).then((response) => {
      const { data, status } = response;
      if (status === 200) {
        setProduct(data);
      } else {
        alert(`aldaa garlaaa: ${status}`);
      }
    });
  }, [productId]);

  // ***************************

  if (!product) {
    return null;
  }

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
            <img src={product.img} alt="title img" className="productInfoImg" />
            <span className="priductName">{product.name}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">active : </span>
              <span className="productInfoValue">{product.status}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock : </span>
              <span className="productInfoValue">{product.stock}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Price: </span>
              <span className="productInfoValue">{product.price}</span>
            </div>
          </div>
        </div>
      </div>
      <EditingItem defaultValue={product} />
    </div>
  );
}

function EditingItem({ defaultValue }) {
  const [product, setProduct] = useState();
  let { productId } = useParams();
  const [img, setImg] = useState(defaultValue.img);
  const [text, setText] = useState(defaultValue.name);
  const [stock, setStock] = useState(defaultValue.stock);
  const [status, setStatus] = useState(defaultValue.status);
  const [price, setPrice] = useState(defaultValue.price);

  function EditSave(id) {
    axios.put(`http://localhost:4000/${id}`, {
      name: text,
      img: img,
      stock: stock,
      status: status,
      price: price,
    });
  }
  return (
    <div className="productBottom">
      <form className="productForm">
        <div className="productFormLeft">
          <label>Product Name</label>
          <input
            type="text"
            placeholder="name"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <label>Price</label>
          <input
            type="text"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label>In Stock</label>
          <input
            type="text"
            placeholder="in stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          <label>Active</label>
          <select
            name="active"
            id="active"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="productFormRight">
          <div className="productUpload">
            <img src={img} alt="" className="productUploadImg" />
            <input
              type="text"
              placeholder="img URL"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
            <label for="file">
              <PublishIcon />
            </label>
            <input type="file" id="file" style={{ display: "none" }} />
          </div>
          <button
            className="productButton"
            onClick={() => EditSave(defaultValue.id)}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
