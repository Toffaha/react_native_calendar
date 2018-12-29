export const dialogVisibility = (state = false, action) => {
    switch(action.type) {
        case 'SET_DIALOG_VISIBILITY':
            return action.payload
        default:
            return state
    }
}

export const dialogDate = (state = '', action) => {
    switch(action.type) {
        case 'SET_DIALOG_DATE':
            return action.payload
        default:
            return state
    }
}