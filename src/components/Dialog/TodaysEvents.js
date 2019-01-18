import React from 'react'
import {TouchableOpacity, StyleSheet, Text, FlatList, View} from 'react-native'
import { textColor } from '../../styles/noCSSILoveIt';
//moi
const TodaysEvents = ({data, onLongPress, date, colorPicker}) =>  {
    const listHeight = data.length * 60 >= 150 ? 150 : data.length * 60
    const content = <>
        <View><Text style={styles.title}>Your events for {date}</Text></View>
        <FlatList style={{height: listHeight}}
                data={data}
                keyExtractor={(item, index) => `${item}--${index}`}
                renderItem={({index, item}) => { 
                    return (<TouchableOpacity style={styles.eventBoxes} onLongPress={() => onLongPress(item)}>
                        <Text style={styles.eventText} >{item.title}</Text>
                        <Text style={styles.eventText} >Importance: <Text style={[styles.eventText, colorPicker(item.importance)]}>{item.importance}</Text></Text>
                    </TouchableOpacity>)
                }}
        />
    </>
    return(
        content
    )
}

const styles = StyleSheet.create({
    title: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: '400',
        color: textColor,
    },
    eventText: {
        color: textColor,
    },
    eventBoxes: {
        borderBottomWidth: 1,
        justifyContent: 'center',
        borderBottomColor: textColor,

    },
})

export default TodaysEvents