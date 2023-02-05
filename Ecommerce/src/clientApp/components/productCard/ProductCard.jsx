import React from "react";
import "./productCard.css";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MovingIcon from "@mui/icons-material/Moving";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function ProductCard() {
  return (
    <div className="col-3">
      <Link>
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <FavoriteBorderIcon className="wishlist-icon" />
            </Link>
          </div>
          <div className="product-img">
            <img
              className="img-fluid"
              src="https://images.unsplash.com/photo-1674478969244-a8bbf5e06624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="product img"
            />
            <img
              src="https://images.unsplash.com/photo-1674316941849-69c9f21604e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="product-detials">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id,
              vitae.
            </h5>
            <p>rating star</p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
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
          </div>
        </div>
      </Link>
    </div>
  );
}
