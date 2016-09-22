import React from 'react';

import { hashHistory } from 'react-router';

import bg from '../images/2.jpg'
class Hmoe extends React.Component {
  handleClick(){
    hashHistory.push('About');
  }
  render () {
    return(
      <div className="Home">
          <img src={bg}></img>
          <h3>Welcome to visit my website <p>I'm zhou zhou</p> <button onClick={this.handleClick.bind(this)}>cool me</button></h3>
          <h4>  Welcome to visit my website I'm zhou zhou</h4>
          
      </div>
    )
  }
}

export default Hmoe;
