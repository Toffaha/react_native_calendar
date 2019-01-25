import React from 'react'
import { Platform, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'

import {mainColor} from '../../styles/noCSSILoveIt'


const EventList = ({data, colorPicker, onLongPress}) => {
    console.log(data)
    
    const eventsExist = <View style={styles.container}>
        <FlatList
            data={data}
            keyExtractor={(item, index) => `${item}--${index}`}
            renderItem={({index, item}) => { 
                console.log(item, index)
                return (<TouchableOpacity onLongPress={() => onLongPress(index)} style={[styles.event, colorPicker(item.importance)]}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                    <Text style={styles.importance} >Importance: {item.importance}</Text>
                </TouchableOpacity>)
            }}
        />
    </View>
    const noEvents = <View style={styles.noEventContainer}>
        <Text style={styles.textOne}>You haven't saved any events yet</Text>
        <Text style={styles.textTwo}>(Create events by clicking on dates in Calendar view)</Text>
    </View>

    if(!Array.isArray(data) || !data.length) {
        return noEvents
    } else {
        return eventsExist
    }
}

const styles = StyleSheet.create({
    noEventContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textOne: {
        fontSize: 25,
        marginVertical: 10,
    },
    textTwo: {
        marginVertical: 10,
        fontSize: 15
    },
    container: {
        alignItems: 'center',
        backgroundColor: mainColor,
    },
    event: {
        backgroundColor: mainColor,
        borderRadius: 15,
        height: 110,
        width: 400,
        marginTop: 5,
        padding: 10,
    },
    importance: {
        color: '#f4f4f4',
        fontSize: 20,
        marginVertical: 2,
    },
    date: {
        color: '#f4f4f4',
        fontSize: 20,
        marginVertical: 2,

    },
    title: {
        color: '#f4f4f4',
        marginVertical: 2,
        fontSize: 20,
        marginTop: 1,
    },
})

export default EventList