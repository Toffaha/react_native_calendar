import {combineReducers} from 'redux'
import DialogReducer from './DialogReducer'

const index = combineReducers({
    dialog: DialogReducer,
})

export default index