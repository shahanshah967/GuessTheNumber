import React from 'react'
import Title from '../component/ui/Title'
import { View, Image, Text, StyleSheet, Dimensions, useWindowDimensions, ScrollView } from 'react-native'
import Colors from '../constants/color'
import PrimaryButton from '../component/ui/PrimaryButton'
function GameOverScreen({ roundSNumber, userNumber, onStartNewGame }) {
    const { height, width } = useWindowDimensions()

    const ImageWidth = height < 450 ? 200 : 300
    const ImageHeight = height < 450 ? 200 : 300
    return (
        <ScrollView style={styles.scrollingStyle} centerContent={true}>
            <View style={styles.rootContainer}>
                <Title>GAME OVER</Title>
                <View style={[styles.ImageContainer, { height: ImageHeight, width: ImageWidth }]}>
                    <Image style={styles.image} source={require("../assets/Images/success.png")} resizeMode='cover' />
                </View>

                <Text style={styles.summaryText}>Your Phone needed <Text style={styles.highlight}>{roundSNumber}</Text > round to guess the number <Text style={styles.highlight}>{userNumber}</Text>.</Text >

                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View >
        </ScrollView>
    )
}

export default GameOverScreen
const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ImageContainer: {
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    },
    scrollingStyle: {
        flex: 1
    }
})
