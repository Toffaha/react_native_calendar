import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {AsyncStorage, View, StyleSheet} from 'react-native'

import EventList from './EventList'

import {removeEvent} from '../../actions/EventActions'

import {lowPriority, mediumPriority, highPriority, mainColor} from '../../styles/noCSSILoveIt'

class EventPicker extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    componentDidUpdate(prevProps){
        if(prevProps !== prevProps) {
            AsyncStorage.setItem('events', this.props.existingEvents)
        }
    }

    render(){
        return(
            <View style={styles.container}>
            <EventList
                onLongPress={(removeable) => {
                    console.log('long press achieved! the removeable:', removeable)
                    this.props.removeEvent(removeable)
                }}
                data={this.props.existingEvents}
                colorPicker={(importance) => {
                    switch(importance) {
                        case 'high':
                            return {backgroundColor: highPriority}
                        case 'medium':
                            return {backgroundColor: mediumPriority}
                        case 'low':
                            return {backgroundColor: lowPriority}
                        default:
                            return {backgroundColor: ''}
                    }
                }}
            />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: mainColor,
        flex: 1,
    }
})

const mapStateToProps = (state) => {
    return {
        existingEvents: state.existingEvents,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({removeEvent}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPicker)