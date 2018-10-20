import React from 'react'

const CardItem = (props) => (
  <div className="column">
      <span className={props.iconColor}>
        <i className={props.iconType}></i>
      </span>
      <h2><strong>{props.title}</strong></h2>
      <p>
        {props.description}
      </p>
  </div>
)

export default CardItem
