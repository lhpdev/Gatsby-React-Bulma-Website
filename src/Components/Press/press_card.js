import React, { Component } from 'react'

export default class PressCard extends Component {
  render() {
    return (
      <a href={this.props.link}>
        <div className="card-press">
          <div className="press-image-section">
            <img className="press-image" src={this.props.image_src} />
          </div>
          <div className="press-content-section">
            <h2 className="title is-3">{this.props.title}</h2>
            { !!this.props.description && 
            <p>{this.props.description}</p>
            }
            <p className="press-date">{this.props.date}</p>
          </div>
        </div>
      </a>
    );
  }
}
