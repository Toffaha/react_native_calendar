import {DialogContent} from 'react-native-popup-dialog'
import React from 'react'
import {View, TextInput, Picker, TouchableOpacity, StyleSheet, Text} from 'react-native'
//moi
const addEvent = ({importance, date, handleDateChange, handleTitleChange, handleImportanceChange, save}) =>  <DialogContent>
    <TextInput
        style={styles.eventTitle}
        placeholder='Enter tite'
        onChangeText={handleTitleChange}
    />
    <View style={styles.miniContainer}>
        <Text style={styles.title}>Date: </Text>
        <TextInput
            keyboardType='numeric'
            onChangeText={handleDateChange}
            value={date}
        />
    </View>
    
    <View style={styles.miniContainer}>
        <Text style={styles.title}>Importance: </Text>
        <Picker
            style={{height:50,width:100}}
            selectedValue={importance}
            onValueChange={handleImportanceChange}
        >
            <Picker.Item label='Low' value='low'/>
            <Picker.Item label='Medium' value='medium'/>
            <Picker.Item label='High' value='high'/>
        </Picker>
    </View>
    <TouchableOpacity
        style={styles.submitButton}
        onPress={save}
    >
        <Text style={{color: 'white', }}>Save</Text>
    </TouchableOpacity>
</DialogContent>

const styles = StyleSheet.create({
    eventTitle: {
        fontSize: 18,
        fontWeight: '400',
        color: 'rgb(40, 40, 40)',
    },
    title: {
        fontSize: 15,
        fontWeight: '400',
        color: 'rgb(40, 40, 40)',
    },
    miniContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        
    },
    submitButton: {
        backgroundColor: 'rgb(53, 130, 255)',
        borderRadius: 5,
        width: 70,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginTop: 60,
    }
})

export default addEvent