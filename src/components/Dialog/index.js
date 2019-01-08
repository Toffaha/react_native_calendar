import React, { Component } from 'react';
import {Alert, AsyncStorage} from 'react-native'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import axios from 'axios'

import DialogComponent from './DialogComponent';
import {setDialogVisibility, setDialogDate} from '../../actions/DialogActions'
import {addEvent, sortEvents} from '../../actions/EventActions'


class PopUpDialog extends Component {
    constructor(){
        super()
        this.state = {
            importance: 'low',
            title: '',
            firstLoad: true,
        }
    }

    initialState = async() => {
        try {
            const serializedState = await AsyncStorage.getItem('events')
            console.log('serialized state',JSON.parse(serializedState))
            if (serializedState === null) {
                return []
            }
            return JSON.parse(serializedState)
        }catch (err) {
            return []
        }
    }

    currentWeather = async(lat, lon) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=0718cdfbc795cf404cb3a432d0405d08`)
            .then(result => result.json().then(result => console.log(result)), err => console.log(err))
    }

    componentDidMount() {
        
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position)
            const lat = position.coords.latitude
            const lon = position.coords.longitude
            this.currentWeather(lat, lon)
        }
        , (err) => console.log(err))  
        this.initialState()
          .then(result => {
                result.forEach(thing => {
                    this.props.addEvent(thing)
                })
                if(this.state.firstLoad) this.setState({firstLoad: false})          
            })
    }

    componentDidUpdate(prevProps) {
        if(prevProps.existingEvents !== this.props.existingEvents && !this.state.firstLoad) {
            console.log('Updating storage! Previous props:', prevProps.existingEvents, 'current props:', this.props.existingEvents)
            this.props.sortEvents()
            AsyncStorage.setItem('events', JSON.stringify(this.props.existingEvents))            
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
                handleImportanceChange={value => {
                    this.setState({importance: value})
                }}
                date={this.props.date}
                save={async() => {
                    const newEvent = {date: this.props.date, title: this.state.title, importance: this.state.importance}
                    this.props.addEvent(newEvent)
                    this.props.setDialogVisibility(false)
                }}
                destroy={() => this.props.setDialogVisibility(false)}
                importance={this.state.importance}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        visibility: state.visibility,
        date: state.date,
        existingEvents: state.existingEvents,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setDialogVisibility, setDialogDate, addEvent, sortEvents}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PopUpDialog)