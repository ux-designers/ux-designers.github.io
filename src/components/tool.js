import React from "react"
import { Link } from "gatsby"

const Tool = props => (
  <div className={props.class}>
    <img
      draggable="false"
      alt={props.title}
      className="ToolsBackground"
      src={props.image}
    />
    <Link draggable="false" to={props.link} className="Links">
      <div className="ToolsTitle">
        <h6>{props.title}</h6>
      </div>
    </Link>
    <img draggable="false" alt={props.title} src={props.logo} />
  </div>
)

export default Tool
