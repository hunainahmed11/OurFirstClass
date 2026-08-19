import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import global from '../styles/global';

export default function StylingScreen() {
  return (
    <ScrollView style={global.screen}>
      <Text style={global.header}>Styling Demo</Text>
      <Text style={global.subtitle}>Examples of common style properties using StyleSheet.create().</Text>

      <View style={styles.card}>
        <Text style={styles.title}>Background & Color</Text>
        <View style={[styles.example, { backgroundColor: '#2563EB' }]}>
          <Text style={{ color: 'white' }}>Background Color</Text>
        </View>
        <Text style={styles.note}>Use backgroundColor and color for colors.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Font Size & Weight</Text>
        <Text style={{ fontSize: 24, fontWeight: '700' }}>Large Bold Text</Text>
        <Text style={styles.note}>fontSize and fontWeight control text appearance.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Box Size</Text>
        <View style={{ width: 120, height: 80, backgroundColor: '#E0F2FE', borderRadius: 8 }} />
        <Text style={styles.note}>Use width and height to set fixed sizes.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Spacing & Borders</Text>
        <View style={{ padding: 12, margin: 8, borderRadius: 10, borderWidth: 2, borderColor: '#CBD5E1' }}>
          <Text>Padding, Margin, Borders</Text>
        </View>
        <Text style={styles.note}>margin, padding, borderRadius, borderWidth are common.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Text Align</Text>
        <Text style={{ textAlign: 'center' }}>Centered Text</Text>
        <Text style={styles.note}>Use textAlign: 'center'|'left'|'right'.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: 'white', padding: 14, borderRadius: 12, marginBottom: 12 },
  title: { fontSize: 16, fontWeight: '700', marginBottom: 8 },
  example: { padding: 10, borderRadius: 8 },
  note: { marginTop: 8, color: '#475569' },
});
