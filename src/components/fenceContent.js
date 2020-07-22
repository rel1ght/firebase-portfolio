import { Link } from "gatsby"
import React, { useState } from "react"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import { FaDownload } from "react-icons/fa"
import Ripples from "react-ripples"
function FenceContent() {
  return (
    <>
      <div className="workContentWrapper justify-content-center">
        <div className="row">
          <h2 className="mb-1 mx-auto col-12 col-md-10">Fence</h2>
          <div className="mb-4 mx-auto col-12 col-md-10">
            <h6 className="green text-uppercase">
              A tool to enhance the online artist experience
            </h6>
          </div>
        </div>
        <div className="row">
          <div className="mx-auto mb-2 col-12 col-md-10">
            <AwesomeSlider className="mb-5">
              <div data-src="./img/fencemockup2.jpg" />
              <div data-src="./img/fencemockup1.jpg" />
              <div data-src="./img/fenceportfolio.jpg" />
              <div data-src="./img/fencedashboard.jpg" />
              <div data-src="./img/fencebrand.jpg" />
              <div data-src="./img/fencefulllogo.jpg" />
            </AwesomeSlider>
          </div>
        </div>
        <div className="workContentBody mt-2 container">
          <div className="row">
            <div className="col">
              <span className="lead">Fence was created</span>
              <p className="d-inline">
                {" "}
                in late 2018 as a case study in web design. It set out to
                address the issues artists face when trying to sell their work
                online.
              </p>
              <h5 className="orange mt-3">The Premise:</h5>
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
                  Fence Case Study
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
export default FenceContent
