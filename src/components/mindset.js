import React from "react"

const Mindset = props => (
  <div className="Card">
    <img draggable="false" alt={props.text} src={props.image} />
    <h6>
      {props.title} <br /> Mindset.
    </h6>
    <p style={{margin:"0", width:"250px"}}>{props.text}</p>
  </div>
)

export default Mindset
