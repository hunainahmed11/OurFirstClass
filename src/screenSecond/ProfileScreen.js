import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('Start typing your details');

  // Name change hone par useEffect chalega
  useEffect(() => {
    console.log('Name changed:', name);
    if (name !== '') setMessage('Name updated');
  }, [name]);

  return (
    <View style={styles.screen}>
      <Text style={styles.eyebrow}>ACCOUNT</Text>
      <Text style={styles.title}>Your profile</Text>
      <View style={styles.avatar}><Text style={styles.avatarText}>{name === '' ? '?' : name[0].toUpperCase()}</Text></View>
      <TextInput style={styles.input} placeholder="Enter Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Enter Age" value={age} onChangeText={setAge} keyboardType="numeric" />
      <View style={styles.preview}>
        <Text style={styles.previewTitle}>PROFILE PREVIEW</Text>
        <Text style={styles.result}>Name: {name || 'Not added yet'}</Text>
        <Text style={styles.result}>Age: {age || 'Not added yet'}</Text>
      </View>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F8F8F6', padding: 24, paddingTop: 58 },
  eyebrow: { color: '#E87843', fontWeight: '800', fontSize: 11, letterSpacing: 1.5 },
  title: { color: '#20211F', fontSize: 36, fontWeight: '800', marginTop: 6, marginBottom: 22 },
  avatar: { backgroundColor: '#1D4F4A', width: 76, height: 76, borderRadius: 38, alignItems: 'center', justifyContent: 'center', marginBottom: 22 },
  avatarText: { color: '#F4C95D', fontSize: 32, fontWeight: '800' },
  input: { backgroundColor: '#FFFFFF', borderRadius: 12, padding: 16, marginBottom: 12, fontSize: 15 },
  preview: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 18, marginTop: 10 },
  previewTitle: { color: '#99978F', fontSize: 11, fontWeight: '800', letterSpacing: 1 },
  result: { color: '#30312E', fontSize: 18, marginTop: 12 },
  message: { color: '#E87843', fontWeight: '700', marginTop: 18 },
});