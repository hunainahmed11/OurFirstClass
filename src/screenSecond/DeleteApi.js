import React, {useState} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import axios from 'axios';

const DeleteApi = () => {

  const [comments, setComments] = useState([
    {
      id: 1,
      body: 'Amazing picture!',
    },
    {
      id: 2,
      body: 'Beautiful view!',
    },
    {
      id: 3,
      body: 'Great shot!',
    },
  ]);

  const deleteComment = async (id) => {

    try {

      const response = await axios.delete(
        `https://dummyjson.com/comments/${id}`
      );

      console.log(response.data);

      setComments(prevComments =>
        prevComments.filter(
          comment => comment.id !== id
        )
      );

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <View style={styles.container}>

      <Text style={styles.heading}>
        Comments
      </Text>

      {comments.map(item => (

        <View
          key={item.id}
          style={styles.commentCard}
        >

          <Text style={styles.comment}>
            {item.body}
          </Text>

          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() =>
              deleteComment(item.id)
            }
          >

            <Text style={styles.deleteText}>
              Delete
            </Text>

          </TouchableOpacity>

        </View>

      ))}

    </View>

  );

};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 25,
    backgroundColor: 'white',
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  commentCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: 15,
    marginBottom: 12,

    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },

  comment: {
    fontSize: 16,
    flex: 1,
  },

  deleteButton: {
    padding: 8,
  },

  deleteText: {
    color: 'red',
    fontWeight: 'bold',
  },

});

export default DeleteApi;