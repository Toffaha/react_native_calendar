import React from 'react'
import {createBottomTabNavigator} from 'react-navigation'

import MonthView from './MonthView'
import EventList from './EventList'

import {darkColor, lightColor} from '../styles/noCSSILoveIt'

export const AppNavigator = createBottomTabNavigator({
    Calendar: MonthView,
    Events: EventList,    
}, {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarOptions: {
          style: {
            backgroundColor: darkColor,
            activeColor: lightColor,
          }
      }
    })
})