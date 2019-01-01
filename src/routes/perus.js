import DatePicker from '../components/DatePicker/index'
import Dialog from '../components/Dialog/index'
import React, {Component} from 'react'

class Perus extends Component {
    static navigationOptions = () => ({
        
    })
    render(){
        return(<>
            <DatePicker/>
            <Dialog/>
        </>)
    }
}

export default Perus