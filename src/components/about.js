import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { FaLinkedinIn, FaGithub, FaFileAlt } from "react-icons/fa"

import Particles from "react-particles-js"
import Typist from "react-typist"
import particlesConfig from "../utils/config/particlesConfig.json"
import calculateAge from "../utils/calculateAge"

const typingStatements = [
  "a Designer.",
  "a Developer.",
  "an Artist.",
  "a Maker.",
  "an Eagle Scout.",
  "an I.T. Innovation Grad.",
  "from Omaha.",
  `${calculateAge(5, 3, 1996)} years old.`,
  "looking for a job.",
]

export default function About() {
  const [typingStatus, setTypingStatus] = useState(true)
  useEffect(() => {
    // enables Typist to repeat
    if (!typingStatus) {
      setTypingStatus(true)
    }
  }, [typingStatus])
  return (
    <>
      <div
        className="pauto p-0 vh-100 d-none d-lg-block position-absolute container-fluid"
        style={{ zIndex: 1 }}
      >
        <Particles
          className="vh-100"
          width="100%"
          height="100%"
          params={particlesConfig}
        />
      </div>
      <section
        className="pnone resume-section p-3 p-lg-5  align-items-center"
        id="about"
      >
        <div
          className="w-100 position-relative"
          style={{ zIndex: 3 }}
          id="aboutbody"
        >
          <div className="d-none d-lg-block " id="emptydiv"></div>
          <h2 className="pauto mb-0 pb-0 green display-4" id="hi">
            Hi,
          </h2>
          <div id="extraspace">
            <h2 className="pauto mb-2 d-inline">My name is</h2>
            <h2 className="pauto mb-2 d-inline text-primary display-3">
              &nbsp;Tyler Manion
            </h2>
            <div>
              <h2 className="pauto mb-2 d-inline">and I&apos;m&nbsp;</h2>
              {typingStatus && (
                <Typist
                  onTypingDone={() => setTypingStatus(false)}
                  cursor={{ show: false }}
                  stdTypingDelay={40}
                  avgTypingDelay={100}
                  className="d-inline"
                  startDelay={2000}
                >
                  {typingStatements.map(statement => (
                    <span key={statement}>
                      <h2 className="pauto d-inline orange">{statement}</h2>
                      <Typist.Backspace count={statement.length} delay={4000} />
                    </span>
                  ))}
                  <span className="pauto wrap"></span>
                </Typist>
              )}
            </div>
          </div>
          <div className="d-block d-md-none" id="mobileonlyextraspace"></div>
          <br />
          <div className="pauto subheading mb-5 ml-1">
            <a href="tel:402-612-3862">(402) 612-3862</a>
            <span className="d-md-none">
              <br />
            </span>
            <span className="d-none d-md-inline">&nbsp;·&nbsp;</span>
            <a
              className="pauto text-lowercase"
              href="mailto:contact@tylermanion.xyz"
            >
              contact@tylermanion.xyz
            </a>
          </div>
          <p className="pauto lead mb-5 ">
            I&apos;m a lot of things, including looking for a job! Feel free to
            send me a message if you have a question, comment, or just want to
            chat!
          </p>
          <div className="social-icons">
            <div className="d-inline-flex flex-column mr-4">
              <a
                className="pauto mx-auto"
                target="_blank"
                href="https://www.linkedin.com/in/tylermanion/"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <p className="text-subtitle small text-center mt-1">LinkedIn</p>
            </div>
            <div className="d-inline-flex flex-column mr-4">
              <a
                className="pauto mx-auto"
                target="_blank"
                href="https://github.com/rel1ght"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <p className="text-subtitle small text-center mt-1">GitHub</p>
            </div>
            <div className="d-inline-flex flex-column mr-0">
              <a
                className="pauto mx-auto"
                target="_blank"
                href="/img/Tyler Manion Resume.pdf"
              >
                <FaFileAlt className="p-0" />
              </a>
              <p className="text-subtitle small text-center mt-1">Resume</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
