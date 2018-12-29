import React, { Component } from 'react';
import {Alert, AsyncStorage} from 'react-native'

import DialogComponent from './DialogComponent';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {setDialogVisibility, setDialogDate} from '../../actions/DialogActions'


class PopUpDialog extends Component {
    constructor(){
        super()
        this.state = {
            importance: '',
            title: '',
            existingEvents: [],
        }
    }
    render(){
        return(
            <DialogComponent
                showDialog={this.props.visibility}
                handleDateChange={(number) => {
                    if(number <= 31 && number >= 0) {
                        this.setState({date: number})
                    } else {
                        Alert.alert('Enter a valid date')
                    }
                }}
                handleTitleChange={(text) => this.setState({title: text})}
                handleImportanceChange={value => this.setState({importance: value})}
                date={this.props.date}
                save={() => {
                    const newEvent = {date: this.props.date, title: this.state.title, importance: this.state.importance}
                    this.setState({existingEvents: [...this.state.existingEvents, newEvent]}, () => {
                        AsyncStorage.setItem('events', JSON.stringify(this.state.existingEvents))
                    })
                    
                }}
                destroy={() => this.props.setDialogVisibility(false)}
                importance={this.state.importance}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        visibility: state.visibility,
        date: state.date,
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({setDialogVisibility, setDialogDate}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PopUpDialog)