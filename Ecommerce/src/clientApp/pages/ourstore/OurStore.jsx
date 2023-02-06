import "./ourStore.css";
import ReactStars from "react-rating-stars-component";
import { TfiLayoutColumn4 } from "react-icons/tfi";
import { TfiLayoutColumn3 } from "react-icons/tfi";
import { TfiLayoutColumn2 } from "react-icons/tfi";
import { TfiLayoutMenuV } from "react-icons/tfi";
import { useState } from "react";
import ProductCard from "../../components/productCard/ProductCard";

export default function OurStore({ query }) {
  const [grid, setGrid] = useState(4);

  return (
    <div className="store-wrapper  py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title ">Shop By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Phone</li>
                  <li>Laptop</li>
                  <li>Headphones</li>
                  <li>PC</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div>
                <h5 className="sub-title">Availablity</h5>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" />
                  <label htmlFor="" className="form-check-label">
                    In Stock (1)
                  </label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" />
                  <label htmlFor="" className="form-check-label">
                    Out of Stock (0)
                  </label>
                </div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating ">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="From"
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput1"
                      placeholder="To"
                    />
                    <label htmlFor="floatingInput1">To</label>
                  </div>
                </div>
                <h5 className="sub-title">Colors</h5>

                <div>
                  <ul className="colors ps-0 d-flex flex-wrap gap-10">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <h5 className="sub-title">Size</h5>
                <div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="size1"
                    />
                    <label htmlFor="size1" className="form-check-label">
                      S (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="size1"
                    />
                    <label htmlFor="size1" className="form-check-label">
                      M (3)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="size1"
                    />
                    <label htmlFor="size1" className="form-check-label">
                      X (0)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="size1"
                    />
                    <label htmlFor="size1" className="form-check-label">
                      XL (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="size1"
                    />
                    <label htmlFor="size1" className="form-check-label">
                      XXL (3)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary py-2 px-3 rounded-3">
                    Headphone
                  </span>
                  <span className="badge bg-light text-secondary py-2 px-3 rounded-3">
                    Laptop
                  </span>
                  <span className="badge bg-light text-secondary py-2 px-3 rounded-3">
                    Phone
                  </span>
                  <span className="badge bg-light text-secondary py-2 px-3 rounded-3">
                    Speaker
                  </span>
                  <span className="badge bg-light text-secondary py-2 px-3 rounded-3">
                    Tablet
                  </span>
                  <span className="badge bg-light text-secondary py-2 px-3 rounded-3">
                    Mobile
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Random Product</h3>
              <div>
                <div className="random-products d-flex mb-3 py-3">
                  <div className="w-50">
                    <img
                      src="https://images.unsplash.com/photo-1663373460363-448cf1bf9402?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aXBob25lJTIwMTR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                      alt=""
                      className="img-fluid rounded-3"
                    />
                  </div>
                  <div className="w-50 px-3">
                    <h6>Iphone 14 Pro Super Sales</h6>
                    <ReactStars
                      count={5}
                      value={3}
                      edit={false}
                      size={8}
                      activeColor="#ffd700"
                    />
                    <b>$ 1000</b>
                  </div>
                </div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img
                      src="https://images.unsplash.com/photo-1663373460363-448cf1bf9402?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aXBob25lJTIwMTR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                      alt=""
                      className="img-fluid rounded-3"
                    />
                  </div>
                  <div className="w-50 px-3">
                    <h6>Iphone 14 Pro Super Sales</h6>
                    <ReactStars
                      count={5}
                      value={3}
                      edit={false}
                      size={8}
                      activeColor="#ffd700"
                    />
                    <b>$ 1000</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select name="" id="" className="form-control form-select">
                    <option value="manual">Featured</option>
                    <option value="best-selling">Best Selling</option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                    <option value="create-ascending">Date old to new</option>
                    <option value="create-descending">Date new to old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totol-products mb-0">23 Products</p>
                  <div className="d-flex align-items-center gap-10 grid">
                    <TfiLayoutColumn4
                      className="filter-card-icon"
                      onClick={() => setGrid(3)}
                    />
                    <TfiLayoutColumn3
                      className="filter-card-icon"
                      onClick={() => setGrid(4)}
                    />
                    <TfiLayoutColumn2
                      className="filter-card-icon"
                      onClick={() => setGrid(6)}
                    />
                    <TfiLayoutMenuV
                      className="filter-card-icon"
                      onClick={() => setGrid(12)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="product-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard query={query} grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
