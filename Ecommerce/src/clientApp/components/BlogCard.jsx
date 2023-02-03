import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard() {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-img">
          <img
            src="https://images.unsplash.com/photo-1674704740650-9cf425022ab0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="blog-content">
          <p className="date">date </p>
          <h5 className="title">Lorem ipsum dolor sit amet.</h5>
          <p className="description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis accusamus vel, quibusdam quaerat ipsam rem ratione
            autem. Ipsam aperiam, quisquam repellendus perspiciatis, vitae rerum
            vel non nihil sunt sit blanditiis!
          </p>
          <Link className="button" to="/">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
