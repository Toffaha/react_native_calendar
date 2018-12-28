import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import store from './src/configStore'
import {Provider} from 'react-redux'

import DatePicker from './src/components/DatePicker/index'

export default class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <DatePicker/>
      </Provider>
    )
  }
}