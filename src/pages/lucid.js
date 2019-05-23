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
    <div className="HeroPortfolio LUCP">
      <div className="HeroGroup">
        <h1>Lucid</h1>
      </div>
    </div>

    <div className="IntroPorto">
      <div className="IntroPortoGroup">
        <img alt="toolslogo" src={require("../images/lucidp.svg")} />
        <div className="IntroPortoTitle">
          <h2>Capacity management you will love.</h2>
          <h5>
            How we help managers to keep transparency along their employees.
          </h5>
        </div>
      </div>
      <div className="WhiteBG">
        <div className="IntroPortoDetail">
          <div className="Group">
            <h6>teams info.</h6>
            <p>
              Roman Kostka - Product Manager
              <br /> Lucid Development Team <br />
              Abhinav Gupta - UX Designer
            </p>
          </div>
          <div className="Brief">
            <h6>the brief.</h6>
            <p>
              The bigger the company - the bigger the challenge to keep
              transparency along capacity management. With Lucid Capacity we
              help managers and their substitutes to get a clear picture on who
              is working on what.
            </p>
          </div>
        </div>
      </div>
      <div className="PortfolioGroup">
        <div className="Portfolio">
          <img alt="portfolio" src={require("../images/lucid1.png")} />
          <h5>Lucid Capacity is designed for awesomeness.</h5>
          <p>It was never so simple to keep track of capacity management.</p>
          <img alt="portfolio" src={require("../images/lucid2.png")} />
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
