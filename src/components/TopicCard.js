import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import colors from '../styles/colors';

export default function TopicCard({ emoji, title, description, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.left}>
        <Text style={styles.emoji}>{emoji}</Text>
      </View>

      <View style={styles.right}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 14,
    borderRadius: 14,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
  },
  left: {
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: colors.primary + '22',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  emoji: { fontSize: 28 },
  title: { fontSize: 16, fontWeight: '700', color: '#0f172a' },
  description: { marginTop: 4, color: '#475569' },
  right: { flex: 1 },
});
