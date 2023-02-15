import React, { useState } from "react"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa"
import Ripples from "react-ripples"
function DeepictContent() {
  return (
    <>
      <div className="workContentWrapper justify-content-center">
        <div className="row">
          <h2 className="mb-1 mx-auto col-12 col-md-10">Deepict</h2>
          <div className="mb-4 mx-auto col-12 col-md-10">
            <h6 className="green text-uppercase">
              A way to find new meaning in familiar photos
            </h6>
          </div>
        </div>
        <div className="row">
          <div className="mx-auto mb-2 col-12 col-md-10">
            <AwesomeSlider className="mb-5">
              <div data-src="./img/deepicttech.jpg" />
              <div data-src="./img/deepictpup1.jpg" />
              <div data-src="./img/deepictpup2.jpg" />
              <div data-src="./img/deepictpup3.jpg" />
              <div data-src="./img/deepictmockup.jpg" />
              <div data-src="./img/monet style pack.png" />
              <div data-src="./img/deepictlogo.jpg" />
            </AwesomeSlider>
          </div>
        </div>
        <div className="workContentBody mt-5 container">
          <div className="row">
            <div className="col-12">
              <h4 className="orange text-center">
                Working Prototype from <a href="#part2">Part 2</a> - see the
                full site at{" "}
                <a href="https://deepict.xyz">
                  deepict.xyz <FaExternalLinkAlt className=" pl-1" />
                </a>
              </h4>
            </div>
            <div className="col-12 px-5 px-lg-2 mb-5 mt-2">
              <iframe
                height="700px"
                width="100%"
                src="https://deepict.xyz/"
                name="iframe_a"
                className="rounded"
              ></iframe>
            </div>
            <div className="col">
              <span className="lead">Deepict was envisioned</span>
              <p className="d-inline">
                {" "}
                in 2019 as the capstone for my I.T. Innovation degree. I was
                tasked with first identifying an innovation to solve a problem,
                and then wrapping a business plan around it. After the idea and
                business were fleshed out, I developed a working prototype to
                illustrate the core functionality. The year-long capstone was
                split into two parts, with the ideation and business in the
                first half, and the development in the second. Before covering
                each half, here's the basic pitch:
              </p>
              <p className="lead p-3 p-md-5 text-primary">
                We put up pictures that mean something to us. They're captured
                memories, and we treat them like windows to the past. But as the
                pictures grow familiar the windows glaze over. Deepict is a way
                to keep pictures fresh and preserve meaning.
              </p>
              <h5 className="orange mt-3">Part 1</h5>
              <p>
                Although many in the I.T. Innovation program intend to use their
                capstone as the basis for starting their own company, I didn't
                have that goal. Instead, I wanted to work on a project that
                aligned with my passions, was challenging, and would teach me
                useful skills and technologies. The issue was I still needed to
                create a product that was economically viable to satisfy the
                constraints of the capstone.
              </p>
              <p>
                To that end, I combined my love of art, specifically{" "}
                <a href="https://www.artnome.com/news/2018/8/8/why-love-generative-art">
                  generative
                </a>{" "}
                art, with a desire to repurpose unused e-waste. Oftentimes
                people hang on to old tablets as they upgrade or lose interest.
                They sit in drawers, too slow to use, too inconvenient to sell,
                but too "valuable" to throw away. And although the hardware
                inside is lacking, often the screen itself works fine, and is
                usually a pretty high resolution display.
              </p>

              <div className="row">
                <div className="col-12 col-md-6">
                  <p>
                    My idea was essentially to turn old tablets into digital
                    photo frames, with a twist. Instead of showing a lot of
                    photos one way, I'd show one photo in a lot of ways. There
                    exists a technology called{" "}
                    <a href="https://www.fritz.ai/style-transfer/">
                      style transfer
                    </a>
                    , which uses A.I. (specifically a combination of two neural
                    networks) to transfer the artistic styling of one image to
                    another. By using style transfer I could take a person's
                    cherished photo and reimagine it in the style of a different
                    famous artist every day. Doing so would keep the photo fresh
                    and interesting, and hopefully prevent it from fading into
                    the mundane.
                  </p>
                </div>
                <div className="col-12 col-md-6">
                  <img
                    className="img-fluid rounded"
                    src="./img/stexample.png"
                  ></img>
                </div>
              </div>
              <p>
                I monetized Deepict based on a freemium model, with premium
                features locked behind a paywall, and additional in-app
                purchases. The full description of the process and products from
                part one of my capstone can be viewed using the link below.
              </p>
              <div className="row mt-4 justify-content-center mb-4">
                <Ripples className="rounded">
                  <a target="_blank" href="/img/Deepict Report.pdf">
                    <button className="btn btn-lg mx-auto btn-outline-dark blue">
                      Deepict Part 1 Report
                      <FaDownload className="ml-1 pl-1" />
                    </button>
                  </a>
                </Ripples>
              </div>
              <h5 id="part2" className="orange mt-3">
                Part 2
              </h5>
              <p className="d-inline">
                {" "}
                With the business portion out of the way, it was time to move on
                to what I was most excited about...{" "}
              </p>
              <p className=" text-primary d-inline"> making.</p>
              <p>
                I started by choosing my tech stack. I knew that I wanted to
                work with a JavaScript framework, because it was something that
                I had yet to really dive into. I knew that I'd want proficiency
                with js frameworks after graduation, and this seemed like a
                great opportunity to finally devote time to learning them. It
                was a great decision! This entire website is built in React.
              </p>
              <p>
                I ended up picking React, because it had a lower learning curve
                than Angular, a growing market share, and it worked with Ionic.
                Ionic let me let me develop a progressive web app that I could
                send to Android, IOS, and the web, all from one codebase, which
                was really cool. For hosting and a backend, I went with Google's
                Firebase running Node JS. It, like React, had a friendly
                learning curve. It also has a bunch of neat features to get up
                and running fast, which was the most important part for me.
                Firebase also uses something called "cloud functions", which is
                like AWS' Lambda. It runs your backend code without needing to
                worry about the overhead of server management or load balancing.
                Finally, I used Github for version control, and TravisCi for
                testing and deployment.
              </p>
              <div className="row mt-4">
                <div className="col-12 col-md-6">
                  <p>
                    The first thing I did with my newly chosen tech stack was
                    make sure I had the basics down. I set everything up, and
                    then created my first "feature":
                  </p>
                  <p className="text-center">
                    the <span className="lead green">Goat Getter.</span>
                  </p>
                  <p>
                    The goat getter does one thing. It gets goats. You click a
                    button that says "show me a goat", and it won't surprise
                    you. I made it to get the basic template for the U.I. set
                    up, and to practice interacting with an off-site A.P.I. and
                    updating the display based on user interaction.
                  </p>
                  <p>
                    Every time the button is clicked the site queries Unsplash's
                    database against a list of known albums of goat pictures,
                    and then picks one picture at random.
                  </p>
                </div>
                <div className="col-12 col-md-6 px-5">
                  <img
                    className="img-fluid rounded"
                    src="./img/goatgetter.jpg"
                  ></img>
                  <p className="text-subtitle small text-center mt-1">
                    🐐 Getter
                  </p>
                </div>
              </div>
              <p className="mt-4">
                With the basics brushed up on, next was the{" "}
                <span className="green lead">Nuker.</span>
              </p>
              <div className="row mt-4">
                <div className="col-12 col-md-6">
                  <p>
                    The nuker was my first foray into generative art, or rather
                    degenerative art. It corrupts images by running them through
                    so many filters and compressions that the end result is
                    often unrecognizable. On top of that, it reads the image as
                    one long string of text and injects and deletes random bits.
                    The whole process is randomized each time, so nuking the
                    same image again will result in a different effect.
                  </p>
                </div>
                <div className="col-12 col-md-6 px-5">
                  <img
                    className="img-fluid rounded"
                    src="./img/monalisanuke.png"
                  ></img>
                  <p className="text-subtitle small text-center mt-1">
                    Mona Lisa Nuked
                  </p>
                </div>
              </div>
              <p>
                I made the nuker to establish how to handle user submitted
                images, and how to process them both on the client and server
                side. Once the user uploads an image the browser will resize the
                image to fit within reasonable dimensions, and then do a slight
                compression to reduce the file size. The pre-processing of the
                image actually saves 5-10 seconds overall. After that the image
                is sent to the server.
              </p>
              <p>
                The "server" (technically a serverless cloud function) creates a
                reference for the image in the database, and links to the image
                file's location in cloud storage. The server then does the image
                destroying operations, uploads and creates a reference to the
                modified image in the database and cloud storage, and then sends
                the image back to the browser.
              </p>
            </div>
          </div>
          <p>
            Now that I had an idea on how to handle image processing, it was
            time to move onto the biggest challenge:{" "}
          </p>
          <div className="row mt-4">
            <div className="col-12 col-md-6 col-lg-8">
              <p className=" text-center">
                <span className="green lead">Style Transfer.</span>
              </p>
              <p>
                Luckily for me, I wouldn't have to start from scratch. There are
                open-source style transfer models, that have been pre-trained.
                That being said, working with neural networks is no simple task.
              </p>
              <p>
                I ended up implementing two different versions: one for the
                browser, and one for the server. The browser version was
                relatively straightforward, but it would freeze up the interface
                until it was done. It wasn't a good user experience at all.
              </p>
              <p>
                The reason it was freezing up was because JavaScript is a
                single-threaded language. Support for multi-threading while
                working with images is still experimental, and it looked like it
                wouldn't be a viable option for at least a couple of years. On
                top of that, mobile devices couldn't handle the task at all.
                Trying to run style transfer in a mobile browser wouldn't just
                crash the page...but the whole browser as well.
              </p>
              <p>
                I'm confident that if I intended to turn the prototype into the
                idea from part one, I'd be able to make it work. Compiling the
                code into native apps using Ionic would let me have access to a
                lot more resources than just through the browser, and I'm sure
                there's threading options too. However, the time it would take
                to work out all of the kinks was beyond the scope of my project,
                so I turned to a second option: cloud functions.
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 px-5">
              <img
                className="img-fluid rounded mx-auto d-block"
                src="./img/monalisastyletransfermed.png"
              ></img>
              <p className="text-subtitle small text-center mt-1">
                Style Transfer of <i>Weeping Woman</i> <br /> to{" "}
                <i>Mona Lisa</i>
              </p>
            </div>
          </div>
          <p>
            Using cloud functions I was able to hack together a custom
            node-based style transfer implementation. If I was using a regular
            server I'm sure it would have been trivial by comparison. To keep
            things short: I had to find an undocumented directory used by cloud
            functions when the temporary server is spun up, decompile and store
            the neural network models there, and then tweak some polyfills to
            get everything to work with node. It was a ton of work, but totally
            worth it. The result is usually faster, totally consistent, and much{" "}
            <i>much</i> smoother.
          </p>
          <p className="mt-4">
            Having achieved my biggest goal, it was time to reward myself with a
            bouquet. Enter:
          </p>
          <p className=" text-center">
            the <span className="green lead">Flower Grower.</span>
          </p>
          <div className="row mt-4">
            <div className="col-12 col-md-6 col-lg-8">
              <p>
                The flower grower was a fun experiment in randomization within
                constraints. It uses p5js, a JavaScript implementation of the
                popular generative art library Processing. Every time a button
                is clicked a responsive grid of flowers is grown, with each
                composed of a randomized amount of shapes and colors.
              </p>
              <p>
                The purpose of the flower grower was to introduce myself to
                p5js, which I hadn't used before, and to see if combining
                abstract generative art with the other filters I made would
                produce interesting and unique results. See for yourself!
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 px-5">
              <img
                className="img-fluid rounded mx-auto d-block"
                src="./img/flowers.jpg"
              ></img>
              <p className="text-subtitle small text-center mt-1">
                a field of flowers
              </p>
            </div>
          </div>
          <div className="row mt-4 justify-content-center">
            <div className="col-12 col-md-4 ">
              <img
                className="img-fluid rounded mx-auto d-block"
                src="./img/flowersnuked.jpg"
              ></img>
              <p className="text-subtitle small text-center mt-1">
                Nuked Flowers
              </p>
            </div>
            <div className="col-12 col-md-4">
              <img
                className="img-fluid rounded mx-auto d-block"
                src="./img/flowersstyletransfer.jpeg"
              ></img>
              <p className="text-subtitle small text-center mt-1">
                Style Transferred Flowers
              </p>
            </div>
            <p>
              The project was a lot of fun, and I learned an incredible amount
              from it. You can see the full site using the link below!
            </p>
          </div>
          <div className="row mt-3 justify-content-center mb-4">
            <Ripples className="rounded">
              <a target="_blank" href="https://deepict.xyz">
                <button className="btn btn-lg mx-auto btn-outline-dark blue">
                  deepict.yxz
                  <FaExternalLinkAlt className="ml-1 pl-1" />
                </button>
              </a>
            </Ripples>
          </div>
        </div>
      </div>
    </>
  )
}
export default DeepictContent
