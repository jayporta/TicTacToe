import React, { useState } from 'react';
import { SafeAreaView, View, StatusBar, StyleSheet } from 'react-native';
import Game from './components/game/Game';
import SetupPlayers from './components/setup_players/SetupPlayers';
import { Players } from './types.d';

const styles = StyleSheet.create({
  background: {
    display: 'flex',
    height: '100%',
  },
  mainView: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

const App = () => {
  const [players, setPlayers] = useState({ X: '', O: '' } as Players);
  const [ready, setReady] = useState(false);

  const handleSavePlayers = (obj: Players) => {
    setPlayers({ ...players, ...obj });
    setReady(true);
  };

  return (
    <SafeAreaView style={styles.background}>
      <StatusBar />
      <View style={styles.mainView}>
        {ready ? (
          <Game players={players} resetGame={() => setReady(false)} />
        ) : (
          <SetupPlayers
            onSavePlayers={handleSavePlayers}
            existingPlayers={players}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default App;
