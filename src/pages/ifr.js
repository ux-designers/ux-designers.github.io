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
    <div className="HeroPortfolio IFRP">
      <div className="HeroGroup">
        <h1>Innovation & Feature Repository</h1>
      </div>
    </div>

    <div className="IntroPorto">
      <div className="IntroPortoGroup">
        <img alt="toolslogo" src={require("../images/ifrp.svg")} />
        <div className="IntroPortoTitle">
          <h2>SAP’s product innovation portfolio.</h2>
          <h5>Let’s collect and connect all key data</h5>
        </div>
      </div>
      <div className="WhiteBG">
        <div className="IntroPortoDetail">
          <div className="Group">
            <h6>teams info.</h6>
            <p>
              Shadab Shafiq - Product Manager <br />
              Aditya Bikram Pattnaik - Developer
              <br />
              Pallavika Nesargikar - Developer
              <br />
              Pavan Raghu - Developer
              <br />
              Ravi Suresh Mashru - Developer
              <br />
              Sandeep Kaur - Developer
              <br />
              Nikola Freudensprung - UX Designer
            </p>
          </div>
          <div className="Brief">
            <h6>the brief.</h6>
            <p>
              What’s the next feature that we deliver to our customers by when?
              And which capability does it support or enhance? Trough which
              product our customers can make use of it? The Innovation & Feature
              Repository tool in an SAP internal authoring tool that collect and
              connects all data that are required to answer all these questions.
            </p>
          </div>
        </div>
      </div>
      <div className="PortfolioGroup">
        <div className="Portfolio">
          <img alt="portfolio" src={require("../images/ifr1.jpg")} />
          <h5>Maintained once - 3 publishing channels</h5>
          <p>
            Our main users are product owners and product management who do use
            the Innovation & Feature repository to collect and connect all
            relevant data that is required to create transparency and support
            the internal portfolio planning. At a late step in the development
            process the enriched data is THE basis for SAPs product innovation
            roadmaps.
          </p>
          <h2>
            A guided publishing process ensures the right data at the right
            time.
          </h2>
          <img alt="portfolio" src={require("../images/ifr2.jpg")} />
          <p>
            Regular usability surveys help us to collect end-user feedback and
            to measure our UX ROI
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
