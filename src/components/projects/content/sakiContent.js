import React from "react"

import { FaExternalLinkAlt } from "react-icons/fa"
import AwesomeSlider from "react-awesome-slider"
export default function SakiContent() {
  return (
    <div className="workContentWrapper justify-content-center">
      <div className="row">
        <h2 className="mb-1 mx-auto col-12 col-md-10">Omaha SAKI Dashboard</h2>
        <div className="mb-4 mx-auto col-12 col-md-10">
          <h6 className="green text-uppercase">
            A public information page to increase awareness and accountability
          </h6>
        </div>
      </div>
      <div className="workContentBody mt-2 container">
        <div className="row">
          <div className="mx-auto mb-2 col-12 col-md-10 slider-contain">
            <AwesomeSlider className="mb-5">
              <div data-src="./img/saki-funnel.gif" />
              <div data-src="./img/saki-donut.gif" />
              <div data-src="./img/saki-bar.gif" />
              <div data-src="./img/saki-questions.gif" />
              <div data-src="./img/saki-numbers.png" />
              <div data-src="./img/saki-top.png" />
            </AwesomeSlider>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h4 className="orange text-center">
              <a href="https://omaha-saki.htilabs.org">
                SAKI Dashboard <FaExternalLinkAlt className=" pl-1" />
              </a>
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <span className="lead">
              Thousands of sexual assault kits submitted to police have never
              been tested.
              <br />{" "}
            </span>
            <p className="d-inline">
              They potentially contain D.N.A. of the perpetrator, which not only
              can help in individual cases, but can also be used to identify
              serial sexual assaulters. Despite that, due to time, resources,
              but most of all priorities, police departments across the country
              have let them pile up, often for years. The Sexual Assault Kit
              Initiative (SAKI), is a grant program to accelerate the testing of
              unsubmitted kits. Part of the grant requirements are to include an
              online public accountability dashboard, in order to document
              progress and link to resources for victims. HTI Labs agreed to set
              up and host the site for the City of Omaha, and the responsibility
              for creating it was assigned to me.
            </p>
            <p className="mt-3">
              Due to tight time constraints and other responsibilities, I only
              had hours to build it. Because I empathized with its mission and
              the victims it serves, I decided to push myself and do the best I
              could in the time allotted. Thankfully, my incredible coworkers
              already had written much of the content, so I only had three
              requirements to meet. <br />
              <br />
              1. Organize and present the provided information in a quickly
              understandable way.
              <br />
              2. Set up authetication for members of the SAKI working group so
              that they would be able to view safely access sensitive
              information.
              <br /> 3. Turn the spreadsheets representing the project's
              progress into graphs that anyone could interpret, and make it easy
              to update with new data.
            </p>
            <p className="mt-3">
              I was tasked with designing the user interface and developing the
              frontend using React and Material UI. I saw the project through
              initial brainstorming meetings all the way to production release.
              LEADS is now being used across the country, by organizations like
              Homeland Security and state taskforces, and has already proven
              itself a valuable tool in taking down real trafficking operations.
              It was a monumental undertaking, but the amount of personal growth
              I experienced as a result, not to mention the satisfaction in
              making a real-world impact, was well worth it.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
