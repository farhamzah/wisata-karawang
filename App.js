import React, { Component } from 'react';
import  { AppRegistry, View } from 'react-native';
import Routes from './Routes.js'

class reactTutorialApp extends Component {
  render() {
    return(
    
      
      <Routes style = {{backgroundColor: 'white'}} />
      
  
    )
  }
}

export default reactTutorialApp
AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp)


