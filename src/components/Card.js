import React, { PropTypes } from 'react';

import img from '../images/21.jpg';
class Card extends React.Component {

  render () {
    return(
      <div className="col-xs-6 col-sm-4">
        <div className="thumbnail" style={{backgroundColor:'rgba(350,200,300,1)'}}>
          <img src={this.props.img} alt="..."/>
          <div className="caption">
            <h3>{this.props.title}</h3>
            <p>{this.props.desc}</p>
            <p><a className="btn btn-primary" role="button">Button</a></p>
          </div>
        </div>
      </div>
    )
  }
}
Card.defaultProps={
  title:'我是标题',
  desc:'我是描述',
  img:'http://img15.3lian.com/2015/f1/155/d/75.jpg'
}
export default Card;
