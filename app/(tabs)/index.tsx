import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FlatList, Image, StyleSheet, View } from 'react-native';

const mockFeed = [
  {
    id: '1',
    user: 'Jordan Spieth',
    avatar: require('@/assets/images/icon.png'),
    course: 'Pebble Beach',
    date: '2024-06-01',
    score: 78,
    type: 'round',
  },
  {
    id: '2',
    user: 'Rory McIlroy',
    avatar: require('@/assets/images/icon.png'),
    course: 'St. Andrews',
    date: '2024-05-28',
    score: 70,
    type: 'round',
  },
  {
    id: '3',
    user: 'Nelly Korda',
    avatar: require('@/assets/images/icon.png'),
    course: 'Augusta National',
    date: '2024-05-27',
    score: 74,
    type: 'round',
  },
];

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Activity Feed</ThemedText>
      <FlatList
        data={mockFeed}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.feedCard}>
            <View style={styles.feedHeader}>
              <Image source={item.avatar} style={styles.avatar} />
              <View>
                <ThemedText type="subtitle">{item.user}</ThemedText>
                <ThemedText>{item.date}</ThemedText>
              </View>
            </View>
            <ThemedText>
              Played <ThemedText type="defaultSemiBold">{item.course}</ThemedText> — Score: <ThemedText type="defaultSemiBold">{item.score}</ThemedText>
            </ThemedText>
          </View>
        )}
        style={styles.list}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'transparent',
  },
  list: {
    marginVertical: 16,
  },
  feedCard: {
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  feedHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
});
