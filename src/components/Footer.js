import React from "react";

function Footer() {
  return (
    <div className="d-flex bg-warning">
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
          <li>Home</li>
          <li>Recipes</li>
          <li>Favourites</li>
          <li>Records</li>
          <li>Sign Up</li>
          <li>Login</li>
        </ul>
      </div>
      <div className="sns-icons p-2 container">
        <ul>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>FaceBook</li>
          <li>Instgram</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
