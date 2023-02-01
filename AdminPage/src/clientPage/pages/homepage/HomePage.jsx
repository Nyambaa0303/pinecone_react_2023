import "./homePage.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function HomePage({ query }) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000?q=${query}`).then((response) => {
      const { data, status } = response;
      if (status === 200) {
        setProduct(data);
      } else {
        alert(`aldaa garlaaa: ${status}`);
      }
    });
  }, [query]);

  if (product.length === 0) {
    return <div>iim ur dun oldsongui ee </div>;
  }
  return (
    <div className="homePageItems">
      {product.map((item) => (
        <div className="homePage">
          <div className="homePageItem">
            <img src={item.img} alt="" className="homePageImg"></img>
            <span className="homePageTitle">{item.name}</span>
            <span className="hoemPagePrice">Price : {item.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
