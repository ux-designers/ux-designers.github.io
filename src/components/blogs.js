import React from "react"
import Blog from "../components/blog"

class Blogs extends React.Component {
  render() {
    return (
      <div className="Blogs">
        <Blog
          bloglink="https://medium.com/sap-tools/continuous-design-thinking-9a7c2530f6e0"
          blogimage={require("../images/offset_comp_744573@2x.png")}
          blogtitle="Continuous Design Thinking"
          excerpt="Our process for staying human-centered, no matter what!"
        />
        <Blog
          bloglink="https://medium.com/sap-tools/helping-others-shine-9f972286d981"
          blogimage={require("../images/blog2.png")}
          blogtitle="Helping Others Shine"
          excerpt="A look into our principles and process for crafting human-centered
          tools at SAP"
        />
        <Blog
          bloglink="https://medium.com/sap-tools/mailwave-how-we-are-designing-a-new-email-engagement-tool-4809e07775f8"
          blogimage={require("../images/blog3.png")}
          blogtitle="Mailwave — How we are designing a new email engagement tool"
          excerpt="Our Palo Alto tools team is responsible for generating and
          incubating new ideas for the broader SAP tools, and delivering
          them …"
        />
      </div>
    )
  }
}

export default Blogs
