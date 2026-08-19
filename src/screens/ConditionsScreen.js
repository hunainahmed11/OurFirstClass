import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import global from '../styles/global';

export default function ConditionsScreen() {
  const age = 18;
  const marks = 72;
  const gradeScore = 85;
  const temp = 38;

  let ageResult = age >= 18 ? 'Adult' : 'Minor';
  let marksResult = marks >= 50 ? 'Pass' : 'Fail';
  let gradeResult = gradeScore >= 80 ? 'A' : gradeScore >= 65 ? 'B' : gradeScore >= 50 ? 'C' : 'Fail';
  let tempResult = temp > 37 ? 'Hot' : 'Normal';

  return (
    <ScrollView style={global.screen}>
      <Text style={global.header}>Conditional Statements Demo</Text>
      <Text style={global.subtitle}>Simple if / else examples using plain JavaScript.</Text>

      <View style={styles.card}>
        <Text style={styles.title}>Age Check</Text>
        <Text>Age: {age} → {ageResult}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Marks Check</Text>
        <Text>Marks: {marks} → {marksResult}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Grade</Text>
        <Text>Score: {gradeScore} → Grade: {gradeResult}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Temperature</Text>
        <Text>Temperature: {temp}°C → {tempResult}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: 'white', padding: 14, borderRadius: 12, marginBottom: 12 },
  title: { fontSize: 16, fontWeight: '700', marginBottom: 8 },
});
