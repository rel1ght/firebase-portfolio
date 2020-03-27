import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"
import "../styles/resume.css"

export default () => (
  <>
    <Helmet>
      <title>Tyler Manion</title>
      <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
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
        rel="stylesheet"
        href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i"
        rel="stylesheet"
      />
      {/* <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" /> */}

      {/* <!-- Custom styles for this template --> */}
      <link href="styles/resume.css" rel="stylesheet" />
    </Helmet>
    <header></header>
    <main>
      <div id="page-top"></div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <link className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Tyler Manion</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src="img/profile.jpg"
              alt=""
            />
          </span>
        </link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <link className="nav-link js-scroll-trigger" href="#about">
                About
              </link>
            </li>
            <li className="nav-item">
              <link className="nav-link js-scroll-trigger" href="#experience">
                Experience
              </link>
            </li>
            <li className="nav-item">
              <link className="nav-link js-scroll-trigger" href="#education">
                Education
              </link>
            </li>
            <li className="nav-item">
              <link className="nav-link js-scroll-trigger" href="#skills">
                Skills
              </link>
            </li>
            <li className="nav-item">
              <link className="nav-link js-scroll-trigger" href="#interests">
                Interests
              </link>
            </li>
            <li className="nav-item">
              <link className="nav-link js-scroll-trigger" href="#awards">
                Awards
              </link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container-fluid p-0 flex-bg-primary">
        <section
          className="pnone resume-section p-3 p-lg-5  align-items-center"
          id="about"
        >
          <div className="w-100" id="aboutbody">
            <div className="d-none d-lg-block " id="emptydiv"></div>
            <h2 className="pauto mb-0 pb-0 green display-4" id="hi">
              Hi,
            </h2>
            <div id="extraspace">
              <h2 className="pauto mb-2 d-inline">My name is</h2>
              <h2 className="pauto mb-2 d-inline text-primary display-3">
                Tyler Manion
              </h2>
              <div>
                <h2 className="pauto mb-2 d-inline">and I'm </h2>
                <h2
                  className="pauto typewrite d-inline orange"
                  data-period="2000"
                  data-type='[ "a Developer.", "a Designer.", "an Artist.", "a Maker.", "a Student.", "studying I.T. Innovation", "from Omaha.", "23 years old.", "looking for a job." ]'
                >
                  <span className="pauto wrap"></span>
                </h2>
              </div>
            </div>
            <div className="d-block d-md-none" id="mobileonlyextraspace"></div>
            <br />
            <div className="pauto subheading mb-5 ml-1">
              <link href="tel:402-612-3862">(402) 612-3862</link> ·
              <link
                className="pauto text-lowercase"
                href="mailto:contact@tylermanion.xyz"
              >
                contact@tylermanion.xyz
              </link>
            </div>
            <p className="pauto lead mb-5 ">
              I’m a lot of things, but mean isn’t one of them! I love hearing
              from new people. Feel free to send me a message if you have a
              question, comment, or just want to chat!
            </p>
            <div className="social-icons">
              <link
                className="pauto"
                href="https://www.linkedin.com/in/tyler-manion-98690513a/"
              >
                <i className="fab fa-linkedin-in"></i>
              </link>
              <link className="pauto" href="https://github.com/rel1ght">
                <i className="fab fa-github"></i>
              </link>
              <link className="pauto" href="img/resume.pdf">
                <i className="fas fa-file-alt"></i>
              </link>
            </div>
          </div>
          <div
            className="pauto w-100 h-100 d-none d-lg-block"
            id="particles-js"
          ></div>
        </section>

        <hr className="m-0 seperator" />

        <section
          className="resume-section p-3 p-lg-5 d-flex justify-content-center flex-bg-primary"
          id="experience"
        >
          <div className="w-100">
            <h2 className="mb-5 text-primary">Experience</h2>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0 orange">
                  Office of Technology Student Worker
                </h3>
                <div className="subheading mb-3 green">
                  College of Education at U.N.O.
                </div>
                <ul>
                  <li>
                    Lead a redesign of a custom operating system and deployment
                    method for 200+ workstations
                  </li>
                  <li>
                    Researched, engineered, and deployed 3 mobile VR Systems
                    used to teach biomechanics in classNamerooms
                  </li>
                  <li>
                    Designed web and print graphics for college wide
                    communications
                  </li>
                  <li>
                    Developed custom scripts to automate repetitive tasks and
                    reduce human error
                  </li>
                  <li>
                    Engineered and deployed servers used in highly connected
                    operation critical enviornments
                  </li>
                </ul>
              </div>
              <div className="resume-date text-md-right">
                <span className="blue">June 2018 - Present</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0 orange">Driver</h3>
                <div className="subheading mb-3 green">
                  Jimmy John's Hodges Enterprises
                </div>
                <ul>
                  <li>
                    Optimized route efficiency and delivery times through
                    delivery assignment and prioritization
                  </li>
                  <li>
                    Responsible for cash transactions and money changing at
                    delivery locations
                  </li>
                  <li>
                    Completed transactions efficiently and safely in a
                    fast-paced high-stress environment
                  </li>
                </ul>
              </div>
              <div className="resume-date text-md-right">
                <span className="blue">June 2017 - December 2017</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0 orange">Supply Supervisor / IT Manager</h3>
                <div className="subheading mb-3 green">
                  It's a Wonderful World Childcare
                </div>
                <ul>
                  <li>
                    Managed and delivered interdepartmental supplies for 4
                    locations while anticipating the needs of the centers and
                    solving problems quickly as they arose to maintain
                    efficiency and productivity for the business
                  </li>
                  <li>
                    Demonstrated a working knowledge of technology through
                    repairing and selecting equipment for the company
                  </li>
                  <li>
                    Designed a new website to create a professional image,
                    highlight strengths of the company, and better attract
                    customers
                  </li>
                </ul>
              </div>
              <div className="resume-date text-md-right">
                <span className="blue">May 2015 - August 2016</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0 orange">Cook</h3>
                <div className="subheading mb-3 green">Rockin’ Robbie’s</div>
                <ul>
                  <li>
                    Assisted management with inventory control, menu design, and
                    advertisement creation to create a strong image for the
                    brand
                  </li>
                  <li>
                    Enhanced problem-solving abilities by repairing equipment
                    quickly and efficiently during peak hours to maintain
                    customer satisfaction
                  </li>
                  <li>
                    Improved point-of-service (POS) computer system to maximize
                    speed and usability in order to create more effective
                    business operations
                  </li>
                </ul>
              </div>
              <div className="resume-date text-md-right">
                <span className="blue">September 2014 - May 2015</span>
              </div>
            </div>
          </div>
        </section>

        <hr className="m-0 seperator" />

        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="education"
        >
          <div className="w-100">
            <h2 className="mb-5 text-primary">Education</h2>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0 orange">University of Nebraska at Omaha</h3>
                <div className="subheading mb-3 green">
                  Bachelor of I.T. Innovation
                </div>
                <div>Emphasis on Web Development and Design</div>
                <p>GPA: 2.7</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="blue">August 2006 - May 2010</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
              <div className="resume-content">
                <h3 className="mb-0 orange">Utah Valley University</h3>
                <div className="subheading mb-3 green">
                  Bachelor of Fine Arts
                </div>
                <div>Emphasis on Graphic Design</div>
                <p>GPA: 3.72</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="blue">August 2014 - December 2015</span>
              </div>
            </div>
          </div>
        </section>

        <hr className="m-0 seperator" />

        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="skills"
        >
          <div className="w-100">
            <h2 className="mb-5 text-primary">Skills</h2>

            <div className="subheading mb-3">
              Programming Languages &amp; Tools
            </div>
            <ul className="list-inline dev-icons">
              <li className="list-inline-item">
                <i className="fab fa-html5"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-css3-alt"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-js-square"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-java"></i>
              </li>
              <li className="list-inline-item">
                <i className="devicon-c-plain"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-bootstrap"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-react"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-node-js"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-npm"></i>
              </li>
              <li className="list-inline-item mb-3">
                <i className="fab fa-wordpress"></i>
              </li>
            </ul>
            <div className="subheading mb-3">Design Tools</div>
            <ul className="list-inline dev-icons">
              <li className="list-inline-item">
                <i className="devicon-photoshop-plain"></i>
              </li>
              <li className="list-inline-item">
                <i className="devicon-illustrator-plain"></i>
              </li>
            </ul>
          </div>
        </section>

        <hr className="m-0 seperator" />
        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="interests"
        >
          <div className="w-100">
            <h2 className="mb-5 text-primary">Interests</h2>
            <img
              src="img/9.JPG"
              className="img-fluid rounded mb-4 w-75 mx-auto d-block"
              alt="Responsive image"
            />
            <p>
              I love creating. Drawing, painting, sculpting, building, coding.
              All tools I use to scratch an itch in my brain that makes me want
              to make something. I always carry a sketchpad with me that houses
              ideas and doodles side-by-side. At home I have a treasure trove of
              art supplies built up over years of accumulation. I rummage
              through it at least once a week to find the perfect implement for
              my latest project. It’s a mess, but I like it that way. More often
              than not I’ll get stabbed by the pencil I need in my haste to grab
              the one I was looking for.{" "}
            </p>
            <br />
            <img
              src="img/Mountainlake.jpg"
              className="img-fluid rounded mb-4 w-75 mx-auto d-block"
              alt="Responsive image"
            />
            <p>
              I love the outdoors. I’m an eagle scout, and any weekend camping
              is a weekend well spent. That being said, I think at this point
              I’d rather sleep in the rain than put away another wet tent. This
              past summer I went on a 14 mile hike up to a mountain lake. The
              view was beautiful, but honestly it wasn’t as beautiful as the
              sight of my car at the end of the trail. My favorite form of
              exercise is mountain biking, but only the downhill parts. The
              uphill parts are my least favorite form of exercise.
            </p>
            <br />
            <img
              src="img/raspberrypi.jpg"
              className="img-fluid rounded mb-4 w-75 mx-auto d-block"
              alt="Responsive image"
            />
            <p>
              At night, my apartment is lit by blinking lights. I keep adding to
              them. First, it was the raspberry pi I used as an emulator. Then,
              it was a laptop with a missing screen that I turned into a web
              server. After that came storage servers, homemade monitors,
              batteries, antennas, motherboards, and soldering irons. I’ve
              developed an addiction to things that beep. Next on my list are
              some electric motors to repair my micro quadcopter. I keep
              crashing it.
            </p>
            <br />
            <img
              src="img/gen.jpg"
              className="img-fluid rounded mb-4 w-75 mx-auto d-block"
              alt="Responsive image"
            />
            <p className="mb-0">
              My latest obsession is generative art. When I first started
              programming, I thought that art and code were polar ends of a
              spectrum. Rational versus irrational. Logic against emotion. But,
              the more I program, the more I come to appreciate that programming
              is just another form of expression. It’s poetry in a sense that’s
              more abstract yet more concrete at the same time. Generative art
              is the process of creating art from code, and that’s art in and of
              itself. My senior capstone is focused on exploring the
              relationship between the process and the product, and I’m excited
              to write more about it once I’m farther along.
            </p>
          </div>
        </section>

        <hr className="m-0 seperator" />

        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="awards"
        >
          <div className="w-100">
            <h2 className="mb-5 text-primary">Awards &amp; Certifications</h2>
            <ul className="fa-ul mb-0">
              <li>
                <i className="fa-li fa fa-trophy text-warning"></i>
                IRB Certification
              </li>
              <li>
                <i className="fa-li fa fa-trophy text-warning"></i>
                Dean's List Fall 2014 - Fall 2016
              </li>
              <li>
                <i className="fa-li fa fa-trophy text-warning"></i>
                Eagle Scout Award Recipient
              </li>
              <li>
                <i className="fa-li fa fa-trophy text-warning"></i>2 Scholastic
                State Gold Keys for Excellence in the Visual Arts
              </li>
              <li>
                <i className="fa-li fa fa-trophy text-warning"></i>2 Scholastic
                State Silver Keys for Excellence in the Visual Arts
              </li>
              <li>
                <i className="fa-li fa fa-trophy text-warning"></i>1 Scolastic
                National Gold Medal for Excellence in the Visual Arts
              </li>
            </ul>
          </div>
        </section>
      </div>
      {/* <!-- Bootstrap core JavaScript -->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  
  <!-- Plugin JavaScript -->
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
  
  <!-- Custom scripts for this template -->
  <script src="js/resume.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
  <script>
    particlesJS.load('particles-js', 'particles.json', function(){
      console.log('particles.json loaded');
    })
  </script> */}
    </main>
  </>
)
