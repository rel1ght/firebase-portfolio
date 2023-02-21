import React from "react"

import About from "../components/about"
import Experience from "../components/experience"
import Education from "../components/education"
import Skills from "../components/skills"
import Projects from "../components/projects/projects"
import Interests from "../components/interests"
import Awards from "../components/awards"

export const siteSectionsObj = {
  about: { title: "About", anchor: "about", component: <About /> },
  experience: {
    title: "Experience",
    anchor: "experience",
    component: <Experience />,
  },
  projects: { title: "Projects", anchor: "projects", component: <Projects /> },
  education: {
    title: "Education",
    anchor: "education",
    component: <Education />,
  },
  skills: { title: "Skills", anchor: "skills", component: <Skills /> },
  interests: {
    title: "Interests",
    anchor: "interests",
    component: <Interests />,
  },
  awards: { title: "Awards", anchor: "awards", component: <Awards /> },
}

export const siteSections = [
  siteSectionsObj.about,
  siteSectionsObj.experience,
  siteSectionsObj.projects,
  siteSectionsObj.education,
  siteSectionsObj.skills,
  siteSectionsObj.interests,
  siteSectionsObj.awards,
]
