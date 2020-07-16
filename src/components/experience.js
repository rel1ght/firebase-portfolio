import React from "react"
import { Link } from "gatsby"

export default () => (
  <>
    <section
      className="resume-section p-3 p-lg-5 d-flex justify-content-center flex-bg-primary"
      id="experience"
    >
      <div className="w-100">
        <h2 className="mb-5 text-primary">Experience</h2>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0 orange">Office of Technology Student Worker</h3>
            <div className="subheading mb-3 green">
              College of Education at U.N.O.
            </div>
            <ul>
              <li>
                Lead a redesign of a custom operating system and deployment
                method for 200+ workstations
              </li>
              <li>
                Researched, engineered, and deployed 3 mobile VR Systems used to
                teach biomechanics in classrooms
              </li>
              <li>
                Designed web and print graphics for college wide communications
              </li>
              <li>
                Developed custom scripts to automate repetitive tasks and reduce
                human error
              </li>
              <li>
                Engineered and deployed servers used in highly connected
                operation critical enviornments
              </li>
            </ul>
          </div>
          <div className="resume-date text-md-right">
            <span className="blue">June 2018 - May 2020</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0 orange">Driver</h3>
            <div className="subheading mb-3 green">
              Jimmy John's Hodges Enterprises
            </div>
            <ul>
              <li>
                Optimized route efficiency and delivery times through delivery
                assignment and prioritization
              </li>
              <li>
                Responsible for cash transactions and money changing at delivery
                locations
              </li>
              <li>
                Completed transactions efficiently and safely in a fast-paced
                high-stress environment
              </li>
            </ul>
          </div>
          <div className="resume-date text-md-right">
            <span className="blue">June 2017 - December 2017</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0 orange">Supply Supervisor / IT Manager</h3>
            <div className="subheading mb-3 green">
              It's a Wonderful World Childcare
            </div>
            <ul>
              <li>
                Managed and delivered interdepartmental supplies for 4 locations
                while anticipating the needs of the centers and solving problems
                quickly as they arose to maintain efficiency and productivity
                for the business
              </li>
              <li>
                Demonstrated a working knowledge of technology through repairing
                and selecting equipment for the company
              </li>
              <li>
                Designed a new website to create a professional image, highlight
                strengths of the company, and better attract customers
              </li>
            </ul>
          </div>
          <div className="resume-date text-md-right">
            <span className="blue">May 2015 - August 2016</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0 orange">Cook</h3>
            <div className="subheading mb-3 green">Rockin’ Robbie’s</div>
            <ul>
              <li>
                Assisted management with inventory control, menu design, and
                advertisement creation to create a strong image for the brand
              </li>
              <li>
                Enhanced problem-solving abilities by repairing equipment
                quickly and efficiently during peak hours to maintain customer
                satisfaction
              </li>
              <li>
                Improved point-of-service (POS) computer system to maximize
                speed and usability in order to create more effective business
                operations
              </li>
            </ul>
          </div>
          <div className="resume-date text-md-right">
            <span className="blue">September 2014 - May 2015</span>
          </div>
        </div>
      </div>
    </section>
  </>
)
