import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import global from '../styles/global';

export default function MapVsFlatListScreen() {
  return (
    <ScrollView style={global.screen}>
      <Text style={global.header}>map() vs FlatList</Text>
      <Text style={global.subtitle}>When to use map() and when to prefer FlatList.</Text>

      <View style={styles.card}>
        <Text style={styles.title}>map()</Text>
        <Text>- JavaScript array method</Text>
        <Text>- Good for small lists</Text>
        <Text>- Renders all items immediately</Text>
        <Text>- Simple syntax</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>FlatList</Text>
        <Text>- React Native component</Text>
        <Text>- Better for large lists</Text>
        <Text>- Optimized rendering and scrolling</Text>
        <Text>- Supports horizontal lists & grids</Text>
        <Text>- Header/Footer support</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: 'white', padding: 14, borderRadius: 12, marginBottom: 12 },
  title: { fontSize: 16, fontWeight: '700', marginBottom: 8 },
});
