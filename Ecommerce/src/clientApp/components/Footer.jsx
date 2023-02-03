import React from "react";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <FiSend className="text-white fs-3" />
                <h2 className="mb-0 text-white">Sing Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  class="form-control py-1"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Mongolia , Ulaanbaatar , <br />
                  Bayangol destrit <br />
                </address>
                <a
                  href="tell: +91000701"
                  className="mb-2 mt-3 d-block text-white"
                >
                  +976-91000701
                </a>
                <a href="to:mail" className="mb-2 mt-2 d-block text-white">
                  nyambaatar0303@gmail.com
                </a>
                <div className="social-icons mt-5 ">
                  <a className="text-white mx-2" href="#">
                    <TwitterIcon />
                  </a>
                  <a className="text-white mx-2" href="#">
                    <LinkedInIcon />
                  </a>
                  <a className="text-white mx-2" href="#">
                    <InstagramIcon />
                  </a>
                  <a className="text-white mx-2" href="#">
                    <YouTubeIcon />
                  </a>
                  <a className="text-white mx-2" href="#">
                    <GitHubIcon />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About</Link>
                <Link className="text-white py-2 mb-1">Contact Us</Link>
                <Link className="text-white py-2 mb-1">FAQ</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy;{new Date().getFullYear()}: Powered by Nyamooo.mn{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
