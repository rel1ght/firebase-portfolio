import React, { useState } from "react"

function Work() {
  return (
    <>
      <section className="resume-section p-3 p-lg-5 d-flex" id="work">
        <div className="w-100">
          <h2 className="mb-5 text-primary">Recent Work</h2>
          <div className="container workContainer">
            <div className="row justify-content-center workRow1">
              <div className="col-3">
                <img
                  src="https://assets.petco.com/petco/image/upload/f_auto,q_auto/gerbil-1"
                  class="rounded img-fluid"
                  onClick={this.showHide(1)}
                />
              </div>
              <div className="col-3">
                <img
                  src="https://assets.petco.com/petco/image/upload/f_auto,q_auto/gerbil-1"
                  class="rounded img-fluid"
                />
              </div>
              <div className="col-3">
                <img
                  src="https://assets.petco.com/petco/image/upload/f_auto,q_auto/gerbil-1"
                  class="rounded img-fluid"
                />
              </div>
            </div>
            <div className="row justify-content-center workRow2">
              <div className="col-3">
                <img
                  src="../img/arrow.svg"
                  class="workArrow w-25 mx-auto d-block"
                  id="expandedArrow"
                />
              </div>
              <div className="col-3">
                <img
                  src="../img/arrow.svg"
                  class="workArrow w-25 mx-auto d-block"
                />
              </div>
              <div className="col-3">
                <img
                  src="../img/arrow.svg"
                  class="workArrow w-25 mx-auto d-block"
                />
              </div>
            </div>
            <div className="row workRow3">
              <div className="col-12 workContent" id="expandedContent">
                <div className="interiorExpandedContent"></div>
              </div>
              <div className="col-0 workContent">
                <div className="interiorExpandedContent"></div>
              </div>
              <div className="col-0 workContent">
                <div className="interiorExpandedContent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Work
