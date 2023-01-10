import "bootstrap/dist/css/bootstrap.min.css";
import { GrLocation } from "react-icons/gr";
import { BsTruck } from "react-icons/bs";
import "../style/bottom.css";

export function Bottom() {
  return (
    <div className=" bottom">
      <p className="par">Need help? Call Us: (+98) 0234 456 788</p>
      <div className="d-flex bottomBody">
        <div className="d-flex bottomTop">
          <GrLocation />
          <p className="par1">Our store</p>
        </div>
        <div className="d-flex bottomBottom">
          <BsTruck />
          <p className="par1">Track your order</p>
        </div>
      </div>
    </div>
  );
}
