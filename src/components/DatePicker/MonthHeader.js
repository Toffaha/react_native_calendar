import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const MonthHeader = ({text}) => (
    <View
        style={styles.container}
    >
        <Text style={styles.title}>{text}</Text>
    </View>
)
const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      padding: 10
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 15,
    },
    title: {
        fontSize: 25,
    }
})

export default MonthHeader