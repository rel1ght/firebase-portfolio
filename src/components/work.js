import React, { useState } from "react"
import WorkRow from "./workRow"
function Work() {
  return (
    <>
      <section className="resume-section p-3 p-lg-5 d-flex" id="work">
        <div className="w-100">
          <h2 className="mb-5 text-primary">Recent Work</h2>
          <div className="container workContainer">
            <WorkRow />
          </div>
        </div>
      </section>
    </>
  )
}
export default Work
