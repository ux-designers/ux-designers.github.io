import React from "react"
import "./portfolio.css"
import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from "gatsby"
import { genericHashLink } from "react-router-hash-link"

const HashLink = props => genericHashLink(props, Link)

const IndexPage = () => (
  <div>
    <Header />
    <div className="HeroPortfolio STNP">
      <div className="HeroGroup">
        <h1>SAP Transformation Navigator</h1>
      </div>
    </div>

    <div className="IntroPorto">
      <div className="IntroPortoGroup">
        <img alt="toolslogo" src={require("../images/stn.svg")} />
        <div className="IntroPortoTitle">
          <h2>Everything you need in one place.</h2>
          <h5>How we help customer plan their future SAP product map.</h5>
        </div>
      </div>
      <div className="WhiteBG">
        <div className="IntroPortoDetail">
          <div className="Group">
            <h6>teams info.</h6>
            <p>
              John Doe - Product Manager <br />
              Andre Schneider - Developer
              <br />
              Janis Müller - UX Designer
              <br />
            </p>
          </div>
          <div className="Brief">
            <h6>the brief.</h6>
            <p>
              Picture this. It’s a normal day for SAP employees, their day is
              full of juggling daily tasks and apps that correlate to respecting
              tasks, browser full of tabs, all have different apps running
              inside it. What if we can simplify the workflow? What if we can
              create a platform to connect all the daily apps they use so it’s
              easier for them to access all essential information that they
              might need?
            </p>
          </div>
        </div>
      </div>
      <div className="PortfolioGroup">
        <div className="Portfolio">
          <img alt="portfolio" src={require("../images/photo1.jpg")} />
          <h5>all in one platform.</h5>
          <p>
            Bridge is a dashboard application that functions as its name says as
            a bridge that connects all the apps that SAP employees use in their
            daily work, brings them all together in one place. Bridge runs as a
            browser-based dashboard application, which means it can be easily
            accessible in any browser on any operating system.
          </p>
          <h2>
            Users can decide on their own which widgets they want to incorporate
            in their personal Bridge dashboard.
          </h2>
          <img alt="portfolio" src={require("../images/photo2.jpg")} />
        </div>
      </div>
      <HashLink smooth to="/#works" className="Links">
        <div className="BackButton">
          <img alt="arrow" src={require("../images/arrowb.svg")} />
          <p>See Other Tools</p>
        </div>
      </HashLink>
    </div>

    <Footer />
  </div>
)

export default IndexPage
