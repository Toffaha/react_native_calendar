import React, { Component } from 'react'
import { View} from 'react-native'
import moment from 'moment'

import DateGrid from './DateGrid'
import MonthHeader from './MonthHeader'
import PopUpDialog from '../Dialog/index'


class DatePicker extends Component {
    constructor(props){
        super(props)
        this.state = {
            today: moment(),
            showDialog: false,
        }
    }
    getDaysInMonth (year, month) {
        let initial = new Date(year, month, 1)
        let result = []
        while(initial.getMonth() === month) {
            console.log(initial)
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
        console.log(idag.month())
        return(
            <View>
            <MonthHeader
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
                text={idag.format('MMMM')}
            />
            <DateGrid
                days={this.getDaysInMonth(idag.year(), idag.month())}
                subtract={() => {
                    console.log('swiped left')
                    idag.subtract(1, 'M')
                    this.setState({
                        today: idag.clone()
                    })
                }}
                add={() => {
                    console.log('swiped right')
                    idag.add(1, 'M')
                    this.setState({
                        today: idag.clone()
                    })
                }}
                datePress={(day) => {
                    let eventDay = idag.clone().date(day).format('DD-MM-YYYY')
                    console.log(eventDay)
                }}
            />
            
            </View>
        )
    }
}

export default DatePicker