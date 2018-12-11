import React, {Component} from 'react';
import {Alert} from 'react-native'
import Dialog from './DialogComponent'

class PopUpDialog extends Component {
    constructor(props){
        super(props)
        this.state={
            showDialog: true,
            importance: '',
            title: '',
            date: '',
        }
    }
    render(){
    return(
        <Dialog
            handleDateChange={(number) => {
                if(number <= 31 && number >= 0) {
                    this.setState({date: number})
                } else {
                    Alert.alert('Enter a valid date')
                }
            }}
            handleTitleChange={(text) => this.setState({title: text})}
            handleImportanceChange={value => this.setState({importance: value})}
            date={this.state.date}
            destroy={() => this.setState({showDialog: false})}
            showDialog={this.state.showDialog}
            importance={this.state.importance}
        />
    )}
}

export default PopUpDialog