import React, { useState } from "react"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import { FaDownload } from "react-icons/fa"
import Ripples from "react-ripples"
function DeepictContent() {
  return (
    <>
      <div className="workContentWrapper justify-content-center">
        <div className="row">
          <h2 className="mb-1 mx-auto col-12 col-md-10">Deepict</h2>
          <div className="mb-4 mx-auto col-12 col-md-10">
            <h6 className="green text-uppercase">
              A way to find new meaning in familiar photos
            </h6>
          </div>
        </div>
        <div className="row">
          <div className="mx-auto mb-2 col-12 col-md-10">
            <AwesomeSlider className="mb-5">
              <div data-src="./img/deepicttech.jpg" />
              <div data-src="./img/deepictpup1.jpg" />
              <div data-src="./img/deepictpup2.jpg" />
              <div data-src="./img/deepictpup3.jpg" />
              <div data-src="./img/deepictmockup.jpg" />
              <div data-src="./img/deepictlogo.jpg" />
            </AwesomeSlider>
          </div>
        </div>
        <div className="workContentBody mt-2 container">
          <div className="row">
            <div className="col">
              <span className="lead">Deepict was envisioned</span>
              <p className="d-inline">
                {" "}
                in 2019 as the capstone for my I.T. Innovation degree. I was
                tasked with first identifying an innovation to solve a problem,
                and then wrapping a business plan around it. After the idea and
                business were fleshed out, I developed a working prototype to
                illustrate the core functionality. The year-long capstone was
                split into two parts, with the ideation and business in the
                first half, and the development in the second. Before covering
                each half, here's the basic pitch:
              </p>
              <p className="lead p-3 p-md-5 text-primary">
                We put up pictures that mean something to us. They're captured
                memories, and we treat them like windows to the past. But as the
                pictures grow familiar the windows glaze over. Deepict is a way
                to keep pictures fresh and preserve meaning.
              </p>
              <h5 className="orange mt-3">Part 1</h5>
              <p>
                Online shops such as Redbubble and Society6 offer digital
                artists a fantastic opportunity to reach a wide audience and put
                their work on everything from pillows to stickers, without
                having to worry about logistics.
              </p>
              <p>
                Each time an item is purchased, the marketplace will handle the
                printing, shipping, and payment without the artist having to do
                anything. In return, the marketplace takes a percentage of the
                sale.
              </p>
              <h5 className="orange mt-3">The Problem:</h5>
              <div className="row">
                <div className="col-12 col-md-6">
                  <p>
                    The process for the artist isn't as easy as it first seems.
                    Creating a successful business often means setting up
                    multiple accounts tailored to different audiences, and
                    duplicating those accounts on multiple sites. Also, the
                    easiest part, posting artwork, ends up creating major
                    hurdles. With the low barrier to entry marketplaces get
                    saturated with art, and it's tough to stand out. If an
                    artist does manage to stand out, their work is quickly
                    copied and sometimes outright stolen by other online
                    artists, or even by{" "}
                    <a
                      target="_blank"
                      href="https://www.boredpanda.com/people-caught-copying-plagiarism-stealing-art-knockoffs/"
                    >
                      large companies.
                    </a>
                  </p>
                  <p>
                    Trying to manage so many different accounts and protect each
                    from copyright infringement can quickly become a full-time
                    job in its own right, and that leaves little time to
                    actually do what the artist loves: create.
                  </p>
                </div>
                <div className="col-12 col-md-6">
                  <img
                    className="img-fluid rounded"
                    src="./img/fencecopyrightviolation.jpg"
                  ></img>
                  <p className="text-subtitle small text-center mt-1">
                    Art from Katie Holmes. Image from boredpanda.com
                  </p>
                </div>
              </div>
              <h5 className="orange mt-3">The Solution:</h5>
              <p className="lead text-primary">
                Give the online artist one place where they can manage all of
                their accounts at once.
              </p>
              <p>
                Create a place where the artist can add art, write replies,
                analyze engagement, organize shops, and report copryright
                infringement, in multiple marketplaces, at the same time. Pair
                that with image recognition/content detection to catch copycats.
                The result is Fence.
              </p>
              <p>
                With the idea for Fence in mind I took the concept through the
                full design process. I created thumbnails, personas, wireframes,
                prototypes, a style guide, a logo, and eventually a polished
                mockup. Who knows, maybe someday I'll get around to coding it
                too! The full process is documented in the final report, which
                can be downloaded using the link below.
              </p>
            </div>
          </div>
          <div className="row mt-3 justify-content-center mb-4">
            <Ripples className="rounded">
              <a target="_blank" href="/img/Fence Case Study.pdf">
                <button className="btn btn-lg mx-auto btn-outline-dark blue">
                  Deepict Final Report
                  <FaDownload className="ml-1 pl-1" />
                </button>
              </a>
            </Ripples>
          </div>
        </div>
      </div>
    </>
  )
}
export default DeepictContent
