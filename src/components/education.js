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
              <div className="resume-content">
                <h3 className="mb-0 orange">University of Nebraska at Omaha</h3>
                <div className="mb-1">
                  <div className="subheading green">
                    Bachelor of Science in IT Innovation
                  </div>
                  <div>
                    <p className="green">Emphasis Graphic and UX Design</p>
                  </div>
                </div>
              </div>
              <div className="resume-date text-md-right">
                <span className="blue">August 2017 - May 2020</span>
              </div>
            </div>
            <div className="mt-2">
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
            <div className="resume-content">
              <h3 className="mb-0 orange">Utah Valley University</h3>
              <div className="mb-3">
                <div className="subheading green">Bachelor of Fine Arts</div>
                <div>
                  <p className="green">Emphasis Graphic Design</p>
                </div>
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="blue">August 2014 - December 2015</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
