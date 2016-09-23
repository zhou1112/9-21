import React, { PropTypes } from 'react';
import BlogCardDate from './BlogCardDate';

import { getJson } from '../uitls/Helper';


class BlogCard extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){
    getJson()
      .then( (recData) => {
        
          this.setState({
            data:recData.getJson,
            wait:false
          })
      });
  }
  render () {
    let BlogCardDates = this.state.data.map( (item,i) => <BlogCardDate {...item} key={i}/> );
    return(
      <div className="container-fluid">
        <div className="row" style={{marginTop:'20px'}}>

          {this.state.wait ? 'loading...' : BlogCardDates}
        </div>
      </div>
    )
  }
}

export default BlogCard;
