import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const products = [
  { name: 'React Native Book', price: '$18', icon: '📘', color: '#E8F1FF' },
  { name: 'Study Headphones', price: '$32', icon: '🎧', color: '#FFF0E5' },
  { name: 'Daily Planner', price: '$12', icon: '📓', color: '#EAF8F0' },
  { name: 'Desk Lamp', price: '$26', icon: '💡', color: '#FFF7D6' },
];

export default function HomeScreen({ navigation }) {
  // State banayi
  const [name, setName] = useState('Student');
  const [cartCount, setCartCount] = useState(0);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View>
          <Text style={styles.smallText}>Good morning,</Text>
          <Text style={styles.name}>{name} <Text style={styles.wave}>✦</Text></Text>
        </View>
        <Pressable style={styles.cart} onPress={() => setCartCount(cartCount + 1)}>
          <Text style={styles.cartIcon}>🛒</Text>
          <Text style={styles.badge}>{cartCount}</Text>
        </Pressable>
      </View>

      <View style={styles.hero}>
        <View style={styles.heroCopy}>
          <Text style={styles.heroKicker}>STUDENT PICKS</Text>
          <Text style={styles.heroTitle}>Everything for your next big idea.</Text>
          <Pressable style={styles.shopButton} onPress={() => setName('Ali')}>
            <Text style={styles.shopButtonText}>Explore now  →</Text>
          </Pressable>
        </View>
        <Text style={styles.heroIcon}>🎒</Text>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Browse categories</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <View style={styles.categories}>
        <Text style={styles.categoryActive}>All items</Text>
        <Text style={styles.category}>Books</Text>
        <Text style={styles.category}>Desk setup</Text>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular this week</Text>
        <Text style={styles.count}>{products.length} items</Text>
      </View>
      <View style={styles.grid}>
        {products.map((product) => (
          <Pressable key={product.name} style={styles.card} onPress={() => setCartCount(cartCount + 1)}>
            <View style={[styles.productImage, { backgroundColor: product.color }]}>
              <Text style={styles.productIcon}>{product.icon}</Text>
              <Text style={styles.heart}>♡</Text>
            </View>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.price}>{product.price}</Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.bottomLinks}>
        <Pressable onPress={() => navigation.navigate('Counter')}><Text style={styles.link}>Counter lesson</Text></Pressable>
        <Pressable onPress={() => navigation.navigate('Timer')}><Text style={styles.link}>Timer lesson</Text></Pressable>
        <Pressable onPress={() => navigation.navigate('Profile')}><Text style={styles.link}>Profile</Text></Pressable>
        <Pressable onPress={() => navigation.navigate('Settings')}><Text style={styles.link}>Settings</Text></Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F8F8F6' },
  content: { padding: 20, paddingTop: 52 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  smallText: { color: '#77766F', fontSize: 13 },
  name: { color: '#20211F', fontSize: 25, fontWeight: '700', marginTop: 3 },
  wave: { color: '#E87843', fontSize: 19 },
  cart: { backgroundColor: '#FFFFFF', borderRadius: 14, padding: 12, position: 'relative' },
  cartIcon: { fontSize: 22 },
  badge: { position: 'absolute', right: -5, top: -6, backgroundColor: '#E87843', color: '#FFFFFF', borderRadius: 10, minWidth: 19, padding: 3, textAlign: 'center', fontSize: 11 },
  hero: { backgroundColor: '#1D4F4A', borderRadius: 22, minHeight: 190, padding: 22, flexDirection: 'row', alignItems: 'center', overflow: 'hidden' },
  heroCopy: { flex: 1 },
  heroKicker: { color: '#A8D4C5', fontSize: 11, fontWeight: '700', letterSpacing: 1 },
  heroTitle: { color: '#FFFFFF', fontSize: 24, fontWeight: '700', lineHeight: 29, marginVertical: 10 },
  shopButton: { backgroundColor: '#F4C95D', alignSelf: 'flex-start', paddingHorizontal: 14, paddingVertical: 10, borderRadius: 9 },
  shopButtonText: { color: '#24443F', fontWeight: '700', fontSize: 12 },
  heroIcon: { fontSize: 68, transform: [{ rotate: '-8deg' }] },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 27, marginBottom: 12 },
  sectionTitle: { fontSize: 18, color: '#20211F', fontWeight: '700' },
  seeAll: { color: '#E87843', fontWeight: '600' },
  count: { color: '#99978F', fontSize: 12 },
  categories: { flexDirection: 'row', gap: 9 },
  categoryActive: { backgroundColor: '#E87843', color: '#FFFFFF', paddingHorizontal: 15, paddingVertical: 9, borderRadius: 20, overflow: 'hidden', fontWeight: '700' },
  category: { backgroundColor: '#FFFFFF', color: '#686861', paddingHorizontal: 15, paddingVertical: 9, borderRadius: 20, overflow: 'hidden' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 14 },
  card: { width: '47.5%', backgroundColor: '#FFFFFF', borderRadius: 16, paddingBottom: 13, overflow: 'hidden' },
  productImage: { height: 125, justifyContent: 'center', alignItems: 'center', position: 'relative' },
  productIcon: { fontSize: 54 },
  heart: { position: 'absolute', right: 9, top: 7, color: '#555', fontSize: 24 },
  productName: { color: '#30312E', fontWeight: '600', fontSize: 14, marginHorizontal: 12, marginTop: 11 },
  price: { color: '#E87843', fontSize: 16, fontWeight: '800', marginHorizontal: 12, marginTop: 5 },
  bottomLinks: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 28, paddingBottom: 20, gap: 12 },
  link: { color: '#1D4F4A', fontSize: 12, fontWeight: '700' },
});