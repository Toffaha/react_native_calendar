import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import Dialog, { ScaleAnimation, DialogContent } from 'react-native-popup-dialog' 
import moment from 'moment'

import {lightColor} from '../../styles/noCSSILoveIt'

import AddEvent from './AddEvent'
import TodaysEvents from './TodaysEvents'
import Weathers from './Weathers'

const DialogComponent = ({showDialog, destroy, importance, date, handleDateChange, colorPicker,
    handleTitleChange, handleImportanceChange, save, data, onLongPress, weathers, icon}) => {
        const body = <Dialog
            visible={showDialog}
            dialogStyle={{backgroundColor: lightColor}}
            onTouchOutside={destroy}
            onHardwareBackPress={destroy}
            dialogAnimation={new ScaleAnimation()}
           f height={400}
            width={300}
        >
        <DialogContent>
        {data.length !== 0 ? (<TodaysEvents
                data={data}
                onLongPress={onLongPress}
                date={date.slice(0,2)}
                colorPicker={colorPicker}
            />) : null}
            
            <AddEvent
                importance={importance}
                date={date}
                handleDateChange={handleDateChange}
                handleTitleChange={handleDateChange}
                handleTitleChange={handleTitleChange}
                handleImportanceChange={handleImportanceChange}
                save={save}
            />  
        </DialogContent>
            <Weathers
                weathers={weathers}
                date={moment(date, 'DD-MM-YYYY').format('YYYY-MM-DD')}
                icon={icon}
            />
        
            <TouchableOpacity
                style={styles.submitButton}
                onPress={save}
            >
                <Text style={{color: 'white', }}>Save</Text>
            </TouchableOpacity>
        </Dialog>
    return(<>

        {body}
    </>)
}
const styles = StyleSheet.create({
    dialogTitle: {
        alignSelf: 'center',
        fontSize: 20,
        marginVertical: 10,

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
        bottom: 10
    }
})

export default DialogComponent