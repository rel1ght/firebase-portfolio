import React, { useState } from "react"
import WorkRow from "./workRow"
function Work() {
  return (
    <>
      <section className="resume-section p-3 p-lg-5 d-flex" id="work">
        <div className="w-100">
          <h2 className="mb-0 mb-lg-5 text-primary">Recent Work</h2>
          <h5 className="mb-5 green d-lg-none">
            Tap a thumbnail to learn more!
          </h5>
          <div className="workContainer">
            <WorkRow />
          </div>
        </div>
      </section>
    </>
  )
}
export default Work
