import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function CounterScreen() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Ready to count?');

  // Count change hone par useEffect chalega
  useEffect(() => {
    console.log('Count changed:', count);
    setMessage('Count was updated');
  }, [count]);

  return (
    <View style={styles.screen}>
      <Text style={styles.eyebrow}>LEARNING TOOL</Text>
      <Text style={styles.title}>Counter</Text>
      <View style={styles.panel}>
        <Text style={styles.label}>YOUR CURRENT COUNT</Text>
        <Text style={styles.count}>{count}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
      <View style={styles.row}>
        <Pressable style={styles.secondaryButton} onPress={() => setCount(count - 1)}><Text style={styles.buttonText}>−</Text></Pressable>
        <Pressable style={styles.primaryButton} onPress={() => setCount(count + 1)}><Text style={styles.primaryText}>Increase</Text></Pressable>
      </View>
      <Pressable style={styles.resetButton} onPress={() => setCount(0)}><Text style={styles.resetText}>Reset count</Text></Pressable>
      <Text style={styles.lesson}>Button press → state changes → screen re-renders → useEffect runs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F8F8F6', padding: 24, paddingTop: 58 },
  eyebrow: { color: '#E87843', fontWeight: '800', fontSize: 11, letterSpacing: 1.5 },
  title: { color: '#20211F', fontSize: 36, fontWeight: '800', marginTop: 6, marginBottom: 28 },
  panel: { backgroundColor: '#1D4F4A', borderRadius: 20, padding: 28, alignItems: 'center' },
  label: { color: '#A8D4C5', fontSize: 11, fontWeight: '700', letterSpacing: 1 },
  count: { color: '#FFFFFF', fontSize: 76, fontWeight: '800', marginVertical: 8 },
  message: { color: '#F4C95D', fontWeight: '600' },
  row: { flexDirection: 'row', gap: 12, marginTop: 18 },
  secondaryButton: { backgroundColor: '#FFFFFF', borderRadius: 12, width: 58, height: 52, alignItems: 'center', justifyContent: 'center' },
  primaryButton: { flex: 1, backgroundColor: '#E87843', borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  buttonText: { color: '#1D4F4A', fontSize: 30 },
  primaryText: { color: '#FFFFFF', fontWeight: '800' },
  resetButton: { alignItems: 'center', padding: 18 },
  resetText: { color: '#77766F', fontWeight: '700' },
  lesson: { color: '#99978F', textAlign: 'center', lineHeight: 20, marginTop: 28 },
});