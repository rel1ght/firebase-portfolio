import React from "react"
import { MdConstruction } from "react-icons/md"
import {
  FaGitAlt,
  FaGulp,
  FaSketch,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaNpm,
  FaJava,
  FaBootstrap,
  FaReact,
  FaWordpressSimple,
  FaInvision,
  FaMap,
  FaDraftingCompass,
} from "react-icons/fa"
import { RxFrame } from "react-icons/rx"
import { GiRabbit, GiBrainstorm, GiResize } from "react-icons/gi"
import { GrGatsbyjs, GrGraphQl, GrTest } from "react-icons/gr"
import { CgFigma } from "react-icons/cg"
import { RxNotionLogo } from "react-icons/rx"
import { IoLogoIonic, IoMdRocket } from "react-icons/io"
import {
  SiAdobexd,
  SiMaterialui,
  SiNextdotjs,
  SiProtodotio,
  SiRedux,
} from "react-icons/si"
import { AiFillApi, AiFillExperiment } from "react-icons/ai"
import {
  DiPerl,
  DiPhotoshop,
  DiIllustrator,
  DiGoogleCloudPlatform,
  DiTravis,
  DiFirebase,
  DiMongodb,
  DiScrum,
} from "react-icons/di"
import { BsPersonLinesFill } from "react-icons/bs"

export const categories = {
  design: "design",
  development: "development",
  personal: "personal",
}
export const tags = {
  tool: "tool",
  technique: "technique",
  knowledge: "knowledge",
  aquainted: "aquainted",
}

export const tagColors = {
  [tags.tool]: "info",
  [tags.technique]: "success",
  [tags.knowledge]: "warning",
  [tags.aquainted]: "light",
}
export const skillDict = {
  agile: {
    icon: <GiRabbit />,
    title: "Agile",
    description: "",
    category: categories.development,
    tags: [tags.technique],
  },
  ci: {
    icon: <IoMdRocket />,
    title: "Continuous Integration / Deployment",
    description: "",
    category: categories.development,
    tags: [tags.technique],
  },
  css: {
    icon: <FaCss3Alt />,
    title: "CSS",
    description: "",
    category: categories.development,
    tags: [tags.tool, tags.aquainted],
  },
  designThinking: {
    icon: <GiBrainstorm />,
    title: "Design thinking",
    description: "",
    category: categories.design,
    tags: [tags.technique],
  },
  figma: {
    icon: <CgFigma />,
    title: "Figma",
    description: "",
    category: categories.design,
    tags: [tags.tool],
  },
  gatsby: {
    icon: <GrGatsbyjs />,
    title: "Gatsby.js",
    description: "",
    category: categories.development,
    tags: [tags.tool],
  },
  git: {
    icon: <FaGitAlt />,
    title: "Git / Github",
    description: "",
    category: categories.development,
    tags: [tags.tool],
  },
  graphQL: {
    icon: <GrGraphQl />,
    title: "GraphQL",
    description: "",
    category: categories.development,
    tags: [tags.tool],
  },
  html: {
    icon: <FaHtml5 />,
    title: "HTML",
    description: "",
    category: categories.development,
    tags: [tags.tool],
  },
  illustrator: {
    icon: <DiIllustrator />,
    title: "Illustrator",
    description: "",
    category: categories.design,
    tags: [tags.tool],
  },
  inVision: {
    icon: <FaInvision />,
    title: "InVision",
    description: "",
    category: categories.design,
    tags: [tags.tool],
  },
  javaScript: {
    icon: <FaJsSquare />,
    title: "JavaScript",
    description: "",
    category: categories.development,
    tags: [tags.tool],
  },
  journeyMaps: {
    icon: <FaMap />,
    title: "Journey Maps",
    description: "",
    category: categories.design,
    tags: [tags.technique],
  },
  lucidChart: {
    icon: <MdConstruction />,
    title: "LucidChart",
    description: "",
    category: categories.design,
    tags: [tags.tool],
  },
  mockups: {
    icon: <FaDraftingCompass />,
    title: "Mockups",
    description: "",
    category: categories.design,
    tags: [tags.technique],
  },
  mongoDB: {
    icon: <DiMongodb />,
    title: "Mongo DB",
    description: "",
    category: categories.development,
    tags: [tags.tool],
  },
  mui: {
    icon: <SiMaterialui />,
    title: "Material UI",
    description: "",
    category: categories.development,
    tags: [tags.tool],
  },
  nextJS: {
    icon: <SiNextdotjs />,
    title: "NEXT.js",
    description: "",
    category: categories.development,
    tags: [tags.tool],
  },
  nodeJS: {
    icon: <FaNodeJs />,
    title: "Node.js",
    description: "",
    category: categories.development,
    tags: [tags.tool],
  },
  personas: {
    icon: <BsPersonLinesFill />,
    title: "Personas",
    description: "",
    category: categories.design,
    tags: [tags.technique],
  },
  photoshop: {
    icon: <DiPhotoshop />,
    title: "Photoshop",
    description: "",
    category: categories.design,
    tags: [tags.tool],
  },
  protoIO: {
    icon: <SiProtodotio />,
    title: "Proto.io",
    description: "",
    category: categories.design,
    tags: [tags.tool],
  },
  react: {
    icon: <FaReact />,
    title: "React",
    description: "",
    category: categories.development,
    tags: [tags.tool],
  },
  redux: {
    icon: <SiRedux />,
    title: "Redux",
    description: "",
    category: categories.development,
    tags: [tags.tool],
  },
  responsiveDesign: {
    icon: <GiResize />,
    title: "Responsive design",
    description: "",
    category: categories.development,
    tags: [tags.technique],
  },
  rest: {
    icon: <AiFillApi />,
    title: "REST APIs",
    description: "",
    category: categories.development,
    tags: [tags.technique],
  },
  scrum: {
    icon: <DiScrum />,
    title: "Scrum",
    description: "",
    category: categories.development,
    tags: [tags.technique],
  },
  userTesting: {
    icon: <AiFillExperiment />,
    title: "User testing",
    description: "",
    category: categories.design,
    tags: [tags.technique],
  },
  wireframing: {
    icon: <RxFrame />,
    title: "Wireframing",
    description: "",
    category: categories.design,
    tags: [tags.technique],
  },
  xd: {
    icon: <SiAdobexd />,
    title: "XD",
    description: "",
    category: categories.design,
    tags: [tags.tool],
  },
}
