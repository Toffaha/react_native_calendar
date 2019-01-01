import React, { Component } from 'react'
import { Alert, View, AsyncStorage} from 'react-native'
import moment from 'moment'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import DateGrid from './DateGrid'
import MonthHeader from './MonthHeader'
import {setDialogVisibility, setDialogDate} from '../../actions/DialogActions'


class DatePicker extends Component {
    constructor(){
        super()
        this.state = {
            today: moment(),
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
                datePress={(day) => {
                    if(day>0) {
                        let eventDay = idag.clone().date(day).format('DD-MM-YYYY')
                        this.props.setDialogDate(eventDay)
                        this.props.setDialogVisibility(true)
                        AsyncStorage.getItem('events', (err, result) => {
                            console.log('memory: ',result)
                        })
                    }else {
                        AsyncStorage.removeItem('events')
                        AsyncStorage.getItem('events', (err, result) => {
                            console.log(result)
                        })
                    }
                }}
            />
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({setDialogVisibility, setDialogDate}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(DatePicker)