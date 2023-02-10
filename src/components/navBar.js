import React from "react"
import Scrollspy from "react-scrollspy"
import { Link } from "gatsby"

export default function Navbar({ siteSections }) {
  const sectionAnchorTags = siteSections.map(section => section.anchor)
  return (
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
            alt="avatar"
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
          items={sectionAnchorTags}
          currentClassName="is-current"
          className="navbar-nav"
        >
          {siteSections.map(section => (
            <li key={section.anchor} className="nav-item">
              <Link
                className="nav-link js-scroll-trigger"
                to={`/#${section.anchor}`}
              >
                {section.title}
              </Link>
            </li>
          ))}
        </Scrollspy>
      </div>
    </nav>
  )
}
