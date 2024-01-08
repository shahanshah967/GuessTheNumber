import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native';
import Colors from '../../constants/color';

function Card({ children }) {
    return (
        <View style={styles.inputContainer}>
            {children}
        </View>
    )
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: deviceWidth < 350 ? 18 : 36,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        elevation: 4,
        //this is for IOS Devices
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        alignItems: 'center'
    },
})
