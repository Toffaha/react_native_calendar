const dialogVisibility = (state = false, action) => {
    switch(action.type) {
        case 'SET_DIALOG_VISIBILITY':
            return action.payload
        default:
            return state
    }
}
export default dialogVisibility