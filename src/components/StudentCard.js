import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// export default function StudentCard({ name, age, designation }) {
//   return (
//     <View style={styles.card}>
//       <Text >Name: {name}</Text>
//       <Text >Age: {age}</Text>
//       <Text >Designation: {designation}</Text>
//     </View>
//   );
// }

export default function StudentCard(props) {
  return (
    <View style={styles.card}>
      <Text >Name: {props.name}</Text>
      <Text >Age: {props.age}</Text>
      <Text >Designation: {props.designation}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 14,
    borderRadius: 14,   
  }
});