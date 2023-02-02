import { useEffect, useState } from "react";
import "./singlePage.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";

export default function SinglePage() {
  const [product, setProduct] = useState();

  let { productId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4000/${productId}`).then((response) => {
      const { data, status } = response;
      console.log(data);
      if (status === 200) {
        setProduct(data);
      } else {
        alert(`aldaa garlaaa: ${status}`);
      }
    });
  }, [productId]);

  if (!product) {
    return null;
  }
  return (
    <div className="singlePage">
      <div className="singlePageLeft">
        <img src={product.img} alt="" className="singlePageImg" />
      </div>
      <div className="singlePageRight">
        <div className="singlePageRightTitle">{product.name}</div>
        <div className="singlePageRightPrice">
          <span>Price : </span>
          {product.price}
        </div>
        <div className="singlePageButtons">
          <button className="singlePageButtonCart">Cart</button>
          <button className="singlePageButtonPurchase">Purchase</button>
        </div>
        <div className="singlePageConnect">
          <div className="singlePageConnectTitle">Contact US</div>

          <button className="singlePageButtonCart">
            <PhoneIcon className="singlePageIcon" />
          </button>
          <button className="singlePageButtonCart">
            <WhatsAppIcon className="singlePageIcon" />
          </button>
        </div>
      </div>
    </div>
  );
}
