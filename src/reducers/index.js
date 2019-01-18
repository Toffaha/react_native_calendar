import {combineReducers} from 'redux'
import {dialogVisibility, dialogDate} from './DialogReducer'
import {EventReducer} from './EventReducer'
import {navReducer} from './nav'
import {WeatherReducer} from './WeatherReducer'

const index = combineReducers({
    nav: navReducer,
    visibility: dialogVisibility,
    date: dialogDate,
    existingEvents: EventReducer,
    weathers: WeatherReducer,
})

export default index