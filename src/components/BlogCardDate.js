
import React, { PropTypes } from 'react';
import { hashHistory } from 'react-router';
import { Link } from 'react-router';
import bg from '../images/12.jpg';
class BlogCardDate extends React.Component {
  handleJump(){
    let address = this.props.url;
    hashHistory.push(`/item/${address}`)
  }
  render () {
    let styles = {
      box:{
        width:'80%',
        height:'200pxs',
        margin:'20px auto',
        backgroundImage:`url(${bg})`,
        backgroundSize:'cover',
        backgroundPosition:'50% 50%',
        overflowY:'hidden',
        borderRadius:'20px',
          boxShadow: '0 0 1px 3px #B39DDB'
      },
      title:{
        backgroundColor:'#CE93D8',
        padding:'10px',
        opacity:'0.3'
      },
      h3:{
        width:'60px',
        height:'60px',
        borderRadius:'50%',
        backgroundColor:'#B39DDB',
        margin:'0 auto',
        zIndex:'100'
      },
      p:{
        textIndent:'20px',
        fontSize:'20px',
        color:'#4527A0',
        padding:'0 20%'
      },
      span:{
        display:'block',
        margin:'20px auto',
        width:'80px',
        height:'50px',
        borderRadius:'10px',
        backgroundColor:'#CE93D8',
        textAlign:'center',
        lineHeight:'50px'
      }
    }
      let address = `item/${this.props.url}`;
    return(
        <div style={styles.box}>
          <div style={styles.title}>
            <h3 style={styles.h3}> {this.props.title}</h3>
          </div>
          <article style={styles.p}> {this.props.artical}</article>
          <Link to={address} style={styles.span} onClick={this.handleJump.bind(this)}>more</Link>
        </div>

    )
  }
}
BlogCardDate.defaultProps={
title:'',
artical:''
}
export default BlogCardDate;
