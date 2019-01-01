import {combineReducers} from 'redux'
import {dialogVisibility, dialogDate} from './DialogReducer'
import {EventReducer} from './EventReducer'
import {navReducer} from './nav'

const index = combineReducers({
    nav: navReducer,
    visibility: dialogVisibility,
    date: dialogDate,
    existingEvents: EventReducer,
})

export default index