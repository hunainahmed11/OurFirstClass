import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import global from '../styles/global';

export default function AboutScreen() {
  return (
    <ScrollView style={global.screen}>
      <Text style={global.header}>About</Text>
      <Text style={global.subtitle}>React Native Learning Hub</Text>

      <View style={styles.card}>
        <Text style={{ fontWeight: '700', fontSize: 16 }}>About this App</Text>
        <Text style={{ marginTop: 8 }}>
          A classroom application for learning React Native concepts through practical examples.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={{ fontWeight: '700' }}>Covered Topics</Text>
        <Text>Components, Styling, Flexbox, Navigation, Conditions, Loops, Arrays, Array Methods, map(), FlatList</Text>
      </View>

      <View style={styles.card}>
        <Text style={{ fontWeight: '700' }}>Future</Text>
        <Text>More topics will be added as the course progresses.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: 'white', padding: 12, borderRadius: 12, marginBottom: 10 },
});
