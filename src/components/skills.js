import React from "react"
import { Link } from "gatsby"

import {
  FaGitAlt,
  FaGulp,
  FaSketch,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaNpm,
  FaJava,
  FaBootstrap,
  FaReact,
  FaWordpressSimple,
  FaInvision,
} from "react-icons/fa"
import { IoLogoIonic } from "react-icons/io"
import {
  DiPerl,
  DiPhotoshop,
  DiIllustrator,
  DiGoogleCloudPlatform,
  DiTravis,
  DiFirebase,
} from "react-icons/di"
export default function skills() {
  return (
    <>
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5 text-primary">Skills</h2>

          <div className="subheading">
            Programming Languages &amp; Frameworks
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <FaHtml5 className="iconHover"></FaHtml5>
            </li>
            <li className="list-inline-item">
              <FaCss3Alt className="iconHover"></FaCss3Alt>
            </li>
            <li className="list-inline-item">
              <FaJsSquare className="iconHover"></FaJsSquare>
            </li>
            <li className="list-inline-item">
              <FaJava className="iconHover"></FaJava>
            </li>
            <li className="list-inline-item">
              <DiPerl className="iconHover"></DiPerl>
            </li>
            <li className="list-inline-item">
              <FaBootstrap className="iconHover"></FaBootstrap>
            </li>
            <li className="list-inline-item">
              <FaReact className="iconHover"></FaReact>
            </li>
            <li className="list-inline-item">
              <IoLogoIonic className="iconHover"></IoLogoIonic>{" "}
            </li>
            <li className="list-inline-item">
              <FaNodeJs className="iconHover"></FaNodeJs>
            </li>
          </ul>
          <div className="subheading">Build Tools &amp; Services</div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <FaGulp className="iconHover" />
            </li>
            <li className="list-inline-item">
              <FaGitAlt className="iconHover" />
            </li>
            <li className="list-inline-item">
              <FaNpm className="iconHover" />
            </li>
            <li className="list-inline-item">
              <DiTravis className="iconHover" />
            </li>
            <li className="list-inline-item">
              <DiFirebase className="iconHover" />
            </li>
            <li className="list-inline-item">
              <DiGoogleCloudPlatform className="iconHover" />
            </li>
            <li className="list-inline-item">
              <FaWordpressSimple className="iconHover" />
            </li>
          </ul>
          <div className="subheading">Design Tools</div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <DiPhotoshop className="iconHover" />
            </li>
            <li className="list-inline-item">
              <DiIllustrator className="iconHover" />
            </li>
            <li className="list-inline-item">
              <FaSketch className="iconHover" />
            </li>
            <li className="list-inline-item">
              <FaInvision className="iconHover" />
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
