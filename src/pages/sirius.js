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
    <div className="HeroPortfolio SIRP">
      <div className="HeroGroup">
        <h1>Sirius</h1>
      </div>
    </div>

    <div className="IntroPorto">
      <div className="IntroPortoGroup">
        <img alt="toolslogo" src={require("../images/siriusp.svg")} />
        <div className="IntroPortoTitle">
          <h2>Smart program management.</h2>
          <h5>How we help program managers to plan their deliveries.</h5>
        </div>
      </div>
      <div className="WhiteBG">
        <div className="IntroPortoDetail">
          <div className="Group">
            <h6>teams info.</h6>
            <p>
              Michael Gauges - Product Manager <br />
              Sirius Development Team <br />
              Roman Kostka - UX Designer
              <br />
            </p>
          </div>
          <div className="Brief">
            <h6>the brief.</h6>
            <p>
              Delivering software is not only deploying some code. There are
              many tasks that steps involved to keep the software compliant and
              ready to release. With Sirius we offer a smart way to keep track
              of all necessary tasks that needs to be fulfilled to be ready to
              release your software. From planning to release.
            </p>
          </div>
        </div>
      </div>
      <div className="PortfolioGroup">
        <div className="Portfolio">
          <img alt="portfolio" src={require("../images/sirius1.png")} />
          <h5>all the tasks in one place..</h5>
          <p>
            With Sirius we offer one place where all the magic happens to
            deliver compliant software at SAP.
          </p>
          <img alt="portfolio" src={require("../images/sirius2.png")} />
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
