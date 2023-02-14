import React from "react"
import { Link as ScrollLink } from "react-scroll"
import { StaticImage } from "gatsby-plugin-image"

export default function Navbar({ siteSections }) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <ScrollLink
        smooth="easeInOutQuint"
        offset={-70}
        duration={1000}
        to="about"
        className="navbar-brand js-scroll-trigger"
      >
        <span className="d-block d-lg-none">Tyler Manion</span>
        <span className="d-none d-lg-block">
          <StaticImage
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="../../static/img/profile.jpg"
            alt="avatar"
            placeholder="blurred"
          />
        </span>
      </ScrollLink>
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
        <div className="navbar-nav">
          {siteSections.map((section) => (
            <li key={section.anchor} className="nav-item">
              <ScrollLink
                currentClassName="is-current"
                className="nav-link"
                to={section.anchor}
                spy={true}
                smooth="easeInOutQuint"
                offset={-70}
                duration={1000}
              >
                {section.title}
              </ScrollLink>
            </li>
          ))}
        </div>
      </div>
    </nav>
  )
}
