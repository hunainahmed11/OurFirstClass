import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';

import {
  getAuth,
  createUserWithEmailAndPassword,
} from '@react-native-firebase/auth';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signupUser = async () => {
    try {
      const auth = getAuth();

      const result =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );

      console.log(result.user);

      Alert.alert(
        'Success',
        'Account Created',
      );

    } catch (error) {
      console.log(error);

      Alert.alert(
        'Error',
        error.message,
      );
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        Sign Up
      </Text>

      <TextInput
        placeholder="Enter Email"
        placeholderTextColor="#160202"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={styles.input}
      />

      <TextInput
        placeholder="Enter Password"
        placeholderTextColor="#160202"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <Button
        title="Create Account"
        onPress={signupUser}
      />
      <View style={styles.button}>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
        
      />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
  },
  button: {
    marginTop: 10,
  },
});

export default SignUp;
