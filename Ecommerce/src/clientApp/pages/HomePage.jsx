import React from "react";
import { Link } from "react-router-dom";
import { FaShippingFast } from "react-icons/fa";
import { FiGift } from "react-icons/fi";
import { BsHeadset } from "react-icons/bs";
import { GiFulguroPunch } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";

export const HomePage = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="https://images.unsplash.com/photo-1663373460363-448cf1bf9402?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80 "
                  alt=""
                  className="img-fluid rounded-3"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>Iphone 14 Pro </h5>
                  <p>From 900.00 $ or $40/mo.</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex gap-10 justify-content-center align-items-center flex-wrap">
                <div className="small-banner position-relative">
                  <img
                    src="https://images.macrumors.com/t/FFxfkIdbbWx_RXML7XJpJdxoh70=/1600x0/article-new/2023/01/Apple-MacBook-Pro-M2-Feature-Blue-Green.jpg"
                    alt=""
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute px-3">
                    <h4>BEST SALE</h4>
                    <h5>Macbook Pro </h5>
                    <p>
                      From 900.00 $ <br /> or $40/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="https://i.pcmag.com/imagery/articles/07fOXHEXdbQv0yowaTqfmsY-43.fit_lim.v1646770013.jpg"
                    alt=""
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute px-3">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy Ipad Air </h5>
                    <p>
                      From 900.00 $ <br /> or $40/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="https://image.coolblue.nl/content/d637295221b6233594069c77a542e47d"
                    alt=""
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute px-3">
                    <h4>20% OFF</h4>
                    <h5>Iwatch</h5>
                    <p>
                      From 900.00 $ <br /> or $40/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="https://s.yimg.com/os/creatr-uploaded-images/2020-12/5c3b6610-4493-11eb-befb-0b1948212105"
                    alt=""
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute px-3">
                    <h4>FREE ENGRAVING</h4>
                    <h5>AirPod Max</h5>
                    <p>
                      From 900.00 $ <br /> or $40/mo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="serveis d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-10">
                  <FaShippingFast className="homeIcon" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over $100</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <FiGift className="homeIcon" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <BsHeadset className="homeIcon" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <GiFulguroPunch className="homeIcon" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory direct price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <MdPayment className="homeIcon" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Producted Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-center flex-wrap align-items-center">
                <div className="d-flex align-items-center">
                  <div>
                    <h6 className="mb-0">Cameras</h6>
                    <p className="mb-0">10 Items</p>
                  </div>
                  <img
                    src="https://camerajabber.com/wp-content/uploads/2016/10/Best_mirrorless_cameras_2016_Sony_A7S_II.jpg"
                    alt=""
                  />
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6 className="mb-0">Music & Gaming</h6>
                    <p className="mb-0">10 Items</p>
                  </div>
                  <img
                    src="https://camerajabber.com/wp-content/uploads/2016/10/Best_mirrorless_cameras_2016_Sony_A7S_II.jpg"
                    alt=""
                  />
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6 className="mb-0">Smart TV</h6>
                    <p className="mb-0">10 Items</p>
                  </div>
                  <img
                    src="https://camerajabber.com/wp-content/uploads/2016/10/Best_mirrorless_cameras_2016_Sony_A7S_II.jpg"
                    alt=""
                  />
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6 className="mb-0">Smart Watches</h6>
                    <p className="mb-0">10 Items</p>
                  </div>
                  <img
                    src="https://camerajabber.com/wp-content/uploads/2016/10/Best_mirrorless_cameras_2016_Sony_A7S_II.jpg"
                    alt=""
                  />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6 className="mb-0">Cameras</h6>
                    <p className="mb-0">10 Items</p>
                  </div>
                  <img
                    src="https://camerajabber.com/wp-content/uploads/2016/10/Best_mirrorless_cameras_2016_Sony_A7S_II.jpg"
                    alt=""
                  />
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6 className="mb-0">Music & Gaming</h6>
                    <p className="mb-0">10 Items</p>
                  </div>
                  <img
                    src="https://camerajabber.com/wp-content/uploads/2016/10/Best_mirrorless_cameras_2016_Sony_A7S_II.jpg"
                    alt=""
                  />
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6 className="mb-0">Smart TV</h6>
                    <p className="mb-0">10 Items</p>
                  </div>
                  <img
                    src="https://camerajabber.com/wp-content/uploads/2016/10/Best_mirrorless_cameras_2016_Sony_A7S_II.jpg"
                    alt=""
                  />
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6 className="mb-0">Smart Watches</h6>
                    <p className="mb-0">10 Items</p>
                  </div>
                  <img
                    src="https://camerajabber.com/wp-content/uploads/2016/10/Best_mirrorless_cameras_2016_Sony_A7S_II.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4">
                    <img
                      src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="https://1000logos.net/wp-content/uploads/2017/06/Samsung-Logo-1993.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="https://logos-world.net/wp-content/uploads/2020/04/Air-Jordan-Symbol.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0312/6537/files/The_North_Face_Square_Logo_9e388685-3d00-4963-8ffe-41687ec23257.jpg?18883"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo-1974-1976.png"
                      alt="brand"
                    />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest blogs</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};
