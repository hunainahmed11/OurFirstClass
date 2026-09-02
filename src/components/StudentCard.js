import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StudentCard({name, age, designation}) {
  return (
    <View style={styles.card}>

      <Text style={styles.name}>
       Name : {name}
      </Text>

      <Text>
      age : {age}
      </Text>

      <Text>
       Designation : {designation}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});