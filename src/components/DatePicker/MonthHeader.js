import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import moment from 'moment'

const MonthHeader = ({text, subtract, add}) => (
    <View
        style={styles.container}
    >
        <TouchableOpacity
            onPress={subtract}
            style={styles.button}
        >
            <Text>subtract</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{text}</Text>
        <TouchableOpacity
            onPress={add}
            style={styles.button}
        >
            <Text>add</Text>
        </TouchableOpacity>
    </View>
)
const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      padding: 10
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 15,
    },
    title: {
        fontSize: 25,
    }
})

export default MonthHeader