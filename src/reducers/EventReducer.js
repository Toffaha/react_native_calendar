import moment from 'moment'

export const EventReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_EVENT':
            return [...state, action.payload]
        case 'SORT_EVENTS':
            const newState = state.sort((a, b) => {
                return moment(a.date, "DD-MM-YYYY").diff(moment(b.date, "DD-MM-YYYY"))
            })
            return newState
        case 'REMOVE_EVENT':
            console.log('works')
            return [
                ...state.slice(0, action.payload), 
                ...state.slice(action.payload+1)
            ]
        default:
            //console.log('this just the default case')
            return state
    }
}
