import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RegisterScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Register</Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          placeholder="Enter your name"
          style={styles.input}
          placeholderTextColor={'black'}
        />

        <TextInput
          placeholder="Enter your password"
          style={styles.input}
          placeholderTextColor={'black'}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  titleView: {
    marginTop: 80,
    paddingHorizontal: 30,
  },
  titleText: {
    fontSize: 36,
    fontWeight: '700',
  },
  inputView: {
    paddingHorizontal: 24,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    padding: 12,
    height: 50,
    marginTop: 12,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: '#ffffff',
  },
  registerButton: {
    marginTop: 24,
    borderRadius: 10,
    marginHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: '#111827',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkButton: {
    marginTop: 16,
    alignItems: 'center',
  },
  linkText: {
    color: '#4F46E5',
    fontSize: 15,
    fontWeight: '600',
  },
});