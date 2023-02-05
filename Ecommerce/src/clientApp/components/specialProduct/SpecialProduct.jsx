import "./specialProduct.css";
import ReactStars from "react-rating-stars-component";

export default function SpecialProduct() {
  return (
    <div className="col-4">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div className="special-product-img">
            <img
              src="https://images.unsplash.com/photo-1663373460374-d78ee5369fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="special-product-content">
            <h5 className="brad">Apple</h5>
            <h6 className="title">Iphone 14 Pro E-sim</h6>
            <ReactStars
              count={5}
              value="3"
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">$1000</span>&nbsp;
              <strike>$1500</strike>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
