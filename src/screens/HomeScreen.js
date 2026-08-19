import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import TopicCard from '../components/TopicCard';
import global from '../styles/global';

export default function HomeScreen({ navigation }) {
  const topics = [
    { key: 'Components', emoji: '🧩', desc: 'Learn View, Text, Image and more' },
    { key: 'Styling', emoji: '🎨', desc: 'Understand React Native styling' },
    { key: 'Flexbox', emoji: '📐', desc: 'Layout with Flexbox' },
    { key: 'SafeArea', emoji: '📱', desc: 'Safe areas and notches' },
    { key: 'Conditions', emoji: '🔁', desc: 'If / Else examples' },
    { key: 'Loops', emoji: '🔂', desc: 'for, while, do...while' },
    { key: 'Arrays', emoji: '🗂️', desc: 'Arrays and indexes' },
    { key: 'ArrayMethods', emoji: '🛠️', desc: 'push(), pop(), shift(), unshift()' },
    { key: 'Map', emoji: '🧭', desc: 'map() for rendering lists' },
    { key: 'FlatList', emoji: '📋', desc: 'Efficient lists with FlatList' },
    { key: 'MapVsFlatList', emoji: '⚖️', desc: 'map() vs FlatList' },
    { key: 'NavigationDemo', emoji: '🧭', desc: 'Navigation playground' },
  ];

  return (
    <ScrollView style={global.screen}>
      <Text style={global.header}>React Native Learning Hub</Text>
      <Text style={global.subtitle}>Learn React Native by Examples</Text>

      {topics.map((t) => (
        <TopicCard
          key={t.key}
          emoji={t.emoji}
          title={t.key}
          description={t.desc}
          onPress={() => navigation.navigate(t.key)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
