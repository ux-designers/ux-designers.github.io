import React from "react"
import range from "lodash/range"
import styled from "styled-components"
import ItemsCarousel from "react-items-carousel"
import Mindset from "../components/mindset"

const noOfItems = 9
const noOfCards = 3
const autoPlayDelay = 2800
const chevronWidth = 80

const Wrapper = styled.div`
  padding: 0 ${chevronWidth}px;
  max-width: 1000px;
  margin: 0 auto;
`

const SlideItem = styled.div`
  height: 400px;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`

const carouselItems = range(noOfItems).map(index => (
  <SlideItem key={index}>{index + 1}</SlideItem>
))

export default class AutoPlayCarousel extends React.Component {
  state = {
    activeItemIndex: 0,
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, autoPlayDelay)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick = () =>
    this.setState(prevState => ({
      activeItemIndex:
        (prevState.activeItemIndex + 1) % (noOfItems - noOfCards + 1),
    }))

  onChange = value => this.setState({ activeItemIndex: value })

  render() {
    return (
      <Wrapper>
        <ItemsCarousel
          gutter={12}
          numberOfCards={noOfCards}
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={this.onChange}
          rightChevron={
            <button className="ChevronRight">
              <img alt="medium" src={require("../images/right.svg")} />
            </button>
          }
          leftChevron={
            <button className="ChevronLeft">
              <img alt="medium" src={require("../images/left.svg")} />
            </button>
          }
          chevronWidth={chevronWidth}
          outsideChevron
          showSlither={false}
          firstAndLastGutter={false}
        >
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
        </ItemsCarousel>
      </Wrapper>
    )
  }
}
