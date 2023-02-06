import "./specialProduct.css";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

export default function SpecialProduct() {
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div className="special-product-img">
            <img
              src="https://images.unsplash.com/photo-1664478711535-fd3cc5d1a99a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="special-product-content p-2">
            <h5 className="brad">Apple</h5>
            <h6 className="title">Iphone 14 Pro E-sim</h6>
            <ReactStars
              count={5}
              value={3}
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">Price : $1000</span>&nbsp;
              {/* <strike>$1500</strike> */}
            </p>
            {/* <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5 </b>days
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-3 bg-warning">1</span>:
                <span className="badge rounded-circle p-3 bg-warning">1</span>:
                <span className="badge rounded-circle p-3 bg-warning">1</span>
              </div>
            </div> */}
            {/* <div className="prod-count my-3">
              <p>Products: 5</p>
              <div class="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div> */}
            <Link className="button">Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
