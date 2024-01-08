import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Colors from '../../constants/color'
function Title({ children }) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        borderRadius: 5,
        fontFamily: 'Agbalumo-Regular',
        maxWidth: '80%'

    }
})
