import React, { PropTypes } from 'react'

import Card from '../components/Card';

import Img1 from '../images/21.jpg';
import Img2 from '../images/22.jpg';
import Img3 from '../images/23.jpg';
import Img5 from '../images/25.jpg';
import Img6 from '../images/26.jpg';

let Zhou = [
  {img:Img1,title:'第一张',desc:'2016-8-14',url:'a'},
  {img:Img2,title:'第二张',desc:'2016-8-15',url:'b'},
  {img:'http://www.qqzhuangban.com/uploadfile/2015/03/1/20150326065449602.jpg',title:'第三张',desc:'2016-8-16',url:'c'},
  {img:Img3,title:'第四张',desc:'2016-8-17',url:'d'},
  {img:Img5,title:'第五张',desc:'2016-8-17',url:'e'},
  {img:Img6,title:'第6张',desc:'2016-9-22',url:'f'}
]
class Work extends React.Component {
  render () {
    return(
      <div className="container-fluid">

        <div className="row">
          {Zhou.map((item,i) => <Card {...item} key={i} />)}
        </div>
      </div>
    )
  }
}


export default Work;
