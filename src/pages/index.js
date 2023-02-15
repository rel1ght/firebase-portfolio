import React from "react"
// Styling
import "../styles/custom-bootstrap.scss"
import "react-tooltip/dist/react-tooltip.css"
import "animate.css"
// Components
import Navbar from "../components/navBar"
import Head from "../components/head"
import About from "../components/about"
import Experience from "../components/experience"
import Education from "../components/education"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Interests from "../components/interests"
import Awards from "../components/awards"

const siteSections = [
  { title: "About", anchor: "about", component: <About /> },
  { title: "Experience", anchor: "experience", component: <Experience /> },
  { title: "Projects", anchor: "projects", component: <Projects /> },
  { title: "Education", anchor: "education", component: <Education /> },
  { title: "Skills", anchor: "skills", component: <Skills /> },
  { title: "Interests", anchor: "interests", component: <Interests /> },
  { title: "Awards", anchor: "awards", component: <Awards /> },
]

export default function Index() {
  return (
    <>
      <Head />
      <Navbar siteSections={siteSections} />
      <div className="container-fluid p-0 flex-bg-primary position-relative">
        {siteSections.map((section, index) => (
          <div key={section.anchor} id={section.anchor}>
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
