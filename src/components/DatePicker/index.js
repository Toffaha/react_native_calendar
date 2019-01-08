import React, { Component } from 'react'
import { Alert, View, AsyncStorage, StyleSheet} from 'react-native'
import moment from 'moment'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import DateGrid from './DateGrid'
import MonthHeader from './MonthHeader'
import {setDialogVisibility, setDialogDate} from '../../actions/DialogActions'

import {lowPriority, mediumPriority, highPriority} from '../../styles/noCSSILoveIt'

class DatePicker extends Component {
    constructor(){
        super()
        this.state = {
            today: moment(),
            actuallyToday: moment().date(),
        }
    }
    getDaysInMonth (year, month) {
        let initial = new Date(year, month, 1)
        let result = []
        while(initial.getMonth() === month) {
            result.push({
                date: initial.getDate(),
                day: initial.getDay()
            })
            initial.setDate(initial.getDate()+1)
        }
        return result
    }
    thisMonthsEvents (){
        const events = []
        this.props.existingEvents.forEach(event => {
            if(event !== null) {
                const eventDay = moment(event.date, 'DD-MM-YYYY')
                if(eventDay.month() == this.state.today.month()) {
                    event.dateForGrid = eventDay.date()
                    events.push(event)
                }
            }
        })
        return events
    }
    
    render() {
        let idag = this.state.today.clone()
        
        return(
            <View>
            <MonthHeader
                text={idag.format('MMMM')}
            />
            <DateGrid
                days={this.getDaysInMonth(idag.year(), idag.month())}
                subtract={() => {   
                    idag.subtract(1, 'M')
                    this.setState({
                        today: idag.clone()
                    })
                }}
                add={() => {
                    idag.add(1, 'M')
                    this.setState({
                        today: idag.clone()
                    })
                }}
                today={this.state.actuallyToday}
                datePress={(day) => {
                    if(day>0) {
                        let eventDay = idag.clone().date(day).format('DD-MM-YYYY')
                        this.props.setDialogDate(eventDay)
                        this.props.setDialogVisibility(true)
                        AsyncStorage.getItem('events', (err, result) => console.log(result))
                    }
                }}
                eventsThisMonth={this.thisMonthsEvents()}
                eventDayer={(day) => {
                    let importance = this.thisMonthsEvents().find(event => event.dateForGrid === day).importance
                    switch (importance) {
                        case 'high':
                            return {color: highPriority}
                        case 'medium':
                            return {color: mediumPriority}
                        case 'low':
                            return {color: lowPriority}
                        default:
                            return {color: 'white'}
                    }
                }
                }
            />
            </View>
        )
    }
}



function mapStateToProps(state) {
    return {
        existingEvents: state.existingEvents,
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({setDialogVisibility, setDialogDate}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(DatePicker)