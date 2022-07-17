import { Link } from "react-router-dom";
import { useState } from "react";
import Hamburger from "./Hamburger";
export default function Header() {
  const [active, setActive] = useState(false);
  function handleToggle() {
    setActive(!active);
  }

  return (
    <div>
      <header className="site-header">
        <div className="top-header-bar">
          <div className="container">
            <div className="row flex-wrap justify-content-center justify-content-lg-between align-items-lg-center">
              <div className="col-12 col-lg-8 d-none d-md-flex flex-wrap justify-content-center justify-content-lg-start mb-3 mb-lg-0">
                {/* <div className="header-bar-email">
                  MAIL:
                  <a href="mailto:contact@Kejibaus.com">
                    <span className="__cf_email__">contact@Kejibaus.com</span>
                  </a>
                </div>
                <div className="header-bar-text">
                  <p>
                    PHONE: <a href="tel:+2348094396178">+234 809 439 6178</a>
                  </p>
                </div> */}
              </div>
              <div className="col-12 col-lg-4 d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center">
                <div className="donate-btn">
                  <a href="#">Donate Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-bar">
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex flex-wrap justify-content-between align-items-center container-pmx">
                <div className="site-branding d-flex align-items-center">
                  <Link
                    to="/"
                    className="d-block"
                    href="#"
                    rel="home"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <img
                      className="d-block"
                      src="images/logs.jpeg"
                      alt="logo"
                      style={{  height: "100px" }}
                    />
                  
                  </Link>
                </div>
                <nav className="site-navigation d-flex justify-content-end align-items-center">
                  <ul className="d-flex flex-column flex-lg-row justify-content-lg-end align-content-center">
                    <li className="current-menu-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About us</Link>
                    </li>
                    <li>
                      <a href="/#our-causes">Causes</a>
                    </li>
                    <li>
                      <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link to="/teams">Our Team</Link>
                    </li>

                    <li>
                      <a href="/#Contact">Contact</a>
                    </li>
                  </ul>
                </nav>
                <div className="hamburger-pmx">
                  <Hamburger onClick={handleToggle} status={active} />
                </div>

                <div className="sidenav_site-navigation">
                  <ul className={active ? "show" : ""}>
                    <li className="current-menu-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About us</Link>
                    </li>
                    <li>
                      <a href="#our-causes">Causes</a>
                    </li>
                    <li>
                      <a href="#">Gallery</a>
                    </li>
                    <li>
                      <Link to="/teams">Our Team</Link>
                    </li>

                    <li>
                      <a href="#Contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
