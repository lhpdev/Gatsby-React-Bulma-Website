
import React from 'react'
import { Link } from 'gatsby'

const ReferencesContainer = (props) => (
  <div className="container references-container">
    <h1 className="title">{props.title}</h1>
    <div className="text-section-content">
      <div className="description">
        <p>{props.description}</p>
        <Link to={props.subjectPath}>{props.subjectDesc}</Link>
      </div>
      <div className="article-section">
        <img src={props.imagePath} />
        <h2>{props.source}</h2><a href={props.articlePath}>{props.articleTitle}</a>
      </div>
    </div>
  </div>
)

export default ReferencesContainer
