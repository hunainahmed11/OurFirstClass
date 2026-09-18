import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

import axios from 'axios';

const PostApi = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [result, setResult] = useState(null);

  const addPost = async () => {

    try {

      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
          title: title,
          body: description,
          userId: 1,
        },
          {
    headers: {
      'Content-Type': 'application/json',
    },
  }

      );

      setResult(response.data);
    console.log(response);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        Create Post
      </Text>

      <TextInput
        placeholder="Enter title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <TextInput
        placeholder="Enter description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />

      <Button
        title="Create Post"
        onPress={addPost}
      />

      {result && (
        <View style={styles.result}>

          <Text>
            Post Created Successfully!
          </Text>

          <Text>
            ID: {result.id}
          </Text>

          <Text>
            Title: {result.title}
          </Text>

        </View>
      )}

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 30,
  },

  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    padding: 12,
    marginBottom: 15,
  },

  result: {
    marginTop: 25,
    padding: 15,
    backgroundColor: '#eeeeee',
  },

});

export default PostApi;