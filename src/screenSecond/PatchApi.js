import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

const PatchApi = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const updateUser = async () => {
    try {
      const response = await axios.patch(
        'https://dummyjson.com/users/2',
        {
          firstName: name,
          address: {
            city: lastName,
          },
        },
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        Update User
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter new name"
        value={name}
        placeholderTextColor="#160202"
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter new last name"
        value={lastName}
        placeholderTextColor="#160202"
        onChangeText={setLastName}
      />

      <Button
        title="Update User"
        onPress={updateUser}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
  },

  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 12,
    marginBottom: 20,
    borderRadius: 8,
    color: '#333',
  },
});

export default PatchApi;