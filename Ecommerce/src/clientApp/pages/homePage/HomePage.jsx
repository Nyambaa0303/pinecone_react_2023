import React from "react";
import "./homePage.css";
import { Link } from "react-router-dom";
import { FaShippingFast } from "react-icons/fa";
import { FiGift } from "react-icons/fi";
import { BsHeadset } from "react-icons/bs";
import { GiFulguroPunch } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
import Marquee from "react-fast-marquee";
import BlogCard from "../../components/BlogCard/BlogCard";
import ProductCard from "../../components/productCard/ProductCard";
import SpecialProduct from "../../components/specialProduct/SpecialProduct";
import Carousel from "react-bootstrap/Carousel";

export const HomePage = ({ query }) => {
  return (
    <>
      <section className="home-wrapper-1 ">
        <div className="row">
          <div className="col-12">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block  w-100 img-fluid"
                  src="https://images.unsplash.com/photo-1648931770267-d925f21df971?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src="https://images.unsplash.com/photo-1648931851212-3020920ba36e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>
      {/* <section className="home-wrapper-2 py-5">
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
      </section> */}
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard query={query} />
          </div>
        </div>
      </section>
      {/* <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5 home-wrapper-2  ">
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
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section> */}
    </>
  );
};
