import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Players } from '../../types';
import styles from './gameStyles';
import calculateWinner from './calculateWinner';

const squaresDefault = Array(9).fill(null) as string[];

const Game = ({
  players,
  resetGame,
}: {
  players: Players;
  resetGame: () => void;
}) => {
  const [squares, setSquares] = useState([...squaresDefault]);
  const [activePlayer, setActivePlayer] = useState('X');

  const handlePress = (index: number) => {
    if (squares[index]) {
      return;
    }
    const squareSpliced = squares.slice();
    squareSpliced[index] = activePlayer;
    setSquares(squareSpliced);
    setActivePlayer(activePlayer === 'X' ? 'O' : 'X');
  };

  const winner = calculateWinner(squares);

  if (winner) {
    const handlePressPlayAgain = () => {
      setSquares(squaresDefault);
      resetGame();
    };

    return (
      <View style={styles.container}>
        <Text style={styles.winner}>{`${
          players[winner as keyof Players]
        } has won!`}</Text>
        <TouchableOpacity
          style={styles.playAgain}
          onPress={handlePressPlayAgain}
          accessibilityRole="button"
          accessibilityHint="Tap to start over"
        >
          <Text style={styles.playAgainText}>Play Again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {
        <Text style={styles.title}>{`${
          players[activePlayer as keyof Players]
        }'s turn (${activePlayer})`}</Text>
      }
      <View style={styles.board}>
        {squares.map((mark, i) => (
          <TouchableOpacity
            key={i}
            style={styles.square}
            onPress={() => handlePress(i)}
            accessibilityHint={`Tap to place an ${mark}`}
            testID={`square${i}`}
          >
            <Text style={styles.squareText}>{mark || ''}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Game;
