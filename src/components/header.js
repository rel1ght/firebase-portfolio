import React from "react"
import { nav, Navbar, button } from "react-bootstrap"
import { Link } from "gatsby"
export default props => (
  <nav
    className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
    id="sideNav"
  >
    <Link className="navbar-brand js-scroll-trigger" href="#page-top">
      <span className="d-block d-lg-none">Tyler Manion</span>
      <span className="d-none d-lg-block">
        <img
          className="img-fluid img-profile rounded-circle mx-auto mb-2"
          src="img/profile.jpg"
          alt=""
        />
      </span>
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" href="#about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" href="#experience">
            Experience
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" href="#education">
            Education
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" href="#skills">
            Skills
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" href="#interests">
            Interests
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" href="#awards">
            Awards
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)
