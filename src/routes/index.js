import {createBottomTabNavigator} from 'react-navigation'
import Icon from 'react-native-ionicons'
import Perus from './perus'
import React from 'react'

export const AppNavigator = createBottomTabNavigator({
    Calendar: Perus,
    
}, {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        let iconName
        switch (navigation.state.routeName) {
            case 'Calendar':
                iconName='grid'
            default:
                break;
        }
        return <Icon name={iconName} />
      },  
    }),
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'green'
    }
})