import React, { useState } from 'react';
import { TextInput, Text, View, TouchableOpacity } from 'react-native';
import { Players } from '../../types';
import styles from './setupPlayersStyles';

const SetupPlayers = ({
  onSavePlayers,
  existingPlayers,
}: {
  onSavePlayers: (players: Players) => void;
  existingPlayers: Players;
}) => {
  const [players, setPlayers] = useState(existingPlayers);
  const playersValidated = players.X && players.O;

  const handleSubmit = () => (playersValidated ? onSavePlayers(players) : null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Player Names</Text>
      {Object.keys(players).map((key, i) => (
        <View key={i} style={styles.player}>
          <Text>{`Player ${key}: `}</Text>
          <TextInput
            accessibilityHint={`Enter name for Player ${key}`}
            autoCorrect={false}
            autoCompleteType="off"
            autoFocus={i === 0}
            style={styles.playerInput}
            value={players[key as keyof Players]}
            onChangeText={input =>
              setPlayers({ ...players, [key as keyof Players]: input })
            }
            onSubmitEditing={handleSubmit}
            returnKeyType="go"
            placeholder="Enter name"
          />
        </View>
      ))}
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityHint="Tap to play"
        style={styles.saveButton}
        onPress={handleSubmit}
      >
        <Text style={styles.saveButtonText}>Go</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SetupPlayers;
