import React from "react"
import Tool from "../components/tool"
import Draggable from "react-draggable"

class Tools extends React.Component {
  render() {
    return (
      <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        scale={1}
        bounds={{ left: -2000, right: 0 }}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
      >
        <div className="Tools handle">
          <Tool
            class="Tool STN"
            link="/stn"
            title="SAP Transformation Navigator"
            logo={require("../images/stn.svg")}
            image={require("../images/stn.png")}
          />
          <Tool
            class="Tool Sirius"
            link="/sirius"
            title="Sirius"
            logo={require("../images/sirius.svg")}
            image={require("../images/sirius.png")}
          />
          <Tool
            class="Tool PPMS"
            link="/ppms"
            title="PPMS Light"
            logo={require("../images/ppms.svg")}
            image={require("../images/ppms.png")}
          />
          <Tool
            class="Tool Polaris"
            link="/polaris"
            title="Polaris"
            logo={require("../images/polaris.svg")}
            image={require("../images/polaris.png")}
          />
          <Tool
            class="Tool Lucid"
            link="/lucid"
            title="Lucid"
            logo={require("../images/lucid.svg")}
            image={require("../images/lucid.png")}
          />
          <Tool
            class="Tool Solaris"
            link="/solaris"
            title="Solaris"
            logo={require("../images/solaris.svg")}
            image={require("../images/solaris.png")}
          />
          <Tool
            class="Tool Toby"
            link="/tobi"
            title="Tobi"
            logo={require("../images/toby.svg")}
            image={require("../images/toby.png")}
          />
          <Tool
            class="Tool IFR"
            link="/ifr"
            title="Innovation & Feature Repository"
            logo={require("../images/ifr.svg")}
            image={require("../images/ifr.png")}
          />
        </div>
      </Draggable>
    )
  }
}

export default Tools
