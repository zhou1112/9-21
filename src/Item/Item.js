import React, { PropTypes } from 'react';

import { getMd } from '../uitls/Helper';

import marked from 'marked';
import Hs from 'highlight.js'
class Item extends React.Component {
  constructor(){
    super();
    this.state={
      data:"",
      wait:true
    }
  }
  componentDidMount(){
    getMd(this.props.params.url)
      .then( (recData) => {
        //console.log(recData.getJson);
          this.setState({
            data:recData.getMd,
            wait:false
          })
      });
  }
  render () {
    let content = this.state.wait ? '~亲· 稍等' : marked(this.state.data)
    marked.setOptions({
      highlight: function (code) {
        return Hs.highlightAuto(code).value;
          }
      });
    return(
      <div>
        <div dangerouslySetInnerHTML={{__html:content}} className="post-content"/>
      </div>
    )
  }
}

export default Item;
