import React from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native';

import moment from 'moment'

export default props => 
<View style={styles.header}>
    <Text style={styles.blue}>{moment().format('MMM Do')}</Text>
</View>
const styles = StyleSheet.create({
    blue: {
        color: 'blue',
    },
    header: {
        width: 412,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderRadius: 4,
        borderWidth: 1,
    }
})