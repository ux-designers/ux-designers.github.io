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
    <div className="HeroPortfolio SOLP">
      <div className="HeroGroup">
        <h1>Solaris</h1>
      </div>
    </div>

    <div className="IntroPorto">
      <div className="IntroPortoGroup">
        <img alt="toolslogo" src={require("../images/solarisp.svg")} />
        <div className="IntroPortoTitle">
          <h2>Internal documentation of SAP Solution Portfolio.</h2>
          <h5>
            Help to easily find a fitting SAP Solution for a specific Industry
            or LoB problem.
          </h5>
        </div>
      </div>
      <div className="WhiteBG">
        <div className="IntroPortoDetail">
          <div className="Group">
            <h6>teams info.</h6>
            <p>
              André Stern – Product Owner <br />
              Birger Lehmann – Architect <br />
              Smitha C. Patil – Co-Architect<br />
              Sebastian Protz – Developer<br />
              Supriya Raj – Developer<br />
              Venkata Gopi Thokala – Developer<br />
              Sarina Walter – UX/UI Designer
            </p>
          </div>
          <div className="Brief">
            <h6>the brief.</h6>
            <p>
              Solaris helps to provide transparency about SAP’s Solution
              Portfolio to the customers, partners, field services and other
              internal stakeholders like development, portfolio teams,
              go-to-market teams, organizational units etc. Data maintained,
              such as Solution Capabilities per industry and product along the
              corresponding Business Capability, will be made available in SAPs
              Transformation Navigator, sap.com and elsewhere.
            </p>
          </div>
        </div>
      </div>
      <div className="PortfolioGroup">
        <div className="Portfolio">
          <img alt="portfolio" src={require("../images/solaris1.png")} />
          <h5>Documentation along Business Capability Models.</h5>
          <p>
            Solaris is a browser-based application used by SAP employees to
            document the SAP Solution Portfolio. The portfolio is structured by
            industry specific Business Capability Models, which represent a
            high-level enterprise architecture (HR, Finance, Commerce). Later in
            the consumption, it helps SAP customer to easily find a fitting SAP
            Solution for their specific Industry or Line of Business problem.
          </p>
          <h2>
            “The tool is a quantum leap in terms of usability and performance
            compared to former content management.”
          </h2>
          <p>Solaris User</p>
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
