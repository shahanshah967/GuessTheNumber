import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Alert, FlatList, useWindowDimensions, ScrollView } from 'react-native'
import Title from '../component/ui/Title';
import NumberContainer from '../component/game/NumberContainer';
import PrimaryButton from '../component/ui/PrimaryButton';
import Card from '../component/ui/Card';
import InstructionText from '../component/ui/InstructionText';
import GuessLogItem from '../component/game/GuessLogItem';

function generateRandomRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min) + min);
    if (rndNum === exclude) {
        return generateRandomRandomBetween(min, max, exclude);
    }
    else {
        return rndNum
    }
}
let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess])

    const { height, width } = useWindowDimensions();


    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver])

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])
    function nextGuessHandler(direction) {
        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't lie!", 'you know that is wrong...', [{ text: 'Sorry!', styles: 'cancel' }]);
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        }
        else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds])
    }

    const guessRoundListLength = guessRounds.length;

    let content = <>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <InstructionText style={styles.instructionText}>Higher of Lower</InstructionText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                </View>
            </View>
        </Card>
    </>

    if (width > 500) {
        content = (
            <>
                <InstructionText style={styles.instructionText}>Higher of Lower</InstructionText>
                <View style={styles.buttonContainerWide}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                    </View>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    </View>
                </View>
            </>
        );
    }
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {content}
            <View style={styles.listContainer}>
                <FlatList
                    data={guessRounds}
                    renderItem={
                        (itemData) => <GuessLogItem roundNumber={guessRoundListLength - itemData.index} guess={itemData.item} />
                    }
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40,
        alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    instructionText: {
        marginBottom: 12
    }
    ,
    buttonContainer: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
        padding: 16
    },
    buttonContainerWide: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});