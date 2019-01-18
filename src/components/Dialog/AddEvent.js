import React from 'react'
import {View, TextInput, Picker, TouchableOpacity, StyleSheet, Text} from 'react-native'
import {textColor} from '../../styles/noCSSILoveIt'

const addEvent = ({importance, date, handleDateChange, handleTitleChange, handleImportanceChange, save}) =>  <>
    <View><Text style={styles.title}>Add a new event</Text></View>
    <TextInput
        style={styles.eventStuff}
        placeholder='Enter tite'
        onChangeText={handleTitleChange}
    />
    <View style={styles.miniContainer}>
        <Text style={styles.eventStuff}>Date: </Text>
        <TextInput
            keyboardType='numeric'
            onChangeText={handleDateChange}
            value={date}
        />
    </View>
    
    <View style={styles.miniContainer}>
        <Text style={styles.eventStuff}>Importance: </Text>
        <Picker
            style={{height: 20,width:100}}
            selectedValue={importance}
            onValueChange={handleImportanceChange}
        >
            <Picker.Item label='Low' value='low'/>
            <Picker.Item label='Medium' value='medium'/>
            <Picker.Item label='High' value='high'/>
        </Picker>
    </View>
    
</>

const styles = StyleSheet.create({
    eventStuff: {
        fontSize: 18,
        fontWeight: '300',
        color: textColor,
        margin: 0,
        padding: 0
    },
    title: {
        marginTop: 15,
        marginBottom: 8,
        fontSize: 20,
        fontWeight: '400',
        color: textColor,
    },
    miniContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 0,
        padding: 0,
    },
    submitButton: {
        backgroundColor: 'rgb(53, 130, 255)',
        borderRadius: 5,
        width: 70,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        //alignSelf: 'flex-end',
        position: 'absolute',
        right: 10,
        bottom: -20
    }
})

export default addEvent