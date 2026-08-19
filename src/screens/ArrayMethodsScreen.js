import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import global from '../styles/global';

export default function ArrayMethodsScreen() {
  const before = ['Apple', 'Banana'];
  const afterPush = [...before, 'Orange'];

  const before2 = ['Apple', 'Banana'];
  const afterPop = before2.slice(0, before2.length - 1);

  const before3 = ['Apple', 'Banana'];
  const afterShift = before3.slice(1);

  const before4 = ['Apple', 'Banana'];
  const afterUnshift = ['Orange', ...before4];

  return (
    <ScrollView style={global.screen}>
      <Text style={global.header}>Array Methods Demo</Text>
      <Text style={global.subtitle}>Visual cards showing push/pop/shift/unshift</Text>

      <View style={styles.card}>
        <Text style={styles.title}>push()</Text>
        <Text>Before: {JSON.stringify(before)}</Text>
        <Text>Action: push('Orange')</Text>
        <Text>After: {JSON.stringify(afterPush)}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>pop()</Text>
        <Text>Before: {JSON.stringify(['Apple','Banana'])}</Text>
        <Text>Action: pop()</Text>
        <Text>After: {JSON.stringify(afterPop)}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>shift()</Text>
        <Text>Before: {JSON.stringify(['Apple','Banana'])}</Text>
        <Text>Action: shift()</Text>
        <Text>After: {JSON.stringify(afterShift)}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>unshift()</Text>
        <Text>Before: {JSON.stringify(['Apple','Banana'])}</Text>
        <Text>Action: unshift('Orange')</Text>
        <Text>After: {JSON.stringify(afterUnshift)}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: 'white', padding: 14, borderRadius: 12, marginBottom: 12 },
  title: { fontSize: 16, fontWeight: '700', marginBottom: 8 },
});
