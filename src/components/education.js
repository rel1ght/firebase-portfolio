import React from "react"
import { Link } from "gatsby"

export default function Education() {
  return (
    <>
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center">
        <div className="w-100" id="education">
          <h2 className="mb-5 text-primary">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0 orange">University of Nebraska at Omaha</h3>
              <div className="subheading mb-3 green">
                Bachelor of I.T. Innovation
              </div>
              <div>Emphasis UX Design and Web Development</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="blue">August 2017 - May 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0 orange">Utah Valley University</h3>
              <div className="subheading mb-3 green">Bachelor of Fine Arts</div>
              <div>Emphasis Graphic Design</div>
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
