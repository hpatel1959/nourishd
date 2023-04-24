import React from "react";

function Footer() {
  return (
    <div className="footer-container">
      <div className="lists-wrapper">
        <div className="link-list p-2 container">
          <ul>
            <li>About</li>
            <li>Developers</li>
            <li>News</li>
          </ul>
        </div>
        <div className="site-map p-2 container">
          {" "}
          <ul>
            <li>Home</li>
            <li>Recipes</li>
            <li>Favourites</li>
            <li>Records</li>
            <li>Sign Up</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="contact p-2 container">
          <ul>
            <li>Contact Us</li>
            <li>Terms</li>
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
      <div className="copyright">&copy; 2023 NourishD</div>
    </div>
  );
}

export default Footer;
