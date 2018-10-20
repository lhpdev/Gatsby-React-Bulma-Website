import React, { Component } from 'react'

class QuestionCard extends Component {
  state = {
    open : false
  }

  onToggle(){
    this.setState({ open: !this.state.open })
  }

  render() {
    const { open } = this.state

    const { question, answer } = this.props

    return(
      <div className="faq-section">
        <p className="faq-question" onClick={ () => this.onToggle()}>{question}</p>
        { open &&
        <div className="faq-answer">
          {answer}
          <br />
        </div>
        }
      </div>
    );
  }
}

export default QuestionCard;
