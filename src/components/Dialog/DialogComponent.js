import React from 'react';
import { StyleSheet, Text  } from 'react-native'
import Dialog, { ScaleAnimation } from 'react-native-popup-dialog' 
import {lightColor, darkColor} from '../../styles/noCSSILoveIt'

import AddEvent from './AddEvent'

const DialogComponent = ({showDialog, destroy, importance, date, handleDateChange, handleTitleChange, handleImportanceChange, save}) => {
    const body = <Dialog
        visible={showDialog}
        dialogStyle={{backgroundColor: lightColor}}
        onTouchOutside={destroy}
        onHardwareBackPress={destroy}
        dialogAnimation={new ScaleAnimation()}
        height={300}
        width={300}
        dialogTitle={<Text style={styles.dialogTitle}>Event setter</Text>}
    >
        <AddEvent
            importance={importance}
            date={date}
            handleDateChange={handleDateChange}
            handleTitleChange={handleDateChange}
            handleTitleChange={handleTitleChange}
            handleImportanceChange={handleImportanceChange}
            save={save}
        />
        
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

    }
})

export default DialogComponent