import React, { PropTypes } from 'react'

import Tx from '../images/14.jpg'
class About extends React.Component {
  render () {
    return(
      <div className="About">
        <img src={Tx}></img>
        <ul>
          <li>name:zhouzhou</li>
          <li>sex:men</li>
          <li>age:Twenty-four</li>
          <li>qq:1142296909</li>
        </ul>
        <h3 style={{color:'#9575CD'}}>About Me:</h3>
        <p>In the young season, I am willing to endure hardship involved, only through their own enthusiasm, proactive efforts to achieve their own value and makes the biggest contribution in the work: as a beginner, I have excellent ability to learn and enjoy learning, innovation, pursuit of excellence; as a participant, I have an honest and credible character, full of team cooperation spirit; as a leader, I am able to work with, decisive style, good communication and interpersonal skills. Economy and culture with the relevant professional knowledge training system, have a strong endurance, willpower and hard-working quality, serious and responsible work, positive enterprising, personality persistent optimism, the courage to face the difficulties and challenges.</p>
      </div>
    )
  }
}

export default About;
