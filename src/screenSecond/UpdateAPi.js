import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import axios from 'axios';

const UpdateApi = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      body: 'Nice picture!',
    },
    {
      id: 2,
      body: 'Amazing view!',
    },
    {
      id: 3,
      body: 'Beautiful place!',
    },
  ]);

  const [selectedCommentId, setSelectedCommentId] = useState(null);
  const [updatedComment, setUpdatedComment] = useState('');
  const [loading, setLoading] = useState(false);

  // Edit button press hone par
  const selectComment = item => {
    setSelectedCommentId(item.id);
    setUpdatedComment(item.body);
  };

  // PATCH API
  const updateComment = async () => {
    if (!updatedComment.trim()) {
      Alert.alert('Error', 'Please enter a comment');
      return;
    }

    try {
      setLoading(true);

      const response = await axios.patch(
        `https://dummyjson.com/comments/${selectedCommentId}`,
        {
          body: updatedComment,
        },
      );

      console.log('Updated Comment:', response.data);

      // State ko update karna
      setComments(prevComments =>
        prevComments.map(comment =>
          comment.id === selectedCommentId
            ? {
                ...comment,
                body: updatedComment,
              }
            : comment,
        ),
      );

      setSelectedCommentId(null);
      setUpdatedComment('');

      Alert.alert('Success', 'Comment updated successfully');

    } catch (error) {
      console.log('Update Error:', error);
      Alert.alert('Error', 'Comment could not be updated');

    } finally {
      setLoading(false);
    }
  };

  const renderComment = ({item}) => {
    return (
      <View style={styles.commentCard}>
        <Text style={styles.commentText}>
          {item.body}
        </Text>

        <TouchableOpacity
          style={styles.editButton}
          onPress={() => selectComment(item)}>
          <Text style={styles.editButtonText}>
            Edit
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        Update Comments
      </Text>

      <FlatList
        data={comments}
        keyExtractor={item => item.id.toString()}
        renderItem={renderComment}
        contentContainerStyle={styles.listContainer}
      />

      {selectedCommentId !== null && (
        <View style={styles.editBox}>

          <Text style={styles.editHeading}>
            Edit Comment
          </Text>

          <TextInput
            style={styles.input}
            value={updatedComment}
            onChangeText={setUpdatedComment}
            placeholder="Enter updated comment"
          />

          <TouchableOpacity
            style={styles.updateButton}
            onPress={updateComment}
            disabled={loading}>
            <Text style={styles.updateButtonText}>
              {loading ? 'Updating...' : 'Update Comment'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => {
              setSelectedCommentId(null);
              setUpdatedComment('');
            }}>
            <Text style={styles.cancelText}>
              Cancel
            </Text>
          </TouchableOpacity>

        </View>
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  listContainer: {
    paddingBottom: 20,
  },

  commentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },

  commentText: {
    flex: 1,
    fontSize: 16,
    marginRight: 10,
  },

  editButton: {
    backgroundColor: '#222',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },

  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  editBox: {
    padding: 16,
    backgroundColor: '#f7f7f7',
    borderRadius: 12,
  },

  editHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
  },

  updateButton: {
    backgroundColor: '#222',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },

  updateButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  cancelButton: {
    marginTop: 10,
    alignItems: 'center',
  },

  cancelText: {
    fontSize: 15,
  },
});

export default UpdateApi;