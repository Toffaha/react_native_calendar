import moment from 'moment'

export const EventReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_EVENT':
            console.log('add event bro')
            return [...state, action.payload]
        case 'SORT_EVENTS':
            console.log('now u at sort events')
            const newState = state.sort((a, b) => {
                return moment(a.date, "DD-MM-YYYY").diff(moment(b.date, "DD-MM-YYYY"))
            })
            return newState
        case 'REMOVE_EVENT':
            console.log('works')
            return state.filter(event => event !== action.payload)
        default:
            //console.log('this just the default case')
            return state
    }
}
