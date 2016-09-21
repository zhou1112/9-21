import React, { PropTypes } from 'react'
import { Link } from 'react-router'
class NavFooter extends React.Component {
  render () {
    return(
      <div className="nav-footer">
          <Link to="/" activeStyle={{color:'#9575CD'}} onlyActiveOnIndex={true} ><span className="glyphicon glyphicon-home"></span>Home</Link>
          <Link to="/work" activeStyle={{color:'#9575CD'}} ><span className="glyphicon glyphicon-fire"></span>Work</Link>
          <Link to="/blog" activeStyle={{color:'#9575CD'}} ><span className="glyphicon glyphicon-eye-open"> </span>Blog</Link>
          <Link to="/about" activeStyle={{color:'#9575CD'}} ><span className="glyphicon glyphicon-user"></span>About</Link>

      </div>
    )
  }
}

export default NavFooter;
