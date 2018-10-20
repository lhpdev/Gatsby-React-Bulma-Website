import React from 'react'

const RatingCard = (props) => (
  <div className="column ratings">
      <span className="stars"></span>
      <div className="content">{props.text}</div>
      <p>{props.author}</p>
  </div>
)

export default RatingCard