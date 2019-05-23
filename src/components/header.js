import React from "react"
import { Link } from "gatsby"
import "../components/header.css"
import { genericHashLink } from "react-router-hash-link"
import { Helmet } from "react-helmet"

const HashLink = props => genericHashLink(props, Link)

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>The Tools Team</title>
          <link rel="canonical" href="http://ux-design.rocks/" />
        </Helmet>
        <div className="HeaderGroup">
          <Link to="/">
            <img alt="logo" src={require("../images/logo.png")} height="35" />
          </Link>
          <HashLink smooth to="/#about">
            About
          </HashLink>
          <HashLink smooth to="/#teams">
            Teams
          </HashLink>
          <HashLink smooth to="/#works">
            Works
          </HashLink>
          <HashLink smooth to="/#career">
            Career
          </HashLink>
        </div>
      </div>
    )
  }
}

export default Header
