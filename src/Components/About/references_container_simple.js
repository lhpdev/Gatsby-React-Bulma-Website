import React from 'react'
import { Link } from 'gatsby'

const ReferencesContainerSimple = (props) => (
  <div className="references-container">
  <h1 className="title">{props.title}</h1>
  <div className="text-section-content">
    <div className="description">
      <p>
        {props.description}
      </p>
    </div>
    <div className="article-section">
      <h2>{props.source}</h2><Link to={props.articlePath}>{props.articleTitle}</Link>
    </div>
  </div>
</div>
)

export default ReferencesContainerSimple
