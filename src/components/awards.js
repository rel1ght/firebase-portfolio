import React from "react"
import { Link } from "gatsby"
import { FaTrophy } from "react-icons/fa"
export default function Awards() {
  return (
    <>
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5 text-primary">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0 list-unstyled">
            <li>
              <div className="d-inline-flex align-items-top my-2">
                <FaTrophy className="text-warning trophy mt-1 mr-2"></FaTrophy>
                IRB Certification
              </div>
            </li>
            <li>
              <div className="d-inline-flex align-items-top my-2">
                <FaTrophy className="text-warning trophy mt-1 mr-2"></FaTrophy>
                Dean's List Fall 2014 - Fall 2016, Spring 2020
              </div>
            </li>
            <li>
              <div className="d-inline-flex align-items-top my-2">
                <FaTrophy className="text-warning trophy mt-1 mr-2"></FaTrophy>
                Eagle Scout Award Recipient
              </div>
            </li>
            <li>
              <div className="d-inline-flex align-items-top my-2">
                <FaTrophy className="text-warning trophy mt-1 mr-2"></FaTrophy>2
                Scholastic State Gold Keys for Excellence in the Visual Arts
              </div>
            </li>
            <li>
              <div className="d-inline-flex align-items-top my-2">
                <FaTrophy className="text-warning trophy mt-1 mr-2"></FaTrophy>2
                Scholastic State Silver Keys for Excellence in the Visual Arts
              </div>
            </li>
            <li>
              <div className="d-inline-flex align-items-top my-2">
                <FaTrophy className="text-warning trophy mr-2 mt-1"></FaTrophy>1
                Scolastic National Gold Medal for Excellence in the Visual Arts
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
