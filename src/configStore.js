import { createStore, applyMiddleware } from 'redux'
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers'

import reducers from './reducers/index'

const middleware = createReactNavigationReduxMiddleware('root', state => state.nav)

const store = createStore(reducers, applyMiddleware(middleware))

export default store