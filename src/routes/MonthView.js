import DatePicker from '../components/DatePicker/index'
import Dialog from '../components/Dialog/index'
import React, {Component} from 'react'
import Icon from 'react-native-ionicons'


class MonthView extends Component {
    static navigationOptions = () => ({
        tabBarIcon: () => (<Icon
            name='grid'
        />)
    })
    render(){
        return(<>
            <DatePicker/>
            <Dialog/>
        </>)
    }
}

export default MonthView