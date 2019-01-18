export const WeatherReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DATES_WITH_WEATHER':
            return [...state, action.payload]
        default:
            return state
    }
}