import React, {useState} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {createUserWithEmailAndPassword, getAuth} from '@react-native-firebase/auth';

export default function SignUp({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createAccount = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }

    try {
      await createUserWithEmailAndPassword(getAuth(), email, password);
      console.log('User account created & signed in!');
      console.log('Current User:', getAuth().currentUser);
      console.log('User Email:', getAuth().currentUser.email);
    } catch (error) {
      Alert.alert('Sign Up Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create Account</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={styles.input}
        placeholderTextColor="#999"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        placeholderTextColor="#999"
      />
      <Button title="Create Account" onPress={createAccount} />
      <View style={styles.buttonSpace} />
      <Button title="Already have an account? Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', padding: 30},
  heading: {fontSize: 28, fontWeight: 'bold', marginBottom: 30},
  input: {borderWidth: 1, borderColor: '#ccc', padding: 12, marginBottom: 15, borderRadius: 8},
  buttonSpace: {height: 12},
});