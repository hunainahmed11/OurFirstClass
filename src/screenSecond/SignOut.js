import React from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';

import {
  getAuth,
  signOut,
} from '@react-native-firebase/auth';

const SignOut = ({navigation}) => {

  const signOutUser = async () => {
    try {
      const auth = getAuth();

      await signOut(auth);

      Alert.alert(
        'Success',
        'Logged out successfully',
      );

      navigation.navigate('Login');

    } catch (error) {
      console.log(error);

      Alert.alert(
        'Logout Error',
        error.message,
      );
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        Logout
      </Text>

      <Button
        title="Logout"
        onPress={signOutUser}
      />

      <View style={styles.button}>
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  button: {
    marginTop: 10,
  },
});

export default SignOut;
