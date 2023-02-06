import React, { useState, useEffect } from "react";
import "./productCard.css";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MovingIcon from "@mui/icons-material/Moving";
import { Link, useLocation } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReactStars from "react-rating-stars-component";
import axios from "axios";

export default function ProductCard(props) {
  const { grid } = props;
  let location = useLocation();

  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000`).then((response) => {
      const { data, status } = response;
      if (status === 200) {
        setProduct(data);
      } else {
        alert(`aldaa garlaaa: ${status}`);
      }
    });
  }, []);

  if (product.length === 0) {
    return <div>iim ur dun oldsongui ee </div>;
  }

  return (
    <div className="product-cards">
      {product.map((item) => (
        <>
          {/* className={`${
        //   location.pathname == "/store" ? `gr-${grid}` : "col-3"
        // }`}
        // > */}
          {/* <Link> */}
          <div
            as={Link}
            className="product-card d-flex justify-content-between flex-column position-relative"
          >
            {/* <div className="wishlist-icon position-absolute">
                <Link>
                  <FavoriteBorderIcon className="wishlist-icon" />
                </Link>
              </div> */}
            <div className="product-img">
              <img className="img-fluid" src={item.img} alt="product img" />
              {/* <img
                  src="https://images.unsplash.com/photo-1648931851212-3020920ba36e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt=""
                  className="img-fluid"
                /> */}
            </div>
            <div className="product-detials px-4">
              <h6 className="brand">Brand</h6>
              <h5 className="product-title">{item.name}</h5>

              <ReactStars
                count={5}
                value={3}
                edit={false}
                size={24}
                activeColor="#ffd700"
              />
              <p
                className={`description ${grid === 12 ? "d-block" : "d-none"}`}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
                excepturi sunt ipsam aspernatur repudiandae neque. Consequatur
                dicta vero praesentium commodi alias, repellendus cum, incidunt
                ad officiis dolore doloremque dolorum mollitia.
              </p>
              <p className="price">{item.price}</p>
            </div>
            {/* <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                  <Link>
                    <MovingIcon className="productCardIcon" />
                  </Link>
                  <Link>
                    <WorkOutlineIcon className="productCardIcon" />
                  </Link>
                  <Link>
                    <RemoveRedEyeIcon className="productCardIcon" />
                  </Link>
                </div>
              </div> */}
          </div>
          {/* </Link> */}
          {/* </div> */}
        </>
      ))}
    </div>
  );
}
