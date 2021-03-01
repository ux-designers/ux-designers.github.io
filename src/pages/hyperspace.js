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
    <div className="HeroPortfolio HYPERP">
      <div className="HeroGroup">
        <h1>Hyperspace</h1>
      </div>
    </div>

    <div className="IntroPorto">
      <div className="IntroPortoGroup">
        <img alt="toolslogo" src={require("../images/hyperspace_logo_b.png")} />
        <div className="IntroPortoTitle">
          <h2>SAP’s CI/CD shared service</h2>
          <h5>The Hyperspace Hub – The central point of information and access.</h5>
        </div>
      </div>
      <div className="WhiteBG">
        <div className="IntroPortoDetail">
          <div className="Group">
            <h6>teams info.</h6>
            <p>
            A collaborative effort between The Tools Team 
            <br />
            and the CI/CD Product Management.
            <br />
              Design and Concept by The Tools Team
            </p>
          </div>
          <div className="Brief">
            <h6>the brief.</h6>
            <p>
            HyperSpace is SAP's CI/CD shared service which provides tools and services to simplify 
            the life of SAP developers on their cloud product development journey.
            The Hyperspace Hub  provides access to information along the user journey and acts as center of access for tools, 
            services, support and communication around all CI/CD offerings.
            You don’t know where to start, where to go to or whom to ask? Go to the Hyperspace Hub.
            </p>
          </div>
        </div>
      </div>
      <div className="PortfolioGroup">
        <div className="Portfolio">
          <img alt="portfolio" src={require("../images/hyperspace1.png")} />
        
         {/* <img alt="portfolio" src={require("../images/hyperspace2.png")} /> 
         */}
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
