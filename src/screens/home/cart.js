import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Cart() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart Screen</Text>
      <Text style={styles.text}>Yahan par user ka cart dikhaya jata hai. Isay push ya navigate ke saath dikhaya ja sakta hai.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#4b5563',
  },
});