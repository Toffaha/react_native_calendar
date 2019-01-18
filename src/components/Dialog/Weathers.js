import React from 'react'
import moment from 'moment'
import {TouchableOpacity, StyleSheet, Text, FlatList, View} from 'react-native'
import { textColor } from '../../styles/noCSSILoveIt';

const Weathers = ({weathers, date, icon}) => {
    const today = []
    weathers.forEach(weather => {
        if(weather.dt_txt.slice(0,10) === date) {
            today.push(weather)
        }
    })
    console.log(today)
    console.log(today[0].weather[0].main)
    const content = <View style={styles.container}>
        {icon(today[0].weather[0].main)}
        <Text>{Math.round(today[0].main.temp)}°C</Text>
    </View>
    return(
        content
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 20,
        top: 10
    }    
})

export default Weathers