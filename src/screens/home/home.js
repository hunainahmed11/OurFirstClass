import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.subtitle}>This screen teaches simple navigation actions.</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProductDetail')}>
        <Text style={styles.buttonText}>Navigate to Product Detail</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.push('Cart')}>
        <Text style={styles.buttonText}>Push Cart Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Cart')}>
        <Text style={styles.buttonText}>Replace with Cart Screen</Text>
      </TouchableOpacity>
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
    fontSize: 30,
    color: '#111827',
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    marginTop: 12,
    borderRadius: 10,
    paddingVertical: 12,
    backgroundColor: '#4F46E5',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});