import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Picker, TouchableOpacity } from 'react-native'
import Dialog, { DialogContent, ScaleAnimation } from 'react-native-popup-dialog' 

const DialogComponent = ({showDialog, importance, date, handleDateChange, handleTitleChange, destroy, handleImportanceChange, save}) => {
    const body = <Dialog
        visible={showDialog}
        onTouchOutside={destroy}
        onHardwareBackPress={destroy}
        dialogAnimation={new ScaleAnimation({})}
        height={300}
        width={300}
        dialogTitle={<Text style={styles.dialogTitle}>Event setter</Text>}
    >
        <DialogContent>
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
                    <Picker.Item label='Low' value='medium'/>
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
    </Dialog>
    return(<>
        {body}
    </>)
}
const styles = StyleSheet.create({
    dialogTitle: {
        alignSelf: 'center',
        fontSize: 20,
        marginTop: 3,
    },
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
        alignItems: 'center'
    },
    submitButton: {
        backgroundColor: 'rgb(53, 130, 255)',
        borderRadius: 5,
        width: 70,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginTop: 75,
    }
})

export default DialogComponent