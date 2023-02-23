import React from "react"
import { FaLinkedinIn, FaGithub, FaFileAlt } from "react-icons/fa"
import Typist from "react-typist-component"
import Particles from "./particles"
import calculateAge from "../utils/calculateAge"

const typingStatements = [
  "a designer",
  "a developer",
  "an artist",
  "a maker",
  "a team player",
  "a knot untangler",
  "an envelope pusher",
  "a story teller",
  "a canvas filler",
  "a box outthinker",
  "a challenge tackler",
  "a bar raiser",
  "a brain stormer",
  "a curve learner",
  "a ball roller",
  // `${calculateAge(5, 3, 1996)} years old`,
]

export default function About() {
  return (
    <div className="position-relative">
      <Particles />
      <section
        id="about"
        className="pnone resume-section p-3 p-lg-5 align-items-center"
      >
        <div
          className="w-100 position-relative"
          style={{ zIndex: 1 }}
          id="aboutbody"
        >
          <div className="d-none d-lg-block " id="emptydiv"></div>
          <h2 className="pauto mb-2 mb-lg-0 pb-0 green display-4" id="hi">
            Hi,
          </h2>
          <div id="extraspace">
            <h2 className="pauto mb-2 d-block d-lg-inline">My name is&nbsp;</h2>
            <h2 className="pauto mb-2 d-block d-lg-inline text-primary display-3">
              Tyler Manion
            </h2>
            <div>
              <h2 className="pauto mb-2 d-inline">and I&apos;m&nbsp;</h2>
              <Typist
                loop
                typingDelay={() => Math.max(Math.random() * 150, 40)}
                className="d-inline"
                startDelay={2000}
                backspaceDelay={40}
              >
                {typingStatements.map((statement) => (
                  <span key={statement}>
                    <h2 className="pauto d-inline orange">{statement}.</h2>
                    <Typist.Delay ms={4000} />
                    {/* +1 to delete period */}
                    <Typist.Backspace count={statement.length + 1} />
                    <Typist.Delay ms={500} />
                  </span>
                ))}
                <span className="pauto wrap"></span>
              </Typist>
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
    </div>
  )
}
