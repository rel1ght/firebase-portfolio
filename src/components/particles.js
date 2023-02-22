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

const particleConfig = {
  size: {
    value: { max: 220, min: 20 },
    // random: true,
    animation: {
      enable: true,
      speed: 3,
      sync: false,
    },
    // anim: {
    //   enable: true,
    //   speed: 10,
    //   size_min: 5,
    //   sync: false,
    // },
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
}

function sideParticle(x, y, size = 100) {
  return {
    options: {
      move: {
        enable: true,
        speed: 0.01,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "bounce",
        bounce: true,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
      size: {
        value: { min: 80, max: size + 40 },
        // random: false,
        animation: {
          enable: true,
          speed: 5,
          startValue: size,
          sync: false,
        },
      },
    },
    position: { x, y },
  }
}

function randomParticles(amount) {
  const randomParticlesArray = []
  for (let i = 0; i < amount; i++) {
    randomParticlesArray.push({ options: particleConfig })
  }
  return randomParticlesArray
}

const configObj = {
  fullScreen: { enable: false, zIndex: 0 },
  reduceDuplicates: true,
  particles: {
    number: {
      value: 0,
      // density: {
      //   enable: true,
      //   height: 1920,
      //   width: 1080,
      // },
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
  zLayers: 10,
  manualParticles: [
    sideParticle(-40, -100, 20),
    sideParticle(-20, -60, 120),
    sideParticle(-5, -5),
    sideParticle(-15, 0),
    sideParticle(-50, 11, 80),
    sideParticle(-70, 35, 100),
    sideParticle(-8, 45, 80),
    sideParticle(-10, 55),
    sideParticle(-10, 70, 60),
    sideParticle(-30, 80, 65),
    sideParticle(-50, 90, 110),
    sideParticle(-45, 100, 150),
    ...randomParticles(70),
  ],
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "none",
        parallax: { enable: true, force: 10000, smooth: 2 },
      },
      onclick: {
        enable: false,
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
      connect: { distance: 200, radius: 200 },

      bounce: {
        distance: 200,
      },
      bubble: {
        distance: 100,
        // size: 30,
        duration: 9,
        opacity: 0.01,
        // speed: 0.0001,
      },
      repulse: {
        distance: 100,
        duration: 1,
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
