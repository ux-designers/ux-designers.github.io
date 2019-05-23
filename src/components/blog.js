import React from "react"

const Blog = props => (
  <a href={props.bloglink} target="_blank" rel="noopener noreferrer">
    <div className="BlogTiles">
      <img alt={props.blogtitle} src={props.blogimage} />
      <p>
        <b>{props.blogtitle}</b>
      </p>
      <p>{props.excerpt}</p>
    </div>
  </a>
)

export default Blog
