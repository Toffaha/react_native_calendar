import {createNavigationReducer} from 'react-navigation-redux-helpers'
import {AppNavigator} from '../routes'

export const navReducer = createNavigationReducer(AppNavigator)