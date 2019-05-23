import React from "react"

const Job = props => (
  <a
    href={props.joblink}
    className="JobLinks"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="Button">
      <p>{props.jobtitle}</p>
      <img alt="arrow" src={require("../images/arrow.svg")} />
    </div>
  </a>
)

export default Job
