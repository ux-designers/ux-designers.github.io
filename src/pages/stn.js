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
          <h2>Clear Guidance to the Intelligent Enterprise.</h2>
          <h5>
            How we help customers to get just the right SAP products and
            solutions.
          </h5>
        </div>
      </div>
      <div className="WhiteBG">
        <div className="IntroPortoDetail">
          <div className="Group">
            <h6>teams info.</h6>
            <p>
              Sue Schneider – Product Owner <br />
              Christian Riedl – Developer
              <br />
              Fabian Hilz – Developer
              <br />
              Laurens von Assel – Developer
              <br />
              Osman Can Arikan – Developer
              <br />
              Nancy Kunath – Developer
              <br />
              Simon Nilius – Developer
              <br />
              Timo Bergmann – Developer
              <br />
              Astrid Kadel – UX/UI Designer
              <br />
              Nikola Freudensprung – UX/UI Designer
            </p>
          </div>
          <div className="Brief">
            <h6>the brief.</h6>
            <p>
              With lots of products and solutions on the SAP portfolio, it can
              be a hard task for our customers to just find and pick the right
              ones for the future. What if we could help them with this task?
              What if we could guide them through our vast landscape of products
              and give them clear recommendations?
            </p>
          </div>
        </div>
      </div>
      <div className="PortfolioGroup">
        <div className="Portfolio">
          <img alt="portfolio" src={require("../images/stn1.jpg")} />
          <h5>Giving you the compass you needed.</h5>
          <p>
            SAP Transformation Navigator is a self-service tool for all SAP
            customers and partners. It helps them to become Intelligent
            Enterprises by providing product recommendations and guidance for
            their way into a digital future. In short words – just add the
            products you are currently running and the tool recommends you the
            best replacement products and shows how they evolve over time.
          </p>
          <h2>
            With{" "}
            <b>
              <u>SAP Transformation Navigator</u>
            </b>
            , customers can quickly see their product recommendations and how
            they evolve over time.
          </h2>
          <img alt="portfolio" src={require("../images/stn2.jpg")} />
          <p>
            The heart of the SAP Transformation Navigator is the Product Map
            where customers can see their product recommendations.
          </p>
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
