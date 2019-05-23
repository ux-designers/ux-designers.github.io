import React from "react"

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div className="FooterContainer">
          <div className="FooterLeft hide">
            <img alt="saplogo" src={require("../images/SAP-Logo.png")} />
            <a
              href="https://www.sap.com/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              SAP SE | <b>The Tools Team</b>
            </a>

            <a
              href="https://www.sap.com/corporate/en/legal/terms-of-use.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Use
            </a>
            <a
              href="https://www.sap.com/corporate/en/legal/privacy.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy
            </a>
            <a
              href="https://www.sap.com/corporate/en/legal/impressum.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Legal Disclosure
            </a>
            <a
              href="https://www.sap.com/corporate/en/legal/copyright.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Copyright
            </a>
          </div>
          <div className="FooterRight">
            <a
              href="https://dribbble.com/SAP_PI_TOOLS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="dribbble" src={require("../images/d.svg")} />
            </a>
            <a
              href="https://www.instagram.com/lifeatsap/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="instagram" src={require("../images/i.svg")} />
            </a>
            <a
              href="https://www.linkedin.com/company/sap/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="linkedin" src={require("../images/l.svg")} />
            </a>
            <a
              href="https://medium.com/sap-tools"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="medium" src={require("../images/m.svg")} />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
