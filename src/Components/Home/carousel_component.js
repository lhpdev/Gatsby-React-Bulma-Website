import React, { Component } from 'react'

import RatingCard from './rating_card'

class Carousel extends Component {
  render () {
    return (
      <div className="columns"> 
        <RatingCard text="I had an unexpected fee come up which made me short on my rent and this app allowed me to pay my rent in full and on time" author="Aiden Ward" />
        <RatingCard text="It helped me to pay bills that are due before I get paid!! Glad I don’t have to pay late fees anymore!" author="Pamela Franklin" />
        <RatingCard text="Works for me. Single mom of three and this app helps me pay bills on time if I need an advance and not get charged late fees when bills are due one day after payday. [Even monthly membership] is worth more than $50 in late fees to me." author="Emma Southee" />      
      </div>
    );
  }
}

export default Carousel

