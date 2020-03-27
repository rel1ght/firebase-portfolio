import React from "react"

import Header from "../components/header"
import Head from "../components/head"
import About from "../components/about"

export default () => (
  <>
    <Head />
    <Header />
    <div className="container-fluid p-0 flex-bg-primary">
      <About />
    </div>
  </>
)
