import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import "./Header.scss";
import Logo from "../../assets/logo.png";

const Header = () => {
    const [hideOnScroll, setHideOnScroll] = useState(true);
    const [onTop, setonTop] = useState(true);
  
    useEffect(() => {
      ( function() {
        var burger = document.querySelector(".nav-toggle");
        var menu = document.querySelector(".navbar-menu");
        burger.addEventListener("click", function() {
          burger.classList.toggle("is-active");
          menu.classList.toggle("is-active");
        });
      })();
    }, []);
  
    useScrollPosition(({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
  
      if (currPos.y === 0) {
      //   console.log("on top");
        setonTop(true);
      } else {
        setonTop(false);
      }
    });
  
    return (
      <nav
        className={`is-active navbar is-fixed-top ${
          onTop ? `is-link` : `is-transparent has-shadow`
        } `}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container is-fullhd">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src={Logo} alt="Logo" height={28} />{" "}
              <h1 className={onTop ? null : `brand-scroll`}>Art.</h1>
            </a>
  
            <a
              href="#no"
              role="button"
              className="navbar-burger burger nav-toggle"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a href="#menu" className="navbar-item">
                Catalog
              </a>
              <a href="#menu" className="navbar-item">
                Premium
              </a>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <Link to="/register">
                      <a
                        className={`button is-outlined btn-menu ${
                          onTop ? `is-light` : ``
                        }`}
                        href="#Register"
                      >
                        <span className="txt-btn">Register</span>
                      </a>
                    </Link>
                  </p>
  
                  <p className="control">
                    <Link to="/login">
                      <a className="button is-link" href="#Login">
                        <span className="txt-btn">Login</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  export default Header;