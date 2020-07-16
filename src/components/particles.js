import React from "react"

import Particles from "react-particles-js"
class particles extends React.Component {
  render() {
    return (
      <Particles
        params={{
          particles: {
            number: {
              value: 120,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#282a36",
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
              value: 20,
              random: true,
              anim: {
                enable: false,
                speed: 80,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 100,
              color: "#ffffff",
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "bounce",
              bounce: true,
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
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 800,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 300,
                size: 24,
                duration: 0.1,
                opacity: 0.8,
                speed: 6,
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
    )
  }
}
export default particles
