import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FlatList, StyleSheet, View } from 'react-native';

const trendingCourses = [
  { id: '1', name: 'Pebble Beach', location: 'CA, USA' },
  { id: '2', name: 'St. Andrews', location: 'Scotland' },
  { id: '3', name: 'Augusta National', location: 'GA, USA' },
];

const topPlayers = [
  { id: '1', name: 'Rory McIlroy' },
  { id: '2', name: 'Nelly Korda' },
  { id: '3', name: 'Tiger Woods' },
];

const trendingRounds = [
  { id: '1', user: 'Jordan Spieth', course: 'Pebble Beach', score: 68 },
  { id: '2', user: 'Nelly Korda', course: 'St. Andrews', score: 70 },
];

export default function ExploreScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Explore</ThemedText>
      <View style={styles.section}>
        <ThemedText type="subtitle">Trending Courses</ThemedText>
        <FlatList
          data={trendingCourses}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ThemedText style={styles.item}>{item.name} — {item.location}</ThemedText>
          )}
        />
      </View>
      <View style={styles.section}>
        <ThemedText type="subtitle">Top Players</ThemedText>
        <FlatList
          data={topPlayers}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ThemedText style={styles.item}>{item.name}</ThemedText>
          )}
        />
      </View>
      <View style={styles.section}>
        <ThemedText type="subtitle">Trending Rounds</ThemedText>
        <FlatList
          data={trendingRounds}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ThemedText style={styles.item}>{item.user} — {item.course} — Score: {item.score}</ThemedText>
          )}
        />
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
  section: {
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
  },
  item: {
    fontSize: 16,
    marginVertical: 4,
  },
});
