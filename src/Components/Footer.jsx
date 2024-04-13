import './CSS/Footer.css';
import { NavLink } from "react-router-dom";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,

} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-about">
            <h6>About</h6>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, eius impedit quo minima voluptate qui assumenda. Ab, quos blanditiis suscipit architecto repellat nostrum amet voluptatem nihil facilis aspernatur est eligendi?
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus est veritatis aliquid, hic accusantium, eum doloribus, officia placeat fuga reprehenderit blanditiis vero a debitis. Numquam optio nemo eius laborum ullam.
            </p>
          </div>

          <div className="footer-contact">
            <h6>Reach us at</h6>
            <ul className="footer-links">
              <li>
                <a href="./">Phone: +1 (123) 456-7890</a>
              </li>
              <li>
                <a href="./">Email: info@abc.com</a>
              </li>
            </ul>
          </div>

          <div className="footer-quick-links">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
              <NavLink to="../about">About Us</NavLink>
              </li>
              <li>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2024 TheCatMaker Pvt. Lmt. All
              rights reserved.
            </p>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a
                  className="facebook"
                  href="#"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  className="twitter"
                  href="#"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  className="linkedin"
                  href="#"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
