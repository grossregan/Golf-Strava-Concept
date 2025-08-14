import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

const initialRounds = [
  { id: '1', course: 'Pebble Beach', date: '2024-06-01', score: 78 },
  { id: '2', course: 'St. Andrews', date: '2024-05-28', score: 82 },
  { id: '3', course: 'Augusta National', date: '2024-05-20', score: 75 },
];

export default function ActivityScreen() {
  const [rounds, setRounds] = useState(initialRounds);
  const [course, setCourse] = useState('');
  const [date, setDate] = useState('');
  const [score, setScore] = useState('');

  const handleAddRound = () => {
    if (!course || !date || !score) return;
    setRounds([
      { id: Date.now().toString(), course, date, score: parseInt(score, 10) },
      ...rounds,
    ]);
    setCourse('');
    setDate('');
    setScore('');
  };

  const bestScore = rounds.reduce((min, r) => (r.score < min ? r.score : min), rounds[0]?.score || 0);

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Log a Round</ThemedText>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Course Name"
          value={course}
          onChangeText={setCourse}
        />
        <TextInput
          style={styles.input}
          placeholder="Date (YYYY-MM-DD)"
          value={date}
          onChangeText={setDate}
        />
        <TextInput
          style={styles.input}
          placeholder="Score"
          value={score}
          onChangeText={setScore}
          keyboardType="numeric"
        />
        <Button title="Add Round" onPress={handleAddRound} />
      </View>
      <ThemedText type="title" style={{ marginTop: 24 }}>My Rounds</ThemedText>
      <FlatList
        data={rounds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.roundCard}>
            <ThemedText type="subtitle">{item.course}</ThemedText>
            <ThemedText>Date: {item.date}</ThemedText>
            <ThemedText>Score: {item.score}</ThemedText>
          </View>
        )}
        style={styles.list}
      />
      <View style={styles.statsContainer}>
        <ThemedText type="subtitle">Stats</ThemedText>
        <Text style={styles.stat}>Best Score: {bestScore}</Text>
        <Text style={styles.stat}>Rounds Played: {rounds.length}</Text>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'transparent',
  },
  form: {
    marginBottom: 24,
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    padding: 16,
    gap: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    fontSize: 16,
  },
  list: {
    marginVertical: 16,
  },
  roundCard: {
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  statsContainer: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#e6e6e6',
    borderRadius: 12,
  },
  stat: {
    fontSize: 16,
    marginTop: 4,
  },
});
