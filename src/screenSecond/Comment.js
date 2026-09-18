import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';

import axios from 'axios';

const Comment = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      body: 'Amazing picture! 🔥',
      user: {
        username: 'Ali',
      },
    },
    {
      id: 2,
      body: 'Beautiful view!',
      user: {
        username: 'Ahmed',
      },
    },
  ]);
  

  const [loading, setLoading] = useState(false);

  // POST API
  const addComment = async () => {
    // if (!comment.trim()) {
    //   Alert.alert('Error', 'Please enter a comment');
    //   return;
    // }

    setLoading(true);

    try {
      const response = await axios.post(
        'https://dummyjson.com/comments/add',
        {
          body: comment,
          postId: 3,
          userId: 5,
        },
      );

      console.log('Response:', response.data);

      // Add returned comment to UI
      setComments(prevComments => [
        ...prevComments,
        response.data,
      ]);

      // Clear input
      setComment('');

    } catch (error) {
      console.log('Error:', error);

      Alert.alert(
        'Error',
        'Unable to add comment',
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>

      {/* User */}
      <View style={styles.userRow}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>J</Text>
        </View>

        <View>
          <Text style={styles.username}>
            john_travels
          </Text>

          <Text style={styles.location}>
            Northern Areas
          </Text>
        </View>
      </View>

      {/* Post Image */}
      <Image
        source={{
          uri: 'https://picsum.photos/700/500',
        }}
        style={styles.postImage}
      />

      {/* Post Information */}
      <View style={styles.content}>

        <Text style={styles.likes}>
          1,245 likes
        </Text>

        <Text style={styles.caption}>
          <Text style={styles.username}>
            john_travels{' '}
          </Text>

          What an amazing place! ❤️
        </Text>

        <Text style={styles.commentHeading}>
          Comments
        </Text>

        {/* Comments */}
        {comments.map(item => (
          <View
            key={item.id}
            style={styles.comment}
          >
            <Text>
              <Text style={styles.commentUser}>
                {item.user?.username || 'User'}{' '}
              </Text>

              {item.body}
            </Text>
          </View>
        ))}

        {/* Comment Input */}
        <View style={styles.commentInputContainer}>

          <TextInput
            placeholder="Add a comment..."
            value={comment}
            onChangeText={setComment}
            style={styles.input}
            placeholderTextColor={"grey"}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={addComment}
            disabled={loading}
          >
            <Text style={styles.buttonText}>
              {loading ? 'Posting...' : 'Post'}
            </Text>
          </TouchableOpacity>

        </View>

      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },

  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginTop: 20,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  avatarText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  username: {
    fontWeight: 'bold',
    fontSize: 15,
  },

  location: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },

  postImage: {
    width: '100%',
    height: 300,
  },

  content: {
    padding: 15,
  },

  likes: {
    fontWeight: 'bold',
    marginBottom: 10,
  },

  caption: {
    fontSize: 15,
    marginBottom: 20,
  },

  commentHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  comment: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  commentUser: {
    fontWeight: 'bold',
  },

  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 10,
  },

  button: {
    backgroundColor: '#222',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 22,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Comment;