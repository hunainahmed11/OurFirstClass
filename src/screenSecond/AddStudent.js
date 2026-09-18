import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  FlatList,
} from 'react-native';

import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from '@react-native-firebase/firestore';

const AddStudent = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [students, setStudents] = useState([]);

  const addStudent = async () => {
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


      Alert.alert(
        'Success',
        'Student Added Successfully',
      );

      // Clear inputs after adding student
      setName('');
      setAge('');
      setCourse('');

    } catch (error) {
      console.log(error);

      Alert.alert(
        'Error',
        error.message,
      );
    }
  };
  const getStudents = async () => {
    try {
      const db = getFirestore();
      const snapshot = await getDocs(collection(db, 'students'),);
      const studentList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), }));
      setStudents(studentList);
      console.log('Students retrieved successfully!');
      console.log('Student List:', studentList);
    }
    catch (error) { console.log(error); }
  };


  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        Add Student
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#999"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        placeholderTextColor="#999"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Course"
        value={course}
        onChangeText={setCourse}
        placeholderTextColor="#999"

      />
  

      <Button
        title="Add Student"
        onPress={addStudent}
      />
      <View style={{ height: 10 }} />
      <FlatList
        data={students}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
        <View>   
          <Text>{item.name}</Text> 
          <Text>Age: {item.age}</Text> 
          <Text>Course: {item.course}</Text>
          </View>
        )} />

      <Button
        title="Get Students"
        onPress={getStudents}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },

  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
});

export default AddStudent;