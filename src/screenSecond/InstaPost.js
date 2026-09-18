import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Alert,
  ActivityIndicator,
} from 'react-native';

import axios from 'axios';

const InstaPost = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      apiId: 1,
      body: 'Beautiful picture!',
    },
    {
      id: 2,
      apiId: 2,
      body: 'Amazing view 😍',
    },
  ]);

  const [comment, setComment] = useState('');
  const [selectedCommentId, setSelectedCommentId] =
    useState(null);

  const [loading, setLoading] = useState(false);

  // ------------------------------------------------
  // POST COMMENT
  // ------------------------------------------------

  const addComment = async () => {
    if (!comment.trim()) {
      Alert.alert('Error', 'Please enter a comment');
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        'https://dummyjson.com/comments/add',
        {
          body: comment,
          postId: 3,
          userId: 5,
        },
      );

      console.log('POST RESPONSE:', response.data);

      const newComment = {
        id: Date.now(),
        apiId: response.data.id,
        body: comment.trim(),
      };

      setComments(prevComments => [
        ...prevComments,
        newComment,
      ]);

      setComment('');

    } catch (error) {
      console.log('POST ERROR:', error);
      Alert.alert('Error', 'Comment could not be added');

    } finally {
      setLoading(false);
    }
  };

  // ------------------------------------------------
  // SELECT COMMENT FOR EDIT
  // ------------------------------------------------

  const editComment = item => {
    setSelectedCommentId(item.id);
    setComment(item.body);
  };

  // ------------------------------------------------
  // PATCH COMMENT
  // ------------------------------------------------

  const updateComment = async () => {
    if (!comment.trim()) {
      Alert.alert('Error', 'Please enter a comment');
      return;
    }

    try {
      setLoading(true);

      const selectedComment = comments.find(
        item => item.id === selectedCommentId,
      );

      if (!selectedComment) {
        setSelectedCommentId(null);
        setComment('');
        return;
      }

      const response = await axios.patch(
        `https://dummyjson.com/comments/${selectedComment.apiId}`,
        {
          body: comment,
        },
      );

      console.log('PATCH RESPONSE:', response.data);

      setComments(prevComments =>
        prevComments.map(item =>
          item.id === selectedCommentId
            ? {
                ...item,
                body: comment,
              }
            : item,
        ),
      );

      setSelectedCommentId(null);
      setComment('');

    } catch (error) {
      console.log('PATCH ERROR:', error);
      Alert.alert('Error', 'Comment could not be updated');

    } finally {
      setLoading(false);
    }
  };

  // ------------------------------------------------
  // DELETE COMMENT
  // ------------------------------------------------

  const deleteComment = async item => {
    try {
      setLoading(true);

      const response = await axios.delete(
        `https://dummyjson.com/comments/${item.apiId ?? item.id}`,
      );

      console.log('DELETE RESPONSE:', response.data);

      setComments(prevComments =>
        prevComments.filter(
          commentItem => commentItem.id !== item.id,
        ),
      );

      if (selectedCommentId === item.id) {
        cancelEdit();
      }

    } catch (error) {
      console.log('DELETE ERROR:', error);
      Alert.alert('Error', 'Comment could not be deleted');

    } finally {
      setLoading(false);
    }
  };

  // ------------------------------------------------
  // CANCEL EDIT
  // ------------------------------------------------

  const cancelEdit = () => {
    setSelectedCommentId(null);
    setComment('');
  };

  // ------------------------------------------------
  // COMMENT CARD
  // ------------------------------------------------

  const renderComment = ({item}) => {
    return (
      <View style={styles.commentCard}>

        <View style={styles.commentLeft}>

          <View style={styles.avatarSmall}>
            <Text style={styles.avatarText}>
              U
            </Text>
          </View>

          <View style={styles.commentContent}>
            <Text style={styles.username}>
              user_05
            </Text>

            <Text style={styles.commentText}>
              {item.body}
            </Text>
          </View>

        </View>

        <View style={styles.actions}>

          <TouchableOpacity
            style={styles.editAction}
            onPress={() => editComment(item)}>
            <Text style={styles.editText}>
              Edit
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.deleteAction}
            onPress={() => deleteComment(item)}>
            <Text style={styles.deleteText}>
              Delete
            </Text>
          </TouchableOpacity>

        </View>

      </View>
    );
  };

  // ------------------------------------------------
  // UI
  // ------------------------------------------------

  return (
    <SafeAreaView style={styles.safeArea}>

      <StatusBar
        barStyle="dark-content"
        backgroundColor="#ffffff"
      />

      <View style={styles.container}>

        {/* HEADER */}

        <View style={styles.header}>

          <Text style={styles.headerTitle}>
            Social Post
          </Text>

          <Text style={styles.headerIcon}>
            •••
          </Text>

        </View>

        {/* POST USER */}

        <View style={styles.userSection}>

          <Image
            source={{
              uri: 'https://i.pravatar.cc/150?img=12',
            }}
            style={styles.avatar}
          />

          <View>
            <Text style={styles.postUsername}>
              alex_walker
            </Text>

            <Text style={styles.location}>
              Northern Areas
            </Text>
          </View>

        </View>

        {/* POST IMAGE */}

        <Image
          source={{
            uri: 'https://picsum.photos/700/500',
          }}
          style={styles.postImage}
        />

        {/* POST INFO */}

        <View style={styles.postInfo}>

          <Text style={styles.likes}>
            ❤️ 1,248 likes
          </Text>

          <Text style={styles.caption}>
            <Text style={styles.captionUser}>
              alex_walker{' '}
            </Text>

            Exploring beautiful places and enjoying
            every moment.
          </Text>

        </View>

        {/* COMMENTS TITLE */}

        <View style={styles.commentsHeader}>

          <Text style={styles.commentsTitle}>
            Comments
          </Text>

          <Text style={styles.commentCount}>
            {comments.length}
          </Text>

        </View>

        {/* COMMENTS */}

        <FlatList
          data={comments}
          keyExtractor={item =>
            item.id.toString()
          }
          renderItem={renderComment}
          showsVerticalScrollIndicator={false}
          style={styles.list}
        />

        {/* EDIT MODE MESSAGE */}

        {selectedCommentId !== null && (

          <View style={styles.editMode}>

            <Text style={styles.editModeText}>
              Editing comment #{selectedCommentId}
            </Text>

            <TouchableOpacity
              onPress={cancelEdit}>
              <Text style={styles.cancelText}>
                Cancel
              </Text>
            </TouchableOpacity>

          </View>

        )}

        {/* COMMENT INPUT */}

        <View style={styles.inputContainer}>

          <TextInput
            style={styles.input}
            placeholder={
              selectedCommentId !== null
                ? 'Edit your comment...'
                : 'Write a comment...'
            }
            placeholderTextColor="#999999"
            value={comment}
            onChangeText={setComment}
          />

          <TouchableOpacity
            style={styles.postButton}
            onPress={
              selectedCommentId !== null
                ? updateComment
                : addComment
            }
            disabled={loading}>

            {loading ? (

              <ActivityIndicator color="#fff" />

            ) : (

              <Text style={styles.postButtonText}>
                {selectedCommentId !== null
                  ? 'Update'
                  : 'Post'}
              </Text>

            )}

          </TouchableOpacity>

        </View>

      </View>

    </SafeAreaView>
  );
};

