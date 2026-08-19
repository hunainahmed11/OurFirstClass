import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import global from '../styles/global';

export default function NavigationDemoScreen({ navigation }) {
  return (
    <ScrollView style={global.screen}>
      <Text style={global.header}>Navigation Playground</Text>
      <Text style={global.subtitle}>Demonstrates common navigation methods using the navigation prop.</Text>

      <View style={styles.card}>
        <Button title="Navigate to Components" onPress={() => navigation.navigate('Components')} />
      </View>

      <View style={styles.card}>
        <Button title="Push another Home" onPress={() => navigation.push('Home')} />
      </View>

      <View style={styles.card}>
        <Button title="Replace with About" onPress={() => navigation.replace('About')} />
      </View>

      <View style={styles.card}>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>

      <View style={styles.card}>
        <Button title="Pop to Top" onPress={() => navigation.popToTop()} />
      </View>

      <View style={styles.card}>
        <Button title="Reset to Home" onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Home' }] })} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: 'white', padding: 12, borderRadius: 12, marginBottom: 12 },
});
