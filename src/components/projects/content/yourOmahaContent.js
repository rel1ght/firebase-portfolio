import React, { useState } from "react"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import { FaDownload } from "react-icons/fa"
import Ripples from "react-ripples"
function YourOmahaContent() {
  return (
    <>
      <div className="workContentWrapper justify-content-center">
        <div className="row">
          <h2 className="mb-1 mx-auto col-12 col-md-10">Your Omaha</h2>
          <div className="mb-4 mx-auto col-12 col-md-10">
            <h6 className="green text-uppercase">
              A medium for citizen engagement and ownership of local communities
            </h6>
          </div>
        </div>
        <div className="row">
          <div className="mx-auto mb-2 col-12 col-md-10 slider-contain">
            <AwesomeSlider className="mb-5">
              <div data-src="./img/youromaha1.jpg" />
              <div data-src="./img/youromaha2.jpg" />
              <div data-src="./img/youromaha3.jpg" />
              <div data-src="./img/youromaha4.jpg" />
              <div data-src="./img/youromaha5.jpg" />
              <div data-src="./img/youromaha6.jpg" />
            </AwesomeSlider>
          </div>
        </div>
        <div className="workContentBody mt-2 container">
          <div className="row">
            <div className="col">
              <p className="d-inline">
                The Your Omaha App was designed in 2019 as a case study in UX
                design. It was created by me and 3 other individuals as we
                worked to address issues in our local community.
              </p>
              <h5 className="orange mt-3">The Premise:</h5>
              <p>
                Our team, along with six others, were tasked with designing a
                way to improve Omaha through the use of technology, as part of a
                "Smart City" Initiative. As our team listened to city officials
                describe the parameters of the project, we came to the
                collective realization that none of us knew much, if anything,
                about our local government. The city officials talked about how
                important citizen involvement and feedback was in legislative
                change.
              </p>
              <p>
                We decided that a smart city started with a connected community.
              </p>
              <h5 className="orange mt-3">The Problem:</h5>

              <p>
                There’s a disconnect that is long-standing and widely felt. Some
                of that comes from skepticism in the efficiency of government,
                and some of it comes from a lack of transparency into what
                actually occurs. In this case ignorance isn’t bliss, it’s bias.
                Many assume that participation would be inconvenient and
                ineffective, so they don’t try. This causes a lack of interest
                and involvement that is directly detrimental to those who need
                representation in their local government the most.
              </p>

              <h5 className="orange mt-3">The Solution:</h5>
              <p className="text-primary m-4">
                <span className="lead">Create an app that:</span>
                <ol className="mt-2">
                  <li>
                    Makes it easy to get in contact with representatives to
                    share one’s voice
                  </li>
                  <li>
                    Shows information about local elected officials to encourage
                    informed voting
                  </li>
                  <li>
                    Fosters community engagement through the publication of
                    events and organizations
                  </li>
                </ol>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <p>
                We set to work by first testing whether our base assumptions
                were accurate. We asked interviewees questions on their
                knowledge of local representatives, participation in local
                government, participation in communities, and their perspectives
                on local government as a whole. We found that citizen engagement
                is low, for the same reasons we experienced ourselves. From our
                inquiry we created 3 personas that informed our designs and
                decision making going forward.
              </p>
              <p>
                From there we created rough sketches test out various layouts,
                and after some iteration and user feedback, we ended up with a
                moderately complete mockup made (by me) in Adobe Xd.
              </p>
              <p>
                We wanted to make the chat function the primary focus, from the
                very start. There's a big bold chat button right on the
                homepage, with a second link to chat in the top menu bar. The
                chat is meant to direct people to who can help them with their
                inquiry, or to answer simple questions. It's like a mix between
                Amazon's chatbot and the mayor's hotline. Also on the homepage
                is the councilperson for the individual's district, with a
                description and contact information.
              </p>
              <p>
                Next is a list of other elected officials, a list of upcoming
                events (not pictured), and a survey section.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <img
                className="img-fluid rounded"
                src="./img/youromaha1.png"
              ></img>
              <p className="text-subtitle small text-center mt-1">
                Home screen / Chatbot
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <p>
                Each section on the homepage is linked to a dedicated page. The
                events page is the expanded version of the upcoming events
                section on the homepage. From it a citizen can sort events, see
                information about them, and expand events to watch a livestream
                if applicable.
              </p>
              <p>
                The homepage also offers a survey section that is simple and
                unintimidating, to encourage participation. Under that is an
                organizations section, which expands into a full list.
              </p>
              <p>
                A poster-style infograph for the whole project can be seen using
                the link below!
              </p>
            </div>
            <div className="col-12 col-md-6">
              <img
                className="img-fluid rounded"
                src="./img/youromaha2.png"
              ></img>
              <p className="text-subtitle small text-center mt-1">
                Events Page/ Home Screen Continued
              </p>
            </div>
          </div>
          <div className="row mt-3 justify-content-center mb-4">
            <Ripples className="rounded">
              <a target="_blank" href="/img/Your Omaha.pdf">
                <button className="btn btn-lg mx-auto btn-outline-dark blue">
                  Your Omaha Poster
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
export default YourOmahaContent
