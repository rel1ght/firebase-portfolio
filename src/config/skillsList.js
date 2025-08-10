import React from "react"
import {
  MdAutoFixHigh,
  MdConstruction,
  MdGroups,
  MdWorkspaces,
} from "react-icons/md"
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
  FaInvision,
  FaMap,
  FaDraftingCompass,
  FaLightbulb,
  FaAws,
  FaSass,
  FaBuilding,
} from "react-icons/fa"

import { RxFrame } from "react-icons/rx"
import { GiRabbit, GiBrainstorm, GiResize } from "react-icons/gi"
import { GrGatsbyjs, GrGraphQl } from "react-icons/gr"
import { CgFigma, CgPerformance } from "react-icons/cg"
import { IoMdRocket } from "react-icons/io"
import {
  SiAdobeindesign,
  SiAdobepremierepro,
  SiAdobexd,
  SiCypress,
  SiExpress,
  SiFirebase,
  SiIonic,
  SiJest,
  SiMui,
  SiNextdotjs,
  SiProtodotio,
  SiRedux,
  SiServerless,
  SiTypescript,
} from "react-icons/si"
import {
  AiFillApi,
  AiFillExperiment,
  AiFillGold,
  AiFillMessage,
} from "react-icons/ai"
import {
  DiPerl,
  DiPhotoshop,
  DiIllustrator,
  DiGoogleCloudPlatform,
  DiTravis,
  DiFirebase,
  DiMongodb,
  DiScrum,
  DiJava,
  DiTerminal,
  DiPython,
  DiWordpress,
} from "react-icons/di"
import {
  BsDoorOpenFill,
  BsFillPatchQuestionFill,
  BsPersonLinesFill,
} from "react-icons/bs"
import { RiFlowChart, RiFontSize2, RiMindMap } from "react-icons/ri"

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
    tags: [tags.tool],
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
    title: "Journey mapping",
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
    icon: <SiMui />,
    title: "Material UI",
    description: "",
    category: categories.development,
    tags: [tags.tool],
  },
  npm: {
    icon: <FaNpm />,
    title: "npm",
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
    title: "API integration",
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
  // perl
  perl: {
    icon: <DiPerl />,
    title: "Perl",
    description: "",
    category: categories.development,
    tags: [tags.tool, tags.aquainted],
  },
  // gcp
  gcp: {
    icon: <DiGoogleCloudPlatform />,
    title: "GCP",
    description: "",
    category: categories.development,
    tags: [tags.tool, tags.aquainted],
  },
  // travisCI
  travisCI: {
    icon: <DiTravis />,
    title: "TravisCI",
    description: "",
    category: categories.development,
    tags: [tags.tool, tags.aquainted],
  },
  // Firebase
  firebase: {
    icon: <SiFirebase />,
    title: "Firebase",
    description: "",
    category: categories.development,
    tags: [tags.tool, tags.aquainted],
  },
  // Ionic
  ionic: {
    icon: <SiIonic />,
    title: "Ionic",
    description: "",
    category: categories.development,
    tags: [tags.tool, tags.aquainted],
  },
  // React-native
  reactNative: {
    icon: <FaReact />,
    title: "React Native",
    description: "",
    category: categories.development,
    tags: [tags.tool, tags.aquainted],
  },
  // Java
  java: {
    icon: <DiJava />,
    title: "Java",
    description: "",
    category: categories.development,
    tags: [tags.tool, tags.aquainted],
  },
  // C
  c: {
    icon: <DiTerminal />,
    title: "C",
    description: "",
    category: categories.development,
    tags: [tags.tool, tags.aquainted],
  },
  // Python
  python: {
    icon: <DiPython />,
    title: "Python",
    description: "",
    category: categories.development,
    tags: [tags.tool, tags.aquainted],
  },
  // Sketch
  sketch: {
    icon: <FaSketch />,
    title: "Sketch",
    description: "",
    category: categories.design,
    tags: [tags.tool, tags.aquainted],
  },
  // Bootstrap
  bootstrap: {
    icon: <FaBootstrap />,
    title: "Bootstrap",
    description: "",
    category: categories.development,
    tags: [tags.tool, tags.aquainted],
  },
  // Wordpress
  wordpress: {
    icon: <DiWordpress />,
    title: "Wordpress",
    description: "",
    category: categories.development,
    tags: [tags.tool, tags.aquainted],
  },
  // Express
  express: {
    icon: <SiExpress />,
    title: "Express",
    description: "",
    category: categories.development,
    tags: [tags.tool, tags.aquainted],
  },
  // Jest
  jest: {
    icon: <SiJest />,
    title: "Jest",
    description: "",
    category: categories.development,
    tags: [tags.tool, tags.aquainted],
  },
  // Typescript
  typescript: {
    icon: <SiTypescript />,
    title: "Typescript",
    description: "",
    category: categories.development,
    tags: [tags.tool, tags.aquainted],
  },
  // Interactive prototyping
  interactivePrototyping: {
    icon: <RiFlowChart />,
    title: "Interactive prototyping",
    description: "",
    category: categories.design,
    tags: [tags.technique],
  },
  // Scamper
  scamper: {
    icon: <FaLightbulb />,
    title: "SCAMPER",
    description: "",
    category: categories.design,
    tags: [tags.technique],
  },
  // Mind mapping
  mindMapping: {
    icon: <RiMindMap />,
    title: "Mind mapping",
    description: "",
    category: categories.design,
    tags: [tags.technique],
  },
  // Norman's principles of design
  normanDesign: {
    icon: <BsDoorOpenFill />,
    title: "Norman's principles of design",
    description: "",
    category: categories.design,
    tags: [tags.knowledge],
  },
  // Gestalt principles
  gestaltPrinciples: {
    icon: <MdWorkspaces />,
    title: "Principles of gestalt",
    description: "",
    category: categories.design,
    tags: [tags.knowledge],
  },
  // Shneiderman's golden rules
  shneidermanRules: {
    icon: <AiFillGold />,
    title: "Shneiderman's 8 golden rules",
    description: "",
    category: categories.design,
    tags: [tags.knowledge],
  },
  // sockets
  sockets: {
    icon: <AiFillApi />,
    title: "Sockets",
    description: "",
    category: categories.development,
    tags: [tags.technique, tags.aquainted],
  },
  serverless: {
    icon: <SiServerless />,
    title: "Serverless architecture",
    description: "",
    category: categories.development,
    tags: [tags.technique, tags.aquainted],
  },
  architecture: {
    icon: <FaBuilding />,
    title: "Scalable architecture",
    description: "",
    category: categories.development,
    tags: [tags.knowledge],
  },
  bigO: {
    icon: <CgPerformance />,
    title: "Big O performance",
    description: "",
    category: categories.development,
    tags: [tags.knowledge],
  },
  // aws
  aws: {
    icon: <FaAws />,
    title: "AWS",
    description: "",
    category: categories.development,
    tags: [tags.tool, tags.aquainted],
  },
  // cypress
  cypress: {
    icon: <SiCypress />,
    title: "Cypress",
    description: "",
    category: categories.development,
    tags: [tags.tool, tags.aquainted],
  },
  // typography
  typography: {
    icon: <RiFontSize2 />,
    title: "Typographic design",
    description: "",
    category: categories.design,
    tags: [tags.knowledge],
  },
  // mockplus
  mockplus: {
    icon: <RxFrame />,
    title: "Mockplus",
    description: "",
    category: categories.design,
    tags: [tags.tool, tags.aquainted],
  },
  // premiere
  premiere: {
    icon: <SiAdobepremierepro />,
    title: "Premiere",
    description: "",
    category: categories.design,
    tags: [tags.tool, tags.aquainted],
  },
  // inDesign
  inDesign: {
    icon: <SiAdobeindesign />,
    title: "inDesign",
    description: "",
    category: categories.design,
    tags: [tags.tool, tags.aquainted],
  },
  // sass
  sass: {
    icon: <FaSass />,
    title: "Sass",
    description: "",
    category: categories.development,
    tags: [tags.tool, tags.aquainted],
  },
  creativity: {
    icon: <FaLightbulb />,
    title: "Creativity",
    description: "",
    category: categories.personal,
    tags: [tags.technique],
  },
  problemSolving: {
    icon: <MdAutoFixHigh />,
    title: "Problem Solving",
    description: "",
    category: categories.personal,
    tags: [tags.technique],
  },
  communication: {
    icon: <AiFillMessage />,
    title: "Communication",
    description: "",
    category: categories.personal,
    tags: [tags.tool],
  },
  teamwork: {
    icon: <MdGroups />,
    title: "Teamwork",
    description: "",
    category: categories.personal,
    tags: [tags.tool],
  },
  curiousity: {
    icon: <BsFillPatchQuestionFill />,
    title: "Curiosity",
    description: "",
    category: categories.personal,
    tags: [tags.tool],
  },
}
