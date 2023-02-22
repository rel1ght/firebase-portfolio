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
              <div data-src="./img/msg-gallery.gif" />
              <div data-src="./img/msg-quotes.jpg" />
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
                Idaho. I was hired to build and maintain the site, branding, ad
                campaign, and CMS integration.
              </p>
              <p className="mt-2">
                I worked with the client to figure out what their needs were. It
                was important that they had the ability to update the site as
                new litters arrived, so a user-friendly way to do so was a must.
              </p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-12">
              <p>
                To do so, I used Gatsby JS for the frontend, Contentful CMS for
                the database, and GraphQL to connect the two. Through Contentful
                I set up a relational database to make things easy to display,
                and easy to add to by the owners. It was important to make
                updating the site not feel scary or overwhelming, so I created
                custom forms for editing everything from puppies to pages, that
                included constraints and descriptions for every field. With that
                and a modular drag-and-drop interface, plus a way to preview
                changes before making them public, the site owner was confident
                enough to make changes whenever they wanted.
              </p>
            </div>
            <div className="col-12 row justify-content-around">
              <div className="col-12 col-md-6 col-lg-4">
                <p className="lead text-primary text-center">Contentful</p>
                <img
                  className="img-fluid rounded mt-n2"
                  src="./img/msg-contentful-website-contentful.png"
                />
              </div>
              <div className="col-12 col-md-6 cold-lg-8">
                <p className="lead text-primary text-center">Website</p>
                <img
                  className="img-fluid rounded mt-n2"
                  src="./img/msg-contentful-website-site.png"
                />
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <p>
                The owners have since successfully sold multiple litters, and
                are incredibly happy with their website. They also mentioned
                that they've gotten compliments on how nice the site looks and
                feels, which is great to hear!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default msgContent
