import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import global from '../styles/global';

export default function FlexboxScreen() {
  return (
    <ScrollView style={global.screen}>
      <Text style={global.header}>Flexbox Demo</Text>
      <Text style={global.subtitle}>Visual examples to learn layout using Flexbox.</Text>

      <View style={styles.card}>
        <Text style={styles.title}>flex: 1</Text>
        <View style={{ height: 120, backgroundColor: '#F1F5F9', borderRadius: 8, padding: 8 }}>
          <View style={{ flex: 1, backgroundColor: '#BFDBFE', borderRadius: 6 }} />
        </View>
        <Text style={styles.note}>flex makes a view grow to fill available space.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Row & Column</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
        <Text style={styles.note}>Use flexDirection to switch row/column.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>justifyContent & alignItems</Text>
        <View style={{ height: 120, backgroundColor: '#F8FAFC', borderRadius: 8 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: 60, height: 60, backgroundColor: '#93C5FD', borderRadius: 8 }} />
          </View>
        </View>
        <Text style={styles.note}>Control placement along main and cross axes.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>space-between / space-around / center</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={styles.small} />
          <View style={styles.small} />
          <View style={styles.small} />
        </View>
        <Text style={styles.note}>Different justifyContent values change spacing.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: 'white', padding: 14, borderRadius: 12, marginBottom: 12 },
  title: { fontSize: 16, fontWeight: '700', marginBottom: 8 },
  note: { marginTop: 8, color: '#475569' },
  box: { width: 80, height: 60, backgroundColor: '#BFDBFE', borderRadius: 6 },
  small: { width: 40, height: 40, backgroundColor: '#A5B4FC', borderRadius: 6 },
});
