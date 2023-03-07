import React from "react"
import { Link } from "gatsby"

export default function Education() {
  return (
    <>
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center">
        <div className="w-100" id="education">
          <h2 className="mb-5 text-primary">Education</h2>
          <div className="mb-5">
            <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
              <div className="w-100">
                <div className="mb-2 d-flex justify-content-between flex-column-reverse flex-xl-row align-items-xl-center">
                  <h3
                    className="orange mt-1 mt-xl-0"
                    style={{ flex: "1 0 auto" }}
                  >
                    University of Nebraska at Omaha
                  </h3>
                  <div className="resume-date" style={{ flexShrink: 1 }}>
                    <span className="blue">August 2017 - May 2020</span>
                  </div>
                </div>
                <div>
                  <div className="subheading green mb-n1">
                    Bachelor of Science in IT Innovation
                  </div>
                  <div>
                    <p className="green">Emphasis Graphic and UX Design</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-1">
              <p>
                IT Innovation is a unique degree that combines product design,
                entrepreneurship, computer science, and a personal focus. My
                focus was in graphic and UX design. The major prioritizes
                teaching creative thought, design thinking, and software
                development to create innovative solutions.
              </p>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="w-100">
              <div className="mb-2 d-flex justify-content-between flex-column-reverse flex-xl-row align-items-xl-center">
                <h3
                  className="mb-2 orange  mt-1 mt-xl-0"
                  style={{ flex: "1 0 auto" }}
                >
                  Utah Valley University
                </h3>
                <div className="resume-date" style={{ flexShrink: 1 }}>
                  <span className="blue">August 2014 - December 2015</span>
                </div>
              </div>
              <div className="mb-3">
                <div className="subheading green mb-n1">
                  Bachelor of Fine Arts
                </div>
                <div>
                  <p className="green">Emphasis Graphic Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
