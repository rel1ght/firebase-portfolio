import React from "react"
import { Link } from "gatsby"

export default function Interests() {
  return (
    <>
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5 text-primary">Interests</h2>
          <ArtInterest />
          <br />
          <GenArtInterest />
        </div>
      </section>
    </>
  )
}

function ArtInterest() {
  return (
    <>
      <img
        src="img/9.JPG"
        className="img-fluid rounded mb-4 w-75 mx-auto d-block"
        alt="Responsive image"
      />
      <p>
        I love creating. Drawing, painting, sculpting, building, coding. All
        tools I use to scratch an itch in my brain that makes me want to make
        something. I always carry a sketchpad with me that houses ideas and
        doodles side-by-side. At home I have a treasure trove of art supplies
        built up over years of accumulation. I rummage through it at least once
        a week to find the perfect implement for my latest project. It’s a mess,
        but I like it that way. More often than not I’ll get stabbed by the
        pencil I need in my haste to grab the one I was looking for.{" "}
      </p>
    </>
  )
}

function GenArtInterest() {
  return (
    <>
      <img
        src="img/pearlearring.jpg"
        className="img-fluid rounded mb-4 w-75 mx-auto d-block"
        alt="Responsive image"
      />
      <p className="mb-0">
        My latest obsession is generative art. When I first started programming,
        I thought that art and code were polar ends of a spectrum. Rational
        versus irrational. Logic against emotion. But, the more I program, the
        more I come to appreciate that programming is just another form of
        expression. It’s poetry in a sense that’s more abstract yet more
        concrete at the same time. Generative art is the process of creating art
        from code, and that’s art in and of itself. My senior capstone is
        focused on exploring the relationship between the process and the
        product, and you can read more about it in the work section!
      </p>
    </>
  )
}

function TechInterest() {
  return (
    <>
      <img
        src="img/raspberrypi.jpg"
        className="img-fluid rounded mb-4 w-75 mx-auto d-block"
        alt="Responsive image"
      />
      <p>
        At night, my apartment is lit by blinking lights. I keep adding to them.
        First, it was the raspberry pi I used as an emulator. Then, it was a
        laptop with a missing screen that I turned into a web server. After that
        came storage servers, homemade monitors, batteries, antennas,
        motherboards, and soldering irons. I’ve developed an addiction to things
        that beep. Next on my list are some electric motors to repair my micro
        quadcopter. I keep crashing it.
      </p>
    </>
  )
}

function OutdoorsInterest() {
  return (
    <>
      <br />
      <img
        src="img/Mountainlake.jpg"
        className="img-fluid rounded mb-4 w-75 mx-auto d-block"
        alt="Responsive image"
      />
      <p>
        I love the outdoors. I’m an eagle scout, and any weekend camping is a
        weekend well spent. That being said, I think at this point I’d rather
        sleep in the rain than put away another wet tent. This past summer I
        went on a 14 mile hike up to a mountain lake. The view was beautiful,
        but honestly it wasn’t as beautiful as the sight of my car at the end of
        the trail. My favorite form of exercise is mountain biking, but only the
        downhill parts. The uphill parts are my least favorite form of exercise.
      </p>
    </>
  )
}
