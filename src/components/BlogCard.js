
import React, { PropTypes } from 'react'

import BlogCardDate from './BlogCardDate';


class BlogCard extends React.Component {
  render () {
    return(
      <div>
        {CardDate.map((item,i) => <BlogCardDate {...item} key={i} />)}

      </div>
    )
  }
}

export default BlogCard;
