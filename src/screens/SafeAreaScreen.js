import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import global from '../styles/global';

export default function SafeAreaScreen() {
  return (
    <SafeAreaView style={global.screen}>
      <Text style={global.header}>Safe Area Demo</Text>
      <Text style={global.subtitle}>Demonstrating SafeAreaProvider and SafeAreaView.</Text>

      <View style={styles.card}>
        <Text style={styles.title}>Why SafeArea?</Text>
        <Text style={styles.text}>
          SafeAreaView ensures content doesn't overlap notches, status bars, or rounded corners on modern devices.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Example</Text>
        <Text style={styles.text}>This screen is wrapped by SafeAreaView to keep content visible.</Text>
      </View>
       <View style={styles.card}>
        <Text style={styles.title}>Example</Text>
        <Text style={styles.text}>This screen is wrapped by SafeAreaView to keep content visible.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: 'white', padding: 14, borderRadius: 12, marginBottom: 12 },
  title: { fontSize: 16, fontWeight: '700', marginBottom: 8 },
  text: { color: '#475569' },
});
