import React from "react"
import { Link as ScrollLink } from "react-scroll"
import { StaticImage } from "gatsby-plugin-image"
// only for bootstrap4's navbar implementation (gross)
import $ from "jquery"

export default function Navbar({ siteSections }) {
  function handleClick() {
    $(".navbar-collapse").collapse("hide")
  }

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <ScrollLink
        smooth="easeInOutQuint"
        // offset={-70}
        duration={1000}
        to="about"
        isDynamic
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
        id="navbar-toggle-button"
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
                isDynamic
                currentClassName="is-current"
                className="nav-link hoverShadow clickPressDown"
                to={section.anchor}
                spy={true}
                smooth="easeInOutQuint"
                offset={-100}
                duration={1500}
                // spyThrottle={500}
                onClick={handleClick}
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
