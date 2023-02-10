import React from "react"

import Navbar from "../components/navBar"
import Head from "../components/head"
import About from "../components/about"
import Experience from "../components/experience"
import Education from "../components/education"
import Skills from "../components/skills"
import Work from "../components/work"
import Interests from "../components/interests"
import Awards from "../components/awards"

export default function Index() {
  return (
    <>
      <Head />
      <Navbar />
      <div className="container-fluid p-0 flex-bg-primary position-relative">
        <About id="About" />
        <hr className="m-0 seperator" />
        <Experience />
        <hr className="m-0 seperator" />
        <Work />
        <hr className="m-0 seperator" />
        <Education />
        <hr className="m-0 seperator" />
        <Skills />
        <hr className="m-0 seperator" />
        <Interests />
        <hr className="m-0 seperator" />
        <Awards />
      </div>
    </>
  )
}
