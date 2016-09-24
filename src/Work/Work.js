import React, { PropTypes } from 'react'

import Card from '../components/Card';

import Img1 from '../images/21.jpg';
import Img2 from '../images/22.jpg';
import Img3 from '../images/23.jpg';
import Img4 from '../images/24.jpg';
import Img5 from '../images/25.jpg';
import Img6 from '../images/26.jpg';

let Zhou = [
  {img:Img1,title:'第一张',desc:'github',href:'https://github.com/',url:'a'},
  {img:Img2,title:'第二张',desc:'bootstrap',href:'http://react-bootstrap.github.io/',url:'b'},
  {img:Img4,title:'第三张',desc:'echarts',href:'http://echarts.baidu.com/examples.html#chart-type-map',url:'c'},
  {img:Img3,title:'第四张',desc:'material-ui',href:'http://www.material-ui.com/#/components/app-bar',url:'d'},
  {img:Img5,title:'第五张',desc:'lodash',href:'http://lodashjs.com/docs/',url:'e'},
  {img:Img6,title:'第6张',desc:'d3',href:'https://d3js.org/',url:'f'}
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
