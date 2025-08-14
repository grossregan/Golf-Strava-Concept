import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image, StyleSheet, View } from 'react-native';

const mockUser = {
  name: 'Jordan Spieth',
  handicap: 4.2,
  avatar: require('@/assets/images/icon.png'),
  friends: [
    { id: '1', name: 'Rory McIlroy' },
    { id: '2', name: 'Tiger Woods' },
    { id: '3', name: 'Nelly Korda' },
  ],
};

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <Image source={mockUser.avatar} style={styles.avatar} />
        <View>
          <ThemedText type="title">{mockUser.name}</ThemedText>
          <ThemedText>Handicap: {mockUser.handicap}</ThemedText>
        </View>
      </View>
      <View style={styles.section}>
        <ThemedText type="subtitle">Friends</ThemedText>
        {mockUser.friends.map(friend => (
          <ThemedText key={friend.id}>{friend.name}</ThemedText>
        ))}
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    gap: 16,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginRight: 16,
  },
  section: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
  },
});
