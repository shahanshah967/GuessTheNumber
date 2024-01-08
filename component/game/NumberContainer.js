import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import Colors from '../../constants/color';

function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: Colors.accent500,
        borderRadius: 8,
        padding: deviceWidth < 350 ? 8 : 12,
        margin: deviceWidth < 350 ? 8 : 12,
        alignItems: 'center',
        justifyContent: 'center',

    },
    numberText: {
        color: Colors.accent500,
        fontSize: 36,
        fontWeight: 'bold'
    }
})