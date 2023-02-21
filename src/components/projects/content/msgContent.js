import React, { useState } from "react"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"

function msgContent() {
  return (
    <>
      <div className="workContentWrapper justify-content-center">
        <div className="row">
          <h2 className="mb-1 text-primary mx-auto col-12 col-md-10">
            Mountain Sky Goldens
          </h2>
          <div className="mb-4 mx-auto col-12 col-md-10">
            <h6 className="green text-uppercase">
              A custom-built website for the cutest puppies around
            </h6>
          </div>
        </div>
        <div className="row">
          <div className="mx-auto mb-2 col-12 col-md-10 slider-contain">
            <AwesomeSlider className="mb-5">
              <div data-src="./img/msghomepage.jpg" />
              <div data-src="./img/msggallery.jpg" />
              <div data-src="./img/msginstagram.jpg" />
              <div data-src="./img/msgadopt.jpg" />
              <div data-src="./img/msgpayment.jpg" />
              <div data-src="./img/msgcolorlogo.jpg" />
            </AwesomeSlider>
          </div>
        </div>
        <div className="workContentBody mt-2 container">
          <div className="row">
            <div className="col">
              <a
                className="d-inline lead"
                target="_blank"
                href="https://mountainskygoldens.com"
                rel="noreferrer"
              >
                Mountainskygoldens.com
              </a>
              <p className="d-inline">
                {" "}
                was created in 2020 for a hobby breeder located in southern
                Idaho. They had their first litter of 8 puppies in the spring of
                2020, and all of the puppies had adoptions pending within the
                first month! Hopefully it'll be the first batch of many happy
                adoptions to come.
              </p>

              <p className="mt-2">
                Everything from the branding, logo, design, and code, was all
                created by me. I built the site on a{" "}
                <a
                  className="d-inline lead"
                  target="_blank"
                  href="https://jamstack.org/"
                  rel="noreferrer"
                >
                  J.A.M. (Javascript, APIs, and Markup)
                </a>{" "}
                stack. It represents a shift away from traditional CMS and
                hosting infrastructure, instead favoring lightweight, secure,
                and highly scalable applications. The site is packaged using
                Webpack, and styled using a customized version of Bootstrap.
                Everything is prerendered and blazing fast.
              </p>
              <p className="mt-2">
                The site is hosted on Github Pages. Github Pages provides a top
                notch CDN and built-in optimizations all for free. The only
                recurring cost that the client has to pay is for domain
                registration.
              </p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-12 col-lg-6">
              <p>
                Any logic that would normally be handled server-side, such as
                form submissions and payment, is instead processed by 3rd party
                A.P.I.s. At the client's traffic level, it incurs no extra cost,
                and it saves on hosting. It's also inherently scalable, so if
                traffic were to spike the A.P.I.s would be able to respond
                without intervention.
              </p>
              <p>
                The section I'm most proud of is the custom Instagram
                integration. It collects the six most recent posts of the
                client's account and displays them in a mobile-friendly and
                aesthically pleasing way.
              </p>
            </div>
            <div className="col-12 col-lg-6 justify-content-center">
              <img
                className="rounded img-fluid mx-auto d-flex"
                src="./img/msgapiexample.png"
              ></img>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <p>
                This project taught me a lot of new skills, and helped me hone
                some I already had. I was used to working in a full stack
                environment, where I have access to server-side processing to
                handle things like form submissions, payment, and automatic
                emailing. Trying to create a successful site that could
                accomplish all of that without a backend, all for free, was an
                interesting challenge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default msgContent
