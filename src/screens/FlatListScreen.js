import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import global from '../styles/global';
import { students } from '../data/students';
import { products } from '../data/products';

export default function FlatListScreen() {
  // Student list (Example A)
  const studentData = students;

  // Horizontal categories (Example B)
  const categories = [
    { id: '1', name: 'Food' },
    { id: '2', name: 'Fashion' },
    { id: '3', name: 'Mobile' },
    { id: '4', name: 'Laptop' },
    { id: '5', name: 'Shoes' },
  ];

  // Product grid (Example C)
  const productData = products;

  // Student results (Example D)
  const results = [
    { id: '1', name: 'Ali', marks: 78 },
    { id: '2', name: 'Sara', marks: 45 },
    { id: '3', name: 'Ahmed', marks: 88 },
  ];

  return (
    <ScrollView style={global.screen}>
      <Text style={global.header}>FlatList Demo</Text>
      <Text style={global.subtitle}>Multiple FlatList examples showing common props.</Text>

      <View style={styles.card}>
        <Text style={styles.title}>Example A — Student List</Text>
        <FlatList
          data={studentData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemTitle}>{item.name}</Text>
              <Text>{item.course} • Age {item.age}</Text>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Example B — Horizontal Categories</Text>
        <FlatList
          data={categories}
          horizontal
          keyExtractor={(i) => i.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.category}>
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Example C — Product Grid</Text>
        <FlatList
          data={productData}
          keyExtractor={(i) => i.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={({ item }) => (
            <View style={styles.productCard}>
              <Text style={{ fontSize: 30 }}>{item.icon}</Text>
              <Text style={{ fontWeight: '700' }}>{item.name}</Text>
              <Text>Rs. {item.price}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Example D — Student Results</Text>
        <FlatList
          data={results}
          keyExtractor={(i) => i.id}
          renderItem={({ item }) => (
            <View style={styles.resultItem}>
              <Text style={{ fontWeight: '700' }}>{item.name}</Text>
              <Text>{item.marks} • {item.marks >= 50 ? 'Pass' : 'Fail'}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: 'white', padding: 12, borderRadius: 12, marginBottom: 12 },
  title: { fontSize: 16, fontWeight: '700', marginBottom: 8 },
  item: { padding: 10, backgroundColor: '#F8FAFC', borderRadius: 8 },
  itemTitle: { fontWeight: '700' },
  category: { padding: 12, marginRight: 8, backgroundColor: '#E2E8F0', borderRadius: 8 },
  productCard: { width: '48%', backgroundColor: '#F8FAFC', padding: 12, borderRadius: 12, alignItems: 'center', marginBottom: 8 },
  resultItem: { padding: 10, backgroundColor: '#FEF3C7', borderRadius: 8, marginBottom: 8, flexDirection: 'row', justifyContent: 'space-between' },
});
