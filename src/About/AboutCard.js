


import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class  AboutCard extends React.Component {
  render () {
    return(
       <MuiThemeProvider>
        <RaisedButton label="Default" />
       </MuiThemeProvider>
    )
  }
}

export default AboutCard;
