import React, {useState} from 'react';
import {View, Text, TextInput, Button, FlatList, Alert, StyleSheet,
} from 'react-native';
import {getFirestore, collection, addDoc, getDocs,
} from '@react-native-firebase/firestore';
const StudentScreen = () => {
const [name, setName] = useState('');
const [age, setAge] = useState('');
const [course, setCourse] = useState('');
const [students, setStudents] = useState([]);
const getStudents = async () => {
try {
const db = getFirestore();
const snapshot = await getDocs(
collection(db, 'students'),
);
const studentList = snapshot.docs.map(doc => ({
id: doc.id,
...doc.data(),
}));
setStudents(studentList);
} catch (error) {
console.log(error);
}
};
const addStudent = async () => {
if (!name || !age || !course) {
Alert.alert('Error', 'Please fill all fields');
return;
}
try {
const db = getFirestore();
await addDoc(
collection(db, 'students'),
{name, age, course},
);
setName('');
setAge('');
setCourse('');
await getStudents();

} catch (error) {
console.log(error);
}
};
return (
<View style={styles.container}>
<Text style={styles.heading}>Student Management</Text>
<TextInput
style={styles.input}
placeholder="Name"
value={name}
onChangeText={setName}
/>
<TextInput
style={styles.input}
placeholder="Age"
value={age}
onChangeText={setAge}
keyboardType="numeric"
/>
<TextInput
style={styles.input}
placeholder="Course"
value={course}
onChangeText={setCourse}
/>
<Button title="Add Student" onPress={addStudent} />
<View style={{height: 10}} />
<Button title="Get Students" onPress={getStudents} />
<FlatList
data={students}
keyExtractor={item => item.id}
renderItem={({item}) => (
<View style={styles.card}>
<Text style={styles.name}>{item.name}</Text>
<Text>Age: {item.age}</Text>
<Text>Course: {item.course}</Text>
</View>
)}
/>
</View>
);
};
const styles = StyleSheet.create({
container: {flex: 1, padding: 25},
heading: {
fontSize: 25,
fontWeight: 'bold',
marginBottom: 20,
},
input: {
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 8,
padding: 12,
marginBottom: 12,
},
card: {
padding: 15,
marginTop: 12,
backgroundColor: '#f2f2f2',
borderRadius: 10,
},
name: {fontSize: 18, fontWeight: 'bold'},
});
export default StudentScreen;