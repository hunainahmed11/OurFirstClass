import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import global from '../styles/global';

export default function LoopsScreen() {
  // Numbers 1 to 10 using for loop
  const numbers = [];
  for (let i = 1; i <= 10; i++) numbers.push(i);

  // Reverse numbers 10 to 1 using while
  const rev = [];
  let j = 10;
  while (j >= 1) {
    rev.push(j);
    j--;
  }

  // Even / Odd
  const evenOdd = [];
  for (let k = 1; k <= 10; k++) evenOdd.push({ n: k, type: k % 2 === 0 ? 'Even' : 'Odd' });

  // Reverse a string and palindrome check (simple)
  const name = 'level';
  let reversed = '';
  let idx = name.length - 1;
  do {
    reversed += name[idx];
    idx--;
  } while (idx >= 0);
  const isPalindrome = name === reversed;

  return (
    <ScrollView style={global.screen}>
      <Text style={global.header}>Loops Demo</Text>
      <Text style={global.subtitle}>for, while and do...while examples with visible output.</Text>

      <View style={styles.card}>
        <Text style={styles.title}>Numbers 1 to 10 (for)</Text>
        <Text>{numbers.join(', ')}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Reverse 10 to 1 (while)</Text>
        <Text>{rev.join(', ')}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Even / Odd (for)</Text>
        {evenOdd.map((item) => (
          <Text key={item.n}>{item.n} - {item.type}</Text>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Reverse String & Palindrome (do...while)</Text>
        <Text>Original: {name}</Text>
        <Text>Reversed: {reversed}</Text>
        <Text>Palindrome: {isPalindrome ? 'Yes' : 'No'}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: 'white', padding: 14, borderRadius: 12, marginBottom: 12 },
  title: { fontSize: 16, fontWeight: '700', marginBottom: 8 },
});
