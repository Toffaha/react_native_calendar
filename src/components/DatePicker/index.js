import React, { Component } from 'react'
import { Alert, View, AsyncStorage} from 'react-native'
import moment from 'moment'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import DateGrid from './DateGrid'
import MonthHeader from './MonthHeader'
import PopUpDialog from '../Dialog'
import {setDialogVisibility} from '../../actions/index'


class DatePicker extends Component {
    constructor(){
        super()
        this.state = {
            today: moment(),
            importance: '',
            title: '',
            date: '',
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
    render() {
        let idag = this.state.today.clone()
        return(
            <View>
            <MonthHeader
                subtract={() => {
                    console.log('ANELE')
                }}
                add={() => {
                    idag.add(1, 'M')
                    this.setState({
                        today: idag.clone()
                    })
                }}
                text={idag.format('MMMM')}
            />
            <DateGrid
                days={this.getDaysInMonth(idag.year(), idag.month())}
                subtract={() => {
                    console.log('moi')
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
                datePress={(day) => {
                    if(day>0) {
                        let eventDay = idag.clone().date(day).format('DD-MM-YYYY')
                        console.log(eventDay)
                        this.setState({date: eventDay})
                        this.props.setDialogVisibility(true)
                    }
                }}
            />
            <PopUpDialog
                showDialog={this.props.dialog}
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
                save={() => {
                    const eventToBeSaved = {title: this.state.title, date: this.state.date, importance: this.state.importance}
                    const existingEvents = AsyncStorage.getItem('events')
                    const events = JSON.parse(existingEvents)
                    if(!events) events = []
                    events.push(eventToBeSaved)
                    await AsyncStorage.setItem('events', JSON.stringify(events))
                      .then(() => {
                          console.log('saved')
                      })
                      .catch((err) => {
                          console.log(err)
                      })
                }}
                destroy={() => this.props.setDialogVisibility(false)}
                importance={this.state.importance}
            />
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        dialog: state.dialog,
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({setDialogVisibility}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(DatePicker)