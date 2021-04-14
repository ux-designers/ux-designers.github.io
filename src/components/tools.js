import React from "react"
import Tool from "../components/tool"
import ItemsCarousel from "react-items-carousel"

export default class Tools extends React.Component {
  componentWillMount() {
    this.setState({
      activeItemIndex: 0,
    })
  }
  render() {
    return (
      <div style={{ padding: 0, maxWidth: "100%", margin: "0" }}>
        <ItemsCarousel
          gutter={0}
          activePosition={"center"}
          chevronWidth={75}
          numberOfCards={3}
          slidesToScroll={1}
          outsideChevron={false}
          showSlither={false}
          firstAndLastGutter={false}
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={value =>
            this.setState({ activeItemIndex: value })
          }
          rightChevron={
            <button className="ChevronRightWhite">
              <img alt="medium" src={require("../images/rightw.svg")} />
            </button>
          }
          leftChevron={
            <button className="ChevronLeftWhite">
              <img alt="medium" src={require("../images/leftw.svg")} />
            </button>
          } >
        
          <Tool
            class="Tool Hyperspace"
            link="/hyperspace"
            title="Hyperspace"
            logo={require("../images/hyperspace_logo_w.svg")}
            image={require("../images/hyperspace.jpg")}
          />
          <Tool
            class="Tool PPMS"
            link="/ppms"
            title="PPMS Light"
            logo={require("../images/ppms.svg")}
            image={require("../images/ppms.jpg")}
          />
          <Tool
            class="Tool Sirius"
            link="/sirius"
            title="Sirius"
            logo={require("../images/sirius.svg")}
            image={require("../images/sirius.jpg")}
          />
            <Tool
            class="Tool IFR"
            link="/ifr"
            title="Innovation & Feature Repository"
            logo={require("../images/ifr.svg")}
            image={require("../images/ifr.jpg")}
          />
          <Tool
            class="Tool Lucid"
            link="/lucid"
            title="Lucid"
            logo={require("../images/lucid.svg")}
            image={require("../images/lucid.jpg")}
          />
          <Tool
            class="Tool Toby"
            link="/tobi"
            title="Tobi"
            logo={require("../images/toby.svg")}
            image={require("../images/toby.jpg")}
          />
           <Tool
            class="Tool STN"
            link="/stn"
            title="SAP Transformation Navigator"
            logo={require("../images/stn.svg")}
            image={require("../images/stn.jpg")}
          />
           <Tool
            class="Tool Polaris"
            link="/polaris"
            title="Polaris"
            logo={require("../images/polaris.svg")}
            image={require("../images/polaris.jpg")}
          />
           <Tool
            class="Tool Solaris"
            link="/solaris"
            title="Solaris"
            logo={require("../images/solaris.svg")}
            image={require("../images/solaris.jpg")}
          />
          <Tool
            class="Tool Hyperspace"
            link="/hyperspace"
            title="Hyperspace"
            logo={require("../images/hyperspace_logo_w.png")}
            image={require("../images/hyperspace.jpg")}
          />
           <Tool
            class="Tool PPMS"
            link="/ppms"
            title="PPMS Light"
            logo={require("../images/ppms.svg")}
            image={require("../images/ppms.jpg")}
          />
          <Tool
            class="Tool Sirius"
            link="/sirius"
            title="Sirius"
            logo={require("../images/sirius.svg")}
            image={require("../images/sirius.jpg")}
          />
            <Tool
            class="Tool IFR"
            link="/ifr"
            title="Innovation & Feature Repository"
            logo={require("../images/ifr.svg")}
            image={require("../images/ifr.jpg")}
          />
          <Tool
            class="Tool Lucid"
            link="/lucid"
            title="Lucid"
            logo={require("../images/lucid.svg")}
            image={require("../images/lucid.jpg")}
          />
          <Tool
            class="Tool Toby"
            link="/tobi"
            title="Tobi"
            logo={require("../images/toby.svg")}
            image={require("../images/toby.jpg")}
          />
          <Tool
            class="Tool STN"
            link="/stn"
            title="SAP Transformation Navigator"
            logo={require("../images/stn.svg")}
            image={require("../images/stn.jpg")}
          />
           <Tool
            class="Tool Polaris"
            link="/polaris"
            title="Polaris"
            logo={require("../images/polaris.svg")}
            image={require("../images/polaris.jpg")}
          />
           <Tool
            class="Tool Solaris"
            link="/solaris"
            title="Solaris"
            logo={require("../images/solaris.svg")}
            image={require("../images/solaris.jpg")}
          />
          
        </ItemsCarousel>
      </div>
    )
  }
}
