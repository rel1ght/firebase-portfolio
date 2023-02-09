import React from "react"
import Scrollspy from "react-scrollspy"
// import { nav, Navbar, button } from "react-bootstrap"
import { Link } from "gatsby"

export default props => (
  <nav
    className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
    id="sideNav"
  >
    <Link to="/#about" className="navbar-brand js-scroll-trigger">
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
      <Scrollspy
        items={[
          "about",
          "work",
          "experience",
          "education",
          "skills",
          "interests",
          "awards",
        ]}
        currentClassName="is-current"
        className="navbar-nav"
      >
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" to="/#about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" to="/#experience">
            Experience
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" to="/#work">
            Work
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" to="/#education">
            Education
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" to="/#skills">
            Skills
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" to="/#interests">
            Interests
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" to="/#awards">
            Awards
          </Link>
        </li>
      </Scrollspy>
    </div>
  </nav>
)
