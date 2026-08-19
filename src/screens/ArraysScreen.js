import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import global from '../styles/global';
import { students } from '../data/students';

export default function ArraysScreen() {
  const fruits = ['Apple', 'Banana', 'Orange'];
  const numbers = [1, 2, 3, 4, 5];

  return (
    <ScrollView style={global.screen}>
      <Text style={global.header}>Arrays Demo</Text>
      <Text style={global.subtitle}>Creating arrays, indexing and length property.</Text>

      <View style={styles.card}>
        <Text style={styles.title}>Students Array</Text>
        {students.map((s) => (
          <Text key={s.id}>{s.id}. {s.name} - {s.course} - Age {s.age}</Text>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Fruits</Text>
        <Text>Array: {JSON.stringify(fruits)}</Text>
        <Text>First item: {fruits[0]}</Text>
        <Text>Length: {fruits.length}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Numbers</Text>
        <Text>{numbers.join(', ')}</Text>
        <Text>Index 2 value: {numbers[2]}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: 'white', padding: 14, borderRadius: 12, marginBottom: 12 },
  title: { fontSize: 16, fontWeight: '700', marginBottom: 8 },
});
