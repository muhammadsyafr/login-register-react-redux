import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer footer-padding footer-background-color">
      <div className="field has-text-centered">
        <span class="icon is-large has-text-info">
          <i class="fab fa-facebook fa-2x"></i>
        </span>

        <span class="icon is-large has-text-info">
        <i class="fab fa-twitter-square fa-2x"></i>
        </span>

        <span class="icon is-large has-text-info">
          <i class="fab fa-linkedin fa-2x"></i>
        </span>
      </div>
      <div className="content has-text-centered">
        <p>
          ©2020 <strong> ART Indonesia. </strong> All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
