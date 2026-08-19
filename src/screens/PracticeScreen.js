import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import global from '../styles/global';

export default function PracticeScreen() {
  const exercises = [
    'Display numbers 1-10 using a loop.',
    'Create an array of five fruits.',
    'Add a fruit using push().',
    'Display students using map().',
    'Create a FlatList of contacts.',
    'Create a 2-column product grid.',
    'Create Pass/Fail using if/else.',
  ];

  return (
    <ScrollView style={global.screen}>
      <Text style={global.header}>Practice Exercises</Text>
      <Text style={global.subtitle}>Try these tasks in your code editor. Do not look for answers here.</Text>

      {exercises.map((e, i) => (
        <View key={i} style={styles.card}>
          <Text>{i + 1}. {e}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: 'white', padding: 12, borderRadius: 12, marginBottom: 10 },
});
