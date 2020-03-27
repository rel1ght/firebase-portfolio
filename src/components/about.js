import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faFileAlt } from "@fortawesome/free-solid-svg-icons"
export default () => (
  <section
    className="pnone resume-section p-3 p-lg-5  align-items-center"
    id="about"
  >
    <div className="w-100" id="aboutbody">
      <div className="d-none d-lg-block " id="emptydiv"></div>
      <h2 className="pauto mb-0 pb-0 green display-4" id="hi">
        Hi,
      </h2>
      <div id="extraspace">
        <h2 className="pauto mb-2 d-inline">My name is</h2>
        <h2 className="pauto mb-2 d-inline text-primary display-3">
          Tyler Manion
        </h2>
        <div>
          <h2 className="pauto mb-2 d-inline">and I'm </h2>
          <h2
            className="pauto typewrite d-inline orange"
            data-period="2000"
            data-type='[ "a Developer.", "a Designer.", "an Artist.", "a Maker.", "a Student.", "studying I.T. Innovation", "from Omaha.", "23 years old.", "looking for a job." ]'
          >
            <span className="pauto wrap"></span>
          </h2>
        </div>
      </div>
      <div className="d-block d-md-none" id="mobileonlyextraspace"></div>
      <br />
      <div className="pauto subheading mb-5 ml-1">
        <Link href="tel:402-612-3862">(402) 612-3862</Link> ·
        <Link
          className="pauto text-lowercase"
          href="mailto:contact@tylermanion.xyz"
        >
          contact@tylermanion.xyz
        </Link>
      </div>
      <p className="pauto lead mb-5 ">
        I’m a lot of things, but unapproachable isn’t one of them! I love
        hearing from new people. Feel free to send me a message if you have a
        question, comment, or just want to chat!
      </p>
      <div className="social-icons">
        <Link
          className="pauto"
          href="https://www.linkedin.com/in/tyler-manion-98690513a/"
        >
          <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
        </Link>
        <Link className="pauto" href="https://github.com/rel1ght">
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </Link>
        <Link className="pauto" href="img/resume.pdf">
          <FontAwesomeIcon icon={faFileAlt}></FontAwesomeIcon>
        </Link>
      </div>
    </div>
    <div
      className="pauto w-100 h-100 d-none d-lg-block"
      id="particles-js"
    ></div>
  </section>
)