export default InstaPost;

// ------------------------------------------------
// STYLES
// ------------------------------------------------

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  // HEADER

  header: {
    height: 60,
    paddingHorizontal: 20,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111111',
  },

  headerIcon: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
  },

  // USER SECTION

  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },

  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    marginRight: 12,
  },

  postUsername: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111111',
  },

  location: {
    fontSize: 12,
    color: '#777777',
    marginTop: 2,
  },

  // POST IMAGE

  postImage: {
    width: '100%',
    height: 270,
    backgroundColor: '#eeeeee',
  },

  // POST INFO

  postInfo: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 12,
  },

  likes: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 8,
    color: '#111111',
  },

  caption: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333333',
  },

  captionUser: {
    fontWeight: '700',
    color: '#111111',
  },

  // COMMENTS HEADER

  commentsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 8,
  },

  commentsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111111',
  },

  commentCount: {
    marginLeft: 8,

    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 3,

    borderRadius: 12,

    fontSize: 12,
    color: '#555555',
  },

  // LIST

  list: {
    flex: 1,
    paddingHorizontal: 16,
  },

  // COMMENT CARD

  commentCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingVertical: 12,

    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },

  commentLeft: {
    flexDirection: 'row',
    flex: 1,
  },

  avatarSmall: {
    width: 36,
    height: 36,
    borderRadius: 18,

    backgroundColor: '#222222',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 10,
  },

  avatarText: {
    color: '#ffffff',
    fontWeight: '700',
  },

  commentContent: {
    flex: 1,
  },

  username: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111111',
  },

  commentText: {
    fontSize: 14,
    color: '#444444',
    marginTop: 3,
    lineHeight: 19,
  },

  // ACTIONS

  actions: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  editAction: {
    marginBottom: 8,
  },

  editText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2563eb',
  },

  deleteText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#dc2626',
  },

  // EDIT MODE

  editMode: {
    marginHorizontal: 16,
    marginBottom: 8,

    paddingHorizontal: 12,
    paddingVertical: 8,

    backgroundColor: '#fff8e6',
    borderRadius: 8,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  editModeText: {
    fontSize: 13,
    color: '#7a5200',
  },

  cancelText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#dc2626',
  },

  // INPUT

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 16,
    paddingVertical: 12,

    borderTopWidth: 1,
    borderTopColor: '#eeeeee',

    backgroundColor: '#ffffff',
  },

  input: {
    flex: 1,

    backgroundColor: '#f4f4f4',

    borderRadius: 24,

    paddingHorizontal: 16,
    paddingVertical: 11,

    fontSize: 14,

    marginRight: 10,
  },

  postButton: {
    minWidth: 75,
    height: 44,

    backgroundColor: '#111111',

    borderRadius: 22,

    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: 15,
  },

  postButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  },

});