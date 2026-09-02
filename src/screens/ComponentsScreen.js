import React from 'react';
import { View, Text, Image, Button, Pressable, ScrollView, StyleSheet } from 'react-native';
import global from '../styles/global';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ComponentsScreen() {
  return (
    <SafeAreaView style={global.screen}>


    <ScrollView style={global.screen}>
      <Text style={global.header}>Components Demo</Text>
      <Text style={global.subtitle}>Basic React Native core components with short explanations.</Text>

      <View style={styles.card}>
        <Text style={styles.title}>View</Text>
        <View style={styles.box} />
        <Text style={styles.note}>A container for layout and styling.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Text</Text>
        <Text style={{ fontSize: 18 }}>This is a simple Text component.</Text>
        <Text style={styles.note}>Used to display text on screen.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Image</Text>
        <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={styles.image} />
        <Text style={styles.note}>Load images from network or local files.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Button</Text>
        <Button title="Click me" onPress={() => {}} />
        <Text style={styles.note}>Simple button with a title and onPress handler.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Pressable</Text>
        <Pressable style={styles.pressable} onPress={() => {}}>
          <Text style={{ color: 'white' }}>Press Me</Text>
        </Pressable>
        <Text style={styles.note}>Flexible press handler with style changes on press.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>ScrollView</Text>
        <ScrollView style={styles.scrollExample}>
          <Text>Scrollable content item 1</Text>
          <Text>Scrollable content item 2</Text>
          <Text>Scrollable content item 3</Text>
          <Text>Scrollable content item 4</Text>
        </ScrollView>
        <Text style={styles.note}>Use ScrollView for small scrollable areas.</Text>
      </View>
    </ScrollView>    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: 'white', padding: 14, borderRadius: 12, marginBottom: 12 },
  title: { fontSize: 16, fontWeight: '700', marginBottom: 8 },
  box: { height: 60, backgroundColor: '#E0F2FE', borderRadius: 8 },
  image: { width: 64, height: 64 },
  pressable: { backgroundColor: '#2563EB', padding: 10, borderRadius: 8, alignItems: 'center' },
  scrollExample: { maxHeight: 120, padding: 8, backgroundColor: '#F8FAFC', borderRadius: 8 },
  note: { marginTop: 8, color: '#475569' },
});
