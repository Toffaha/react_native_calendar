import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures'
import {mainColor, lightColor, darkColor} from '../../styles/noCSSILoveIt'

const DateGrid = ({days, subtract, add, datePress, eventsThisMonth, eventDayer, today, monthAndYear}) => {
    console.log(monthAndYear)
    console.log(today)
    const header = <View style={styles.header}>
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((letter, i) => (
           <Text style={styles.letters} key={i}>{letter}</Text>
        ))}
    </View>
    let rows = []
    let offset = days[0].day-1
    if (offset < 0) offset = 6
    let k = 0
    const eventDays = []
    eventsThisMonth.forEach(event => {
        eventDays.push(event.dateForGrid)
    })

    for(let i = 0; i < 6; i++) {
        let row = []
        if(i === 0) {
            for (let j = 0; j < offset; j++) {
                row.push(null)
            }
            for(let j = offset; j < 7; j++) {
                row.push(days[k++].date)
            }
        }else {
            for(let j = 0; j < 7; j++) {
                if(k < days.length) {
                    row.push(days[k++].date)
                }else {
                row.push(null)
                }
            }
        }
        rows.push(row)
    }
    
    const body = rows.map((row, i) => <View key={i} style={styles.body}>
        {row.map((day, j) => {
            return(<View key={j} style={styles.dayContainer}>
                {`${day}-${monthAndYear}` === today ? (<View style={styles.today}></View>) : null}
                <Text onPress={() => datePress(day)} style={[styles.days, eventDays.includes(day) ? eventDayer(day) : null]}>{day}</Text> 
            </View>)
        })}
    </View>)

    const config = {
        velocityThreshold: 0.8,
        directionalOffsetThreshold: 80
    }

    return(
        <GestureRecognizer
            onSwipeLeft={add}
            onSwipeRight={subtract}
            config={config}
        >
        <View style={styles.everythingIGuess}>
            {header}
            {body}
        </View>
        </GestureRecognizer>
    )
}
const styles = StyleSheet.create({
    dayContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 25,
        width: 58, 
        height: 40,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: mainColor,
        
    },
    everythingIGuess: {
        backgroundColor: mainColor,

    },
    body: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: mainColor,
    },
    days: {
        fontSize: 20,
        textAlign: 'center',
    },
    today: {
        position: 'absolute',
        height: 37,
        width: 37,
        zIndex: -1,
        backgroundColor: lightColor,
        borderRadius: 100/2,
    },
    //importance colors in index.js
    letters: {
        textAlign: 'center',
        fontSize: 20,
        width: 58,
    }
})
export default DateGrid