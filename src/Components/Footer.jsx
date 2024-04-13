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
              Aumni Manageement services is a premier provider of manpower
              outsourcing solutions, dedicated to delivering high-quality
              staffing services tailored to meet the unique needs of businesses.
              With a commitment to excellence and professionalism, we strive to
              help organizations streamline their operations and achieve their
              goals.
            </p>
          </div>

          <div className="footer-contact">
            <h6>Reach us at</h6>
            <ul className="footer-links">
              <li>
                <a href="./">Phone: +91 8800279748</a>
              </li>
              <li>
                <a href="./">Email: info@aumnimanagement.com</a>
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
                <a href="http://aumnimanagement.com/team">Team</a>
              </li>
              <li>
                <a href="http://aumnimanagement.com/privacy-policy/">
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
              Copyright &copy; 2024 Aumni Management Services Pvt. Lmt. All
              rights reserved.
            </p>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a
                  className="facebook"
                  href="https://facebook.com/aumnimanagement"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  className="twitter"
                  href="https://facebook.com/aumnimanagement"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  className="linkedin"
                  href="https://facebook.com/aumnimanagement"
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
