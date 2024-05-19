import React, { useState, useEffect } from "react";
import "../Css/NavBar.css";
import Aos from "aos";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedinIn,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const navigate = useNavigate();
  const [active, setActive] = useState(false); // Changed active state to boolean
  const [icon, setIcon] = useState(false); // Changed icon state to boolean

  const navToggle = () => {
    setActive(!active);
    setIcon(!icon);
  };

  useEffect(() => {
    const handleDocumentClick = () => {
      setActive(false);
      setIcon(false);
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleMenuClick = (e) => {
    e.stopPropagation(); // Prevent the document click event
    setActive(false);
    setIcon(false);
  };

  return (
    <nav className="nav" data-aos="fade-down">
      <div className="nav__brand">
        <div className="logo">
          <img
            src=""
            alt="logo"
            onClick={() => {
              navigate("/");
            }}
          ></img>
        </div>
        <ul className={active ? "nav__menu nav__active" : "nav__menu"} onClick={handleMenuClick}>
          <div className="btn-nav">
            <li className="nav__item">
              <button
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </button>
            </li>
            <li className="nav__item">
              <button
                onClick={() => {
                  navigate("/AboutUs");
                }}
              >
                AboutUs
              </button>
            </li>
            <li className="nav__item">
              <button
                onClick={() => {
                  navigate("/Services");
                }}
              >
                Services
              </button>
            </li>
            <li className="nav__item">
              <button
                onClick={() => {
                  navigate("/Blog");
                }}
              >
                Blog
              </button>
            </li>
            <li className="nav__item">
              <button
                onClick={() => {
                  navigate("/contact");
                }}
              >
                contact
              </button>
            </li>
            <div className="info-contain">
              <div className="info-nav">
                <p>+91934732XXXX</p>
                <p>Emailexample@gmail.com</p>
              </div>
              <div className="social-media" data-aos="fade-down">
                <ul className="social-media-desktop">
                  <li>
                    <a href="https://www.facebook.com/webeesketch">
                      <FaFacebookSquare className="facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/webeesketch">
                      <FaInstagramSquare className="instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/webeesketch">
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ul>
        <div onClick={(e) => { e.stopPropagation(); navToggle(); }} className={icon ? "nav__toggler toggle" : "nav__toggler"}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
      <div className="top-nav">
        <div className="info-nav">
          <p>+91 934732XXXX</p>
          <p>Emailexample@gmail.com</p>
        </div>
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="https://www.facebook.com/webeesketch">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/webeesketch">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/webeesketch">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;