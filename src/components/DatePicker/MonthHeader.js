import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import {mainColor, lightColor, darkColor} from '../../styles/noCSSILoveIt'


const MonthHeader = ({text}) => (
    <View
        style={styles.container}
    >
        <Text style={styles.title}>{text}</Text>
    </View>
)
const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      padding: 10
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: mainColor,

    },
    title: {
        fontSize: 25,
    }
})

export default MonthHeader