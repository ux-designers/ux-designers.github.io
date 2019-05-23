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
    <div className="HeroPortfolio POLP">
      <div className="HeroGroup">
        <h1>Polaris</h1>
      </div>
    </div>

    <div className="IntroPorto">
      <div className="IntroPortoGroup">
        <img alt="toolslogo" src={require("../images/polarisp.svg")} />
        <div className="IntroPortoTitle">
          <h2>Create, maintain & review product recommendations.</h2>
          <h5>
            How we help SAP employees to keep product recommendations clear.
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
            </p>
          </div>
          <div className="Brief">
            <h6>the brief.</h6>
            <p>
              Product recommendations are essential for our customers. They
              guide them through a large product portfolio and are basically the
              foundation of the SAP Transformation Navigator. But how to best
              maintain them? After all, these recommendations can be long, long
              chains of products taking over the functionality of each other.
              How to keep the overview?
            </p>
          </div>
        </div>
      </div>
      <div className="PortfolioGroup">
        <div className="Portfolio">
          <img alt="portfolio" src={require("../images/polaris1.jpg")} />
          <h5>Throw away that spreadsheet.</h5>
          <p>
            What was previously maintained in a large table that only
            specialists could fill in, is now easily accessible in Polaris.
            Product Owners or other people responsible can enter all the info
            needed for their products and add product recommendations. In order
            to help employees with the more difficult recommendations, Polaris
            also includes a product ranking part as well as an area where
            smaller functionality parts are ranked and recommended.
          </p>

          <img alt="portfolio" src={require("../images/polaris2.jpg")} />
          <p>
            Product recommendations are maintained on separate cards and need
            some info filled in before being published.
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
