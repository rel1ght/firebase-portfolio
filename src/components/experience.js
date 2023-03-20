import React from "react"
import { Link } from "gatsby"

const collegeOfEdExperience = {
  startDate: "June 2018",
  endDate: "May 2020",
  positionName: "Office of Technology Student Worker",
  employerName: "College of Education at U.N.O.",
  bulletPoints: [
    "Led a redesign of a custom operating system and deployment methods for hundreds of workstations",
    "Researched experimental applications of virtual reality used in learning environments",
    "Designed web and print graphics for college-wide communications",
    "Wrote programs to automate repetitive tasks and reduce human error",
    "Engineered and deployed servers used in highly connected operation critical environments",
  ],
}

const htiLabsExperience = {
  startDate: "September 2020",
  endDate: "January 2023",
  positionName: "UX Designer / Frontend Developer",
  employerName: "HTI Labs",
  bulletPoints: [
    "Steered all stages of the iterative design process across multiple projects, adhering to client needs, code restraints, and design principles",
    "Created wireframes, storyboards, and prototypes to structure effective user experience",
    "Refined UI component library  and style guide to better match the company brand identity and overall usability",
    "Demonstrated design and code work to external clients and partners, incorporating feedback into product",
    "Functioned as part of a multi-disciplinary team which blended self-managed autonomy with team coordination",
    "Communicated coding logic and design decisions during daily stand-ups to ensure understanding and buy-in",
    "Architected the frontend of a product that scaled from proof-of-concept to fully-fledged platform",
    "Managed code cleanliness and promoted best practices through PR reviews, testing, and extensive documentation",
    "Squashed bugs and solved issues with creativity and perseverance while adhering to an aggressive timeline",
  ],
}
export default function Experience() {
  return (
    <>
      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center flex-bg-primary">
        <div id="experience" className="w-100">
          <h2 className="mb-5 text-primary">Experience</h2>
          <ExperienceItem {...htiLabsExperience} />
          <ExperienceItem {...collegeOfEdExperience} />
        </div>
      </section>
    </>
  )
}

function ExperienceItem({
  startDate,
  endDate,
  positionName,
  employerName,
  bulletPoints = [],
}) {
  return (
    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="w-100">
        <div className="d-flex justify-content-between flex-column-reverse flex-xl-row align-items-xl-center">
          <h3 className="mb-0 mt-1 orange" style={{ flex: "1 0 auto" }}>
            {positionName}
          </h3>
          <div className="resume-date " style={{ flexShrink: 1 }}>
            <span className="blue">
              {startDate} - {endDate}
            </span>
          </div>
        </div>
        <div className="subheading mb-3 green">{employerName}</div>
        <ul>
          {bulletPoints.map((bulletPoint) => (
            <li className="pb-3" key={JSON.stringify(bulletPoint)}>
              {bulletPoint}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
