import React from "react";

function Footer() {
  return (
    <div className="footer-container">
      <div className="lists-wrapper">
        <div className="link-list p-2 container">
          <ul>
            <li className="footer-link">About</li>
            <li className="footer-link">Developers</li>
            <li className="footer-link">News</li>
          </ul>
        </div>
        <div className="site-map p-2 container">
          {" "}
          <ul>
            <li>
              <a className="footer-link" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="footer-link" href="/recipes">
                Recipes
              </a>
            </li>
            <li>
              <a className="footer-link" href="/favourites">
                Favourites
              </a>
            </li>
            <li>
              <a className="footer-link" href="/records">
                Records
              </a>
            </li>
            <li>
              <a className="footer-link" href="/signup">
                Sign Up
              </a>
            </li>
            <li>
              <a className="footer-link" href="/login">
                Login
              </a>
            </li>
          </ul>
        </div>
        <div className="contact p-2 container">
          <ul>
            <li className="footer-link">Contact Us</li>
            <li className="footer-link">Terms</li>
          </ul>
        </div>
      </div>
      <div className="sns-icons p-2 container">
        <ul>
          <li>
            <i className="fa-brands fa-square-twitter"></i>
          </li>
          <li>
            <i className="fa-brands fa-linkedin"></i>
          </li>
          <li>
            <i className="fa-brands fa-square-facebook"></i>
          </li>
          <li>
            <i className="fa-brands fa-square-instagram"></i>
          </li>
        </ul>
      </div>
      <div className="copyright footer-link">&copy; 2023 NourishD</div>
    </div>
  );
}

export default Footer;
