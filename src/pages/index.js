import React from "react"
import "./index.css"
import Header from "../components/header"
import Footer from "../components/footer"
import Blogs from "../components/blogs"
import Tools from "../components/tools"
import Mindsets from "../components/mindsets"
import Jobs from "../components/jobs"
import Typist from "react-typist"

const IndexPage = () => (
  <div>
    <Header />
    <div className="StartHero">
      <div className="StartHeroGroup">
        <h1>
          To infinity <br />
          and beyond.
        </h1>
        <h4>
          <Typist>
            <span>Welcome.</span>
            <Typist.Backspace count={8} delay={200} />
            <span>Herzlich Willkomen.</span>
            <Typist.Backspace count={19} delay={200} />
            <span>आपका स्वागत हे</span>
            <Typist.Backspace count={14} delay={200} />
            <span>Welcome. Herzlich Willkommen. आपका स्वागत हे </span>
          </Typist>
          We are <u>The Tools Team</u> at SAP.
        </h4>
      </div>
    </div>
    <div className="WhiteBG">
      <div className="Intro" id="about">
        <div className="IntroGroup">
          <div className="IntroTextGroup">
            <h2>the tools team.</h2>
            <p>
              Good to see you here! We are The Tools Team, an autonomous team
              inside SAP located in the SAP Labs in Silicon Valley (USA) &
              Bangalore (India) and in the SAP Headquarters (Germany). As our
              name says, we create tools. What kind of tools did you ask?
              Awesome tools to help people in SAP and clients out there to get
              their job done smarter and faster.
            </p>
            <h6>
              <b>Our Values</b>
            </h6>
            <ul>
              <li>
                We believe in <b>solutions</b> that matter.
              </li>
              <li>
                We believe <b>collaboration</b> is key for success.
              </li>
              <li>
                We believe understanding the bigger picture is necessary to
                create something <b>meaningful</b>.
              </li>
              <li>
                We believe that <b>transparency and openness</b> are the
                fundaments of trust.
              </li>
              <li>
                We believe that <b>together</b> we are <b>stronger</b>.
              </li>
            </ul>
          </div>
          <img alt="toolsteam" src={require("../images/diagram.png")} />
        </div>
      </div>
      <div className="OurMindset">
        <div className="MindsetTitle">
          <h2>our mindset.</h2>
        </div>
        <div className="MindsetGroup">
          <Mindsets />
        </div>
      </div>
    </div>
    <div className="HowWeWork" id="teams">
      <div className="HowWeWorkGroup">
        <div className="HowsTitle">
          <h2>how we work.</h2>
          <p>
            The secret sauce of our team is our people. We’re strategists,
            designers, product managers, developers, and technologists. Everyone
            plays a role, from start to finish, building our awesome tools
            together.
          </p>
        </div>
        <div className="Divisions">
          <div className="Division">
            <img alt="pm" src={require("../images/product.svg")} />
            <div>
              <h5>project managers.</h5>
              <p>
                Our collaboration and stakeholder heroes. With their 360°
                vision, they connect the team and hold all the bits & pieces
                together.
              </p>
            </div>
          </div>
          <div className="Division">
            <img alt="designer" src={require("../images/designer.svg")} />
            <div>
              <h5>designers.</h5>
              <p>
                Our creative magicians. With their almighty UX magic powers,
                they design delightful experience for users.
              </p>
            </div>
          </div>
          <div className="Division">
            <img alt="developers" src={require("../images/developer.svg")} />
            <div>
              <h5>developers.</h5>
              <p>
                Our savvy engineers and code masters. Their fingers type faster
                than light. They build our imaginations into reality.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr id="works" />
    </div>

    <div className="OurTools">
      <div className="OurToolsContainer">
        <div className="ToolsTitle">
          <h2>our tools.</h2>
          <p>A sneak-peek to our awesome tools.</p>
        </div>
      </div>
      <div className="ToolsGroup">
        <Tools />
      </div>
    </div>
    <div className="Blog">
      <div className="BlogContainer">
        <div className="BlogTitle">
          <h2>
            read our <br />
            thoughts.
          </h2>
          <p>
            {" "}
            <b>
              You don’t need to be a mindreader, <br />
              it’s there on Medium.
            </b>
          </p>
        </div>
        <Blogs />
      </div>
    </div>
    {/* <div className="DividerGroup">
      <div className="ImageDivider">
        <img
          alt="groupdivider"
          className="DesktopDivider"
          src={require("../images/divider.jpg")}
        />
        <img
          alt="groupdivider"
          className="PhoneDivider"
          src={require("../images/phonedivider.png")}
        />
      </div>
    </div> */}

    <div className="DividerGroup">
      <div className="MovingDivider" />
    </div>

    <div className="Careers" id="career">
      <div className="CareersSection">
        <div className="Details">
          <h2>join us.</h2>
          <h5>
            Let’s build <br />
            great things together.
          </h5>
          <p>
            We are always on the hunt for the best makers and thinkers. We hire
            people who are passionate about creating great tools, collaborate
            without ego, and most important, want you to enjoy what you do and
            who you do it with. <br />
          </p>
          <p>
            Couldn't find the job that you're looking for? You can always join
            the team as a working student or for an internship. Just send us an
            email at{" "}
            <span>
              {" "}
              <a href="mailto:tools-design-team@sap.com">
                tools-design-team@sap.com
              </a>
            </span>
          </p>
        </div>
        <Jobs />
      </div>
    </div>

    <Footer />
  </div>
)

export default IndexPage
