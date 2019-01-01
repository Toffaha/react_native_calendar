import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import store from './src/configStore'
import {Provider, connect} from 'react-redux'
import { reduxifyNavigator } from 'react-navigation-redux-helpers';

import {AppNavigator} from './src/routes'

const Application = reduxifyNavigator(AppNavigator, 'root')
const mapStateToProps = (state) => ({
  state: state.nav,
})
const AppWithNavigationState = connect(mapStateToProps)(Application)

export default class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <AppWithNavigationState/>
      </Provider>
    )
  }
}