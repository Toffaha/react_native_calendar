export const addEvent = (newEvent) => ({
    type: 'ADD_EVENT',
    payload: newEvent
})

export const sortEvents = () => ({
    type: 'SORT_EVENTS',
})

export const removeEvent = (eventToRemove) => {
    console.log('made it to the action', eventToRemove)
    return {
        type: 'REMOVE_EVENT',
        payload: eventToRemove
    }
}