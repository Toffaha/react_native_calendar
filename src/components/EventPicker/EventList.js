import React from 'react'
import { Platform, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'

import {mainColor} from '../../styles/noCSSILoveIt'


const EventList = ({data, colorPicker, onLongPress}) => {
        
    return(<View style={styles.container}>
        <FlatList
            data={data}
            keyExtractor={(item, index) => `${item}--${index}`}
            renderItem={({index, item}) => { 
                return (<TouchableOpacity onLongPress={() => onLongPress(item)} style={[styles.event, colorPicker(item.importance)]}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                    <Text style={styles.importance} key={index}>Importance: {item.importance}</Text>
                </TouchableOpacity>)
            }}
        />
    </View>)
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: mainColor,
    },
    event: {
        backgroundColor: '#6200EE',
        borderRadius: 15,
        height: 110,
        width: 400,
        marginVertical: 2,
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