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
export default function FourOhFour() {
  useEffect(() => {
    firebaseSetup()
  }, [])
  return (
    <>
      <Head />
      <Navbar siteSections={siteSections} />
      <div className="container-fluid d-flex align-items-center p-0 flex-bg-primary position-relative min-height-100">
        <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
          <h1 classname="text-center d-block">
            <span className="orange">404</span>
          </h1>
          <h4 className="mt-2 text-center d-block">
            Sorry, couldn't find what you were looking for
          </h4>
        </div>
      </div>
    </>
  )
}
