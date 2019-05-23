import React from "react"
import Mindset from "../components/mindset"
import Draggable from "react-draggable"

class Mindsets extends React.Component {
  render() {
    return (
      <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        scale={1}
        bounds={{ left: -1800, right: 0 }}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
      >
        <div className="Mindset handle">
          <Mindset
            title="Continous Delivery"
            image={require("../images/a.gif")}
            text="100% of our teams have a CI/CD pipeline. Frequent deployment
(between daily and 6-weekly)"
          />
          <Mindset
            title="Product"
            image={require("../images/b.gif")}
            text="Stable teams working on a product permanently"
          />
          <Mindset
            title="Agile"
            image={require("../images/c.gif")}
            text="100% of our teams are doing Scrum. Teams empowered to build and
          extend the product. Flat hierarchies - fast decision making."
          />
          <Mindset
            title="Service"
            image={require("../images/d.gif")}
            text="Delivering end-to-end service, not only tools. Knowing our user
          personally."
          />
          <Mindset
            title="DevOps"
            image={require("../images/e.gif")}
            text="Development teams are in-charge of maintenance and operations."
          />
          <Mindset
            title="Innovation"
            image={require("../images/f.gif")}
            text="Welcoming new and crazy ideas (Crowdfunding). Exploring new ways of
          working (Hackatons). TGIF (10% Innovation)"
          />
          <Mindset
            title="User Experience"
            image={require("../images/g.gif")}
            text="User Satisfaction measured regularly (SUS). UX Designers in all
          teams. Direct end user interaction."
          />
          <Mindset
            title="Data-driven"
            image={require("../images/h.gif")}
            text="Usage tracking across all tools. KPIs to measure
          return-on-investment."
          />
          <div className="Card" />
        </div>
      </Draggable>
    )
  }
}

export default Mindsets
