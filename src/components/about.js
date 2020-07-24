import React from "react"
import { Link } from "gatsby"
import { FaLinkedinIn, FaGithub, FaFileAlt } from "react-icons/fa"

import Particles from "react-particles-js"
class About extends React.Component {
  componentDidMount() {
    var elements = document.getElementsByClassName("typewrite")

    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type")
      var period = elements[i].getAttribute("data-period")
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period)
      }
    }
  }
  render() {
    return (
      <>
        <div
          className="pauto p-0 vh-100 d-none d-lg-block position-absolute container-fluid"
          style={{ zIndex: 1 }}
        >
          <Particles
            className="vh-100"
            width="100%"
            height="100%"
            params={{
              particles: {
                number: {
                  value: 80,
                  density: {
                    enable: true,
                    value_area: 1260.3387160299326,
                  },
                },
                color: {
                  value: "#ffffff",
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#000000",
                  },
                  polygon: {
                    nb_sides: 5,
                  },
                  image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100,
                  },
                },
                opacity: {
                  value: 0.5,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                  },
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                  },
                },
                line_linked: {
                  enable: true,
                  distance: 160,
                  color: "#ffffff",
                  opacity: 0.4,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 2,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "bounce",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                  onclick: {
                    enable: true,
                    mode: "push",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1,
                    },
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                  },
                  repulse: {
                    distance: 100,
                    duration: 0.4,
                  },
                  push: {
                    particles_nb: 4,
                  },
                  remove: {
                    particles_nb: 2,
                  },
                },
              },
              retina_detect: true,
            }}
          />
        </div>
        <section
          className="pnone resume-section p-3 p-lg-5  align-items-center"
          id="about"
        >
          <div
            className="w-100 position-relative"
            style={{ zIndex: 3 }}
            id="aboutbody"
          >
            <div className="d-none d-lg-block " id="emptydiv"></div>
            <h2 className="pauto mb-0 pb-0 green display-4" id="hi">
              Hi,
            </h2>
            <div id="extraspace">
              <h2 className="pauto mb-2 d-inline">My name is</h2>
              <h2 className="pauto mb-2 d-inline text-primary display-3">
                &nbsp;Tyler Manion
              </h2>
              <div>
                <h2 className="pauto mb-2 d-inline">and I'm </h2>
                <h2
                  className="pauto typewrite d-inline orange"
                  data-period="2000"
                  data-type='[ "a Developer.", "a Designer.", "an Artist.", "a Maker.", "an Eagle Scout", "an I.T. Innovation Grad", "from Omaha.", "24 years old.", "looking for a job." ]'
                >
                  <span className="pauto wrap"></span>
                </h2>
              </div>
            </div>
            <div className="d-block d-md-none" id="mobileonlyextraspace"></div>
            <br />
            <div className="pauto subheading mb-5 ml-1">
              <a href="tel:402-612-3862">(402) 612-3862</a>
              <span className="d-md-none">
                <br />
              </span>
              <span className="d-none d-md-inline">&nbsp;·&nbsp;</span>
              <a
                className="pauto text-lowercase"
                href="mailto:contact@tylermanion.xyz"
              >
                contact@tylermanion.xyz
              </a>
            </div>
            <p className="pauto lead mb-5 ">
              I’m a lot of things, including reachable! I love hearing from new
              people. Feel free to send me a message if you have a question,
              comment, or just want to chat!
            </p>
            <div className="social-icons">
              <div className="d-inline-flex flex-column mr-4">
                <a
                  className="pauto mx-auto"
                  target="_blank"
                  href="https://www.linkedin.com/in/tyler-manion-98690513a/"
                >
                  <FaLinkedinIn></FaLinkedinIn>
                </a>
                <p className="text-subtitle small text-center mt-1">LinkedIn</p>
              </div>
              <div className="d-inline-flex flex-column mr-4">
                <a
                  className="pauto mx-auto"
                  target="_blank"
                  href="https://github.com/rel1ght"
                >
                  <FaGithub></FaGithub>
                </a>
                <p className="text-subtitle small text-center mt-1">GitHub</p>
              </div>
              <div className="d-inline-flex flex-column mr-0">
                <a
                  className="pauto mx-auto"
                  target="_blank"
                  href="/img/resume.pdf"
                >
                  <FaFileAlt className="p-0"></FaFileAlt>
                </a>
                <p className="text-subtitle small text-center mt-1">Resume</p>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default About
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate
  this.el = el
  this.loopNum = 0
  this.period = parseInt(period, 10) || 2000
  this.txt = ""
  this.tick()
  this.isDeleting = false
}

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length
  var fullTxt = this.toRotate[i]

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1)
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1)
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>"

  var that = this
  var delta = 200 - Math.random() * 100

  if (this.isDeleting) {
    delta /= 2
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period * 2
    this.isDeleting = true
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false
    this.loopNum++
    delta = 500
  }

  setTimeout(function() {
    that.tick()
  }, delta)
}

// window.onload = function() {
//   var elements = document.getElementsByClassName("typewrite")
//   for (var i = 0; i < elements.length; i++) {
//     var toRotate = elements[i].getAttribute("data-type")
//     var period = elements[i].getAttribute("data-period")
//     if (toRotate) {
//       new TxtType(elements[i], JSON.parse(toRotate), period)
//     }
//   }
// particlesJS("particles-js", "./particles.json", function() {
//   console.log("callback - particles.js config loaded")
// })
//}
