import "./node_modules/bootstrap/dist/css/bootstrap.css"
import "./src/styles/resume.css"
import "popper.js"
import $ from "jquery"
import "bootstrap"

let SmoothScroll = require("smooth-scroll")
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  var scroll = new SmoothScroll('a[href*="#"]', {
    easing: "easeInOutQuint",
  })
}
;(function() {
  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function() {
    $(".navbar-collapse").collapse("hide")
  })
})() // End of use strict
