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
    marked.setOptions({
      highlight: function (code) {
        return Hs.highlightAuto(code).value;
      }
    });
    return(
      <div className="post-content">
        {this.state.wait ? '请稍等' : <div dangerouslySetInnerHTML={{__html: marked(this.state.data)}} />}
      </div>
    )
  }
}

export default Item;
