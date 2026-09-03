import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Button, StyleSheet, Alert} from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {

    // Check karein ke email me @ hai aur password 6 digits se ziada hai
    const isEmailValid = email.includes('@');
    const isPasswordValid = password.length >= 6;

    if (isEmailValid && isPasswordValid) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }

  }, [email, password]); // EMAIL YA PASSWORD ME SE KOI BHI CHANGE HO TO YEH CHALEGA

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Enter Password (Min 6 chars)"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Login" disabled={!isValid} onPress={() => Alert.alert('Logged In!')} />
      
      {!isValid && (
        <Text style={styles.errorText}>
          Valid email aur kam se kam 6 character password darakar hai.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 12 },
  errorText: { color: 'red', marginTop: 8, fontSize: 12 },
});

export default Login;