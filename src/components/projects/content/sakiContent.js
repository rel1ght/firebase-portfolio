import React from "react"
import { Tooltip } from "react-tooltip"
import { FaExternalLinkAlt, FaQuestionCircle } from "react-icons/fa"
import AwesomeSlider from "react-awesome-slider"

export default function SakiContent() {
  return (
    <div className="workContentWrapper justify-content-center">
      <div className="row">
        <h2 className="mb-1 mx-auto col-12 col-md-10">Omaha SAKI Dashboard</h2>
        <div className="mb-4 mx-auto col-12 col-md-10">
          <h6 className="green text-uppercase">
            A public information page to increase awareness and accountability
          </h6>
        </div>
      </div>
      <div className="workContentBody mt-2 container">
        <div className="row">
          <div className="col-12 my-2">
            <h4 className="orange text-center">
              See the full SAKI Dashboard at{" "}
              <a href="https://omaha-saki.htilabs.org">
                omaha-saki.htilabs.org <FaExternalLinkAlt className=" pl-1" />
              </a>
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="mx-auto mb-2 col-12 col-md-10 slider-contain">
            <AwesomeSlider className="mb-5">
              <div data-src="./img/saki-funnel.gif" />
              <div data-src="./img/saki-donut.gif" />
              <div data-src="./img/saki-bar.gif" />
              <div data-src="./img/saki-questions.gif" />
              <div data-src="./img/saki-numbers.png" />
              <div data-src="./img/saki-top.png" />
            </AwesomeSlider>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p>
              Thousands of sexual assault kits submitted to police have never
              been tested. They potentially contain D.N.A. of the perpetrator,
              which not only can help in individual cases, but can also be used
              to identify serial sexual assaulters. Despite that, due to time,
              resources, but most of all priorities, police departments across
              the country have let them pile up, often for years. The Sexual
              Assault Kit Initiative (SAKI), is a grant program to accelerate
              the testing of unsubmitted kits. Part of the grant requirements
              are to include an online public accountability dashboard, in order
              to document progress and link to resources for victims. HTI Labs
              agreed to set up and host the site for the City of Omaha, and the
              responsibility for creating it was assigned to me.
            </p>
            <p className="mt-3">
              Due to tight time constraints and other responsibilities, I only
              had hours to build it. I still wanted to do the project justice,
              so I decided to push myself and see what I could do in the time
              allotted. I focused on three goals:
            </p>
            <div className="p-3 p-md-5">
              <div className="mb-4">
                <h5 className="orange">
                  Goal 1: Present the provided information in a
                  quickly-scannable way.
                </h5>
                <p>
                  The primary audience of this subject matter has often
                  experienced it themselves, and it's common for the abuser to
                  live in the same home. Because of that, it's key to make
                  what's important fast to find - there could only be a short
                  time to do so unwatched. That's why I made sure to place two
                  items near the top: resources for survivors, and a quick exit
                  button.
                </p>
                <div className="row justify-content-around">
                  <div className="col-6 col-md-4">
                    <img
                      className="img-fluid rounded"
                      src="./img/saki-resources.jpg"
                    />
                    <p className="lead text-primary text-center">
                      Resources for Survivors
                    </p>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="row justify-content-center">
                      <div className="col-12 d-flex justify-content-center">
                        <img
                          className="img-fluid rounded"
                          src="./img/saki-quick-exit.jpg"
                        />
                      </div>
                      <div className="col-12">
                        <p
                          id="quickExitTooltip"
                          className="lead text-primary text-center"
                        >
                          Quick Exit
                          <div className="d-none d-lg-inline-block ml-2">
                            <Tooltip
                              positionStrategy="fixed"
                              anchorId="quickExitTooltip"
                              place="top"
                              offset={30}
                              className="tooltip"
                            >
                              I wasn't the one to think of this! It's a common
                              feature on sites dealing with domestic or sexual
                              assault
                            </Tooltip>
                            <div className="aquainted-button">
                              <FaQuestionCircle />
                            </div>
                          </div>
                        </p>
                        <p className="text-center text-secondary mt-n4">
                          <small>(opens weather search)</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <h5 className="orange">
                  Goal 2: Include password-protected content for commitee
                  members (A grant requirement)
                </h5>
                <div className="row justify-content-between">
                  <div className="col-12 col-md-6">
                    <p>
                      It was important for the authentication method to be truly
                      secure, because the information being protected was
                      sensitive and personal. That either meant a backend or an
                      api integration. Using a 3rd party api wasn't feasible due
                      to grant requirements, so I used NEXT.js to quickly set up
                      an authentication route. The default styling is admittedly
                      ugly, but it works! There were higher priorities than
                      sprucing up the login page.
                    </p>
                  </div>
                  <div className="col-12 col-md-5 d-flex justify-content-center">
                    <img
                      className="img-fluid rounded"
                      src="./img/saki-auth.jpg"
                    />
                  </div>
                </div>
                <div className="row justify-content-center"></div>
              </div>
              <div className="mb-4">
                <h5 className="orange">
                  Goal 3: Turn the spreadsheets representing the project's
                  progress into intuitive, quickly-updatable graphs
                </h5>
                <p className="mt-n2">
                  This was by far the most enjoyable part to make. Using an
                  interactive data-vis library, I created graphs to illustrate
                  the project's progress. I spent a large chunk of the overall
                  time ensuring that they'd be easy for others to update, to
                  help ensure that the information would be updated. All it
                  takes is a drag-and-drop of the fresh data files. The site
                  handles reading, interpreting, and displaying new information
                  automatically.
                </p>
                <div className="row justify-content-around">
                  <div className="col-12 col-md-5">
                    <img
                      className="img-fluid rounded"
                      src="./img/saki-funnel.jpg"
                    />
                  </div>
                  <div className="col-12 col-md-5">
                    <img
                      className="img-fluid rounded"
                      src="./img/saki-donut.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-3">
              The most rewarding part of this project was watching the funnel
              grow wider over time. It meant that kits, some of which had been
              sitting for nearly a decade, were finally being processed. One
              thing that the data has shown is that of the kits with usable
              D.N.A. <strong>50% match existing records</strong>. That means
              that serial offenders are being identified, and hopefully it means
              they can held accountable. Better late than never.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
