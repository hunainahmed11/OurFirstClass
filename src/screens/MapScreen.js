import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import global from '../styles/global';
import { students } from '../data/students';

export default function MapScreen() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <ScrollView style={global.screen}>
      <Text style={global.header}>map() Demo</Text>
      <Text style={global.subtitle}>Use map() to render arrays and access item/index.</Text>

      <View style={styles.card}>
        <Text style={styles.title}>Basic map()</Text>
        {students.map((s, idx) => (
          <Text key={s.id}>{idx + 1}. {s.name} ({s.course})</Text>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Even / Odd using map()</Text>
        {numbers.map((n) => (
          <Text key={n}>{n} - {n % 2 === 0 ? 'Even' : 'Odd'}</Text>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Pass / Fail using map()</Text>
        {[45, 60, 30].map((m, i) => (
          <Text key={i}>Marks: {m} → {m >= 50 ? 'Pass' : 'Fail'}</Text>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>FOR LOOP vs MAP</Text>
        <Text>- FOR LOOP: Imperative, you manually build UI elements.</Text>
        <Text>- MAP: Declarative and concise for rendering lists in React.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: 'white', padding: 14, borderRadius: 12, marginBottom: 12 },
  title: { fontSize: 16, fontWeight: '700', marginBottom: 8 },
});
