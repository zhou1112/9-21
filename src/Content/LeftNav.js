import React, { PropTypes } from 'react'

import { Link } from 'react-router';
class LeftNav extends React.Component {
  render () {
    return(
      <div className="nav-leftnav">
      <h3>zhou@{this.props.title}</h3>
      <Link to="/" activeStyle={{color:'#9575CD'}} onlyActiveOnIndex={true} ><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link>
      <Link to="work" activeStyle={{color:'#9575CD'}} ><span className="glyphicon glyphicon-fire" aria-hidden="true"></span>Work</Link>
      <Link to="blog" activeStyle={{color:'#9575CD'}} ><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span>Blog</Link>
      <Link to="about" activeStyle={{color:'#9575CD'}} ><span className="glyphicon glyphicon-user" aria-hidden="true"></span>About</Link>
      </div>
    )
  }
}

export default LeftNav;
