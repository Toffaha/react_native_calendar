import React from 'react'
import {createBottomTabNavigator} from 'react-navigation'

import MonthView from './MonthView'
import EventList from './EventList'

import {darkColor, lightColor, lighterColor} from '../styles/noCSSILoveIt'

export const AppNavigator = createBottomTabNavigator({
    Calendar: MonthView,
    Events: EventList,    
}, {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarOptions: {
          activeTintColor: '#F5F5F6',
          inactiveTintColor: '#cccccc',
          style: {
            backgroundColor: darkColor,
          }
      }
    })
},
)