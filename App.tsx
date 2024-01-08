import {useState} from 'react';
import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRound, setGuessRound] = useState(0);
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRound(numberOfRounds);
  }
  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRound(0);
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundSNumber={guessRound}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <View style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/Images/dice.jpg')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>
        {screen}
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: '#643843',
  },
  backgroundImage: {
    opacity: 0.35,
  },
});
