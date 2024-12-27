import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const App = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const handleIncrement = (team) => {
    if (team === 'A') {
      const newScore = scoreA + 1;
      setScoreA(newScore);
      if (newScore === 10) {
        Alert.alert('Selamat!', 'Tim A menang!');
      }
    } else if (team === 'B') {
      const newScore = scoreB + 1;
      setScoreB(newScore);
      if (newScore === 10) {
        Alert.alert('Selamat!', 'Tim B menang!');
      }
    }
  };

  const handleDecrement = (team) => {
    if (team === 'A' && scoreA > 0) {
      setScoreA(scoreA - 1);
    } else if (team === 'B' && scoreB > 0) {
      setScoreB(scoreB - 1);
    }
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skor Pertandingan Futsal</Text>
      <View style={styles.teamContainer}>
        <View style={styles.team}>
          <Text style={styles.teamName}>Tim A</Text>
          <Text style={styles.score}>{scoreA}</Text>
          <View style={styles.buttonRow}>
            <Button title="+" onPress={() => handleIncrement('A')} />
            <Button title="-" onPress={() => handleDecrement('A')} />
          </View>
        </View>
        <View style={styles.team}>
          <Text style={styles.teamName}>Tim B</Text>
          <Text style={styles.score}>{scoreB}</Text>
          <View style={styles.buttonRow}>
            <Button title="+" onPress={() => handleIncrement('B')} />
            <Button title="-" onPress={() => handleDecrement('B')} />
          </View>
        </View>
      </View>
      <Button title="Reset Pertandingan" onPress={resetScores} color="#841584" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  team: {
    alignItems: 'center',
    width: '40%',
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  score: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});

export default App;
