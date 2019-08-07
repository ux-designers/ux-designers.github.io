import React from "react"
import { Link } from "gatsby"

const Tool = props => (
  <Link draggable="false" to={props.link} className="Links">
    <div key={props.key} className={props.class}>
      <img
        draggable="false"
        alt={props.title}
        className="ToolsBackground"
        src={props.image}
      />

      <div className="ToolsTitle">
        <h6>{props.title}</h6>
      </div>

      <img draggable="false" alt={props.title} src={props.logo} />
    </div>
  </Link>
)

export default Tool
