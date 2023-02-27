import React from "react"
import Helmet from "react-helmet"
import favicon from "../../static/favicon.ico"

export default function Head(props) {
  return (
    <Helmet>
      <title>Tyler Manion</title>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content="It's like a resume, but nerdier!" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://tylermanion.xyz/" />
      <meta property="og:title" content="Tyler Manion's Portfolio Site" />
      <meta
        property="og:description"
        content="It's like a resume, but nerdier!"
      />
      <meta
        property="og:image"
        content="https://tylermanion.xyz/img/faviconv1.png"
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="tylermanion.xyz" />
      <meta property="twitter:title" content="Tyler Manion's Portfolio Site" />
      <meta
        property="twitter:description"
        content="It's like a resume, but nerdier!"
      />
      <meta
        property="twitter:image"
        content="https://tylermanion.xyz/img/faviconv1.png"
      />
      <meta name="author" content="Tyler Manion" />
      <link rel="icon" href={favicon} />
      <link
        href="https://fonts.googleapis.com/css?family=Rambla&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Noto+Sans+HK&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Neuton&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i"
        rel="stylesheet"
      />
    </Helmet>
  )
}
