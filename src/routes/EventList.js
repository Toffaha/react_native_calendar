import React, {Component} from 'react'
import Icon from 'react-native-ionicons'


import EventPicker from '../components/EventPicker/index'

class EventList extends Component {
    static navigationOptions = () => ({
        tabBarIcon: () => (<Icon
            name='list-box'
        />)
    })
    render(){
        return(<>
            <EventPicker/>
        </>)
    }
}

export default EventList