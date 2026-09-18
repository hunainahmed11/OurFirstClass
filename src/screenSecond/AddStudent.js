import React, { useState } from 'react';
import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
} from '@react-native-firebase/firestore';

const COLORS = {
  background: '#F6F7FB',
  primary: '#315C55',
  accent: '#F2B84B',
  card: '#FFFFFF',
  text: '#202124',
  secondaryText: '#74777F',
  border: '#E3E6EC',
  white: '#FFFFFF',
};

const AddStudent = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [students, setStudents] = useState([]);

  const addStudent = async () => {
    if (!name.trim() || !age || !course.trim()) {
      Alert.alert('Error', 'Please fill in name, age and course');
      return;
    }

    try {
      const db = getFirestore();

      await addDoc(
        collection(db, 'students'),
        {
          name: name,
          age: age,
          course: course,
        },
      );

      console.log('Student added successfully!');
      console.log('Student Details:', { name, age, course });

      Alert.alert('Success', 'Student Added Successfully');

      setName('');
      setAge('');
      setCourse('');
    } catch (error) {
      console.log(error);
      Alert.alert('Error', error.message);
    }
  };

  const getStudents = async () => {
    try {
      const db = getFirestore();
      const snapshot = await getDocs(collection(db, 'students'));
      const studentList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      setStudents(studentList);
      console.log('Students retrieved successfully!');
      console.log('Student List:', studentList);
    } catch (error) {
      console.log(error);
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Student Records</Text>
      <Text style={styles.subheading}>Practice Firestore CREATE and READ</Text>

      <View style={styles.formCard}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
          placeholderTextColor={COLORS.secondaryText}
        />

        <TextInput
          style={styles.input}
          placeholder="Age"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
          placeholderTextColor={COLORS.secondaryText}
        />

        <TextInput
          style={styles.input}
          placeholder="Course"
          value={course}
          onChangeText={setCourse}
          placeholderTextColor={COLORS.secondaryText}
        />

        <Pressable style={styles.primaryButton} onPress={addStudent}>
          <Text style={styles.primaryButtonText}>Add Student</Text>
        </Pressable>
      </View>

      <View style={styles.listHeader}>
        <Text style={styles.sectionTitle}>Students</Text>
        <Pressable style={styles.secondaryButton} onPress={getStudents}>
          <Text style={styles.secondaryButtonText}>Get Students</Text>
        </Pressable>
      </View>

      <FlatList
        data={students}
        keyExtractor={item => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No students yet. Add one to begin.</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.studentCard}>
            <Text style={styles.studentName}>{item.name}</Text>
            <Text style={styles.studentInfo}>Age: {item.age}</Text>
            <Text style={styles.studentInfo}>Course: {item.course}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 16,
  },
  heading: {
    color: COLORS.text,
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 6,
  },
  subheading: {
    color: COLORS.secondaryText,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 18,
  },
  formCard: {
    backgroundColor: COLORS.card,
    borderRadius: 22,
    padding: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  input: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 12,
    color: COLORS.text,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    color: COLORS.text,
    fontSize: 20,
    fontWeight: '700',
  },
  secondaryButton: {
    backgroundColor: COLORS.accent,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  secondaryButtonText: {
    color: COLORS.text,
    fontWeight: '700',
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 20,
  },
  studentCard: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  studentName: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  studentInfo: {
    color: COLORS.secondaryText,
    fontSize: 14,
    marginBottom: 2,
  },
  emptyText: {
    color: COLORS.secondaryText,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default AddStudent;