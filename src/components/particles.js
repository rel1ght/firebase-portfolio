import React, { useCallback } from "react"
import ReactParticles from "react-particles"
import { loadFull } from "tsparticles"

export default function Particles() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine)
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container)
  }, [])

  return (
    <div className="pauto p-0 m-0 d-none d-lg-block position-absolute container-fluid h-100 particles-container">
      <ReactParticles
        loaded={particlesLoaded}
        init={particlesInit}
        canvasClassName="particlesCanvas"
        options={configObj}
        width="100%"
        height="100%"
      />
    </div>
  )
}

const configObj = {
  fullScreen: { enable: false, zIndex: 0 },
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 1260.3387160299326,
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
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 200,
      random: true,
      anim: {
        enable: true,
        speed: 10,
        size_min: 5,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 160,
      color: "#282a36",
      opacity: 1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.25,
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
  fpsLimit: 60,
  detectRetina: true,
  pauseOnOutsideViewport: true,
}
