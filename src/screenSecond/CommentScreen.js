import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import axios from 'axios';

const CommentScreen = () => {
  const [comment, setComment] = useState('');

  const [comments, setComments] = useState([
    {
      id: 1,
      body: 'This is amazing! I love it!',
      user: {
        username: 'Ali',
      },
    },
    {
      id: 2,
      body: 'Great work! Keep it up!',
      user: {
        username: 'Sara',
      },
    },
  ]);

  // GET API
  const getComments = async () => {
    try {
      const response = await axios.get(
        'https://dummyjson.com/comments/?postId=1',
      );

      console.log(response.data);

      setComments(response.data.comments);
    } catch (error) {
      console.error(error);
    }
  };

  // POST API
  const postComment = async () => {
    if (!comment.trim()) {
      Alert.alert(
        'Error',
        'Please enter a comment',
      );
      return;
    }

    try {
      const response = await axios.post(
        'https://dummyjson.com/comments/add',
        {
          body: comment,
          postId: 1,
          userId: 1,
        },
      );

      console.log(response.data);

      setComments(previousComments => [
        ...previousComments,
        response.data,
      ]);

      setComment('');

      Alert.alert(
        'Success',
        'Comment posted successfully!',
      );
    } catch (error) {
      console.error(error);
    }
  };

  // Run GET API when screen loads
  useEffect(() => {
    getComments();
  }, []);

  return (
    <View style={styles.container}>

      <Image
        source={{
          uri: 'https://i.pravatar.cc/150?img=12',
        }}
        style={styles.image}
      />

      <Text style={styles.heading}>
        Comments:
      </Text>

      {comments.map(comment => (
        <Text
          key={comment.id}
          style={styles.comment}
        >
          {comment.body}
        </Text>
      ))}

      <TextInput
        placeholder="Write a comment..."
        value={comment}
        onChangeText={setComment}
        style={styles.input}
      />

      <Button
        title="Post Comment"
        onPress={postComment}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  comment: {
    fontSize: 16,
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 8,
  },
});

export default CommentScreen;