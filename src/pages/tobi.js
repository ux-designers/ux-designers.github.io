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
    <div className="HeroPortfolio TOBP">
      <div className="HeroGroup">
        <h1>Tobi</h1>
      </div>
    </div>

    <div className="IntroPorto">
      <div className="IntroPortoGroup">
        <img alt="toolslogo" src={require("../images/tobyp.svg")} />
        <div className="IntroPortoTitle">
          <h2>Tobi is your own personal assistant.</h2>
          <h5>How we help to automate tasks whenever possible.</h5>
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
              Timerecording, issue tracking, looking at usage statistics &
              deployment of builds. These are only some of many task every SAP
              employee faces during a normal day of work. With Tobi we created
              an easy to consume integration into slack that is fully
              customizable and helps to automate a lot of these tasks!
            </p>
          </div>
        </div>
      </div>
      <div className="PortfolioGroup">
        <div className="Portfolio">
          <img alt="portfolio" src={require("../images/tobi1.png")} />
          <h5>Meet Tobi.</h5>
          <p>
            Tobi is an extendable chatbot for Slack that works for you. You can
            configure your own services or use already existing ones to help you
            with daily tasks.
          </p>
          <img alt="portfolio" src={require("../images/tobi2.png")} />
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
