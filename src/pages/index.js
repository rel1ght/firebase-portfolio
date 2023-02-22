import React, { useEffect } from "react"
// Styling
import "../styles/custom-bootstrap.scss"
import "react-tooltip/dist/react-tooltip.css"
import "animate.css"
// Components
import Navbar from "../components/navBar"
import Head from "../components/head"
import { siteSections } from "../config/siteSections"
import firebaseSetup from "../config/firebaseSetup"
export default function Index() {
  useEffect(() => {
    firebaseSetup()
  }, [])
  return (
    <>
      <Head />
      <Navbar siteSections={siteSections} />
      <div className="container-fluid p-0 flex-bg-primary position-relative">
        {siteSections.map((section, index) => (
          <div key={section.anchor}>
            {section.component}
            {/* don't show the hr on the last section */}
            {index !== siteSections.length - 1 && (
              <hr className="m-0 seperator" />
            )}
          </div>
        ))}
      </div>
    </>
  )
}
