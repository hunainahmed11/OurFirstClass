import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from '@react-native-firebase/auth';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please enter email and password');
            return;
        }

        try {
            await signInWithEmailAndPassword(getAuth(), email, password);
            console.log('User logged in successfully');
            console.log('Current User:', getAuth().currentUser);
            console.log('User Email:', getAuth().currentUser.email);

        } catch (error) {
            Alert.alert('Login Error', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login</Text>
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
            <Button title="Login" onPress={loginUser} />
            <View style={styles.buttonSpace} />
            <Button title="Create a new account" onPress={() => navigation.navigate('SignUp') } />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 30 },
    heading: { fontSize: 28, fontWeight: 'bold', marginBottom: 30 },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 12, marginBottom: 15, borderRadius: 8 },
    buttonSpace: { height: 12 },
});