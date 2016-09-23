import React, { PropTypes } from 'react';

import BlogZ from '../components/BlogZhmo';
import BlogCard from '../components/BlogCard'

class Blog extends React.Component {
  constructor(){
    super();
    this.state = {
    bian:true
  }
  }
  handleClick(){

    this.setState({
      bian:false
    })
  }
  render () {
    return(
      <div className="Blog" onClick={this.handleClick.bind(this)}>
      {this.state.bian ? <BlogZ /> : <BlogCard />}

    </div>
    )
  }
}

export default Blog;
