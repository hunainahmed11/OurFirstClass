import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProductDetail() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Detail</Text>
      <Text style={styles.text}>Ye screen product ka detail dikhata hai. Isay stack navigation se open kiya jata hai.</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cart')}>
        <Text style={styles.buttonText}>Go to Cart</Text>
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
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#4b5563',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4F46E5',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});