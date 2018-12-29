import {combineReducers} from 'redux'
import {dialogVisibility, dialogDate} from './DialogReducer'

const index = combineReducers({
    visibility: dialogVisibility,
    date: dialogDate,
})

export default index