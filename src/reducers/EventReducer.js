import {AsyncStorage} from 'react-native'

const initialState = []
AsyncStorage.getItem('events', (err, result) => {
    console.log(result)
    initialState.push(JSON.parse(result))
})

export const EventReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_EVENT':
            return [...state, action.payload]
        default:
            return [...state]
    }
}
