import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/profile.jpeg')} style={styles.image} />

      <View style={styles.titleView}>
        <Text style={styles.titleText}>Login</Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          placeholder="Enter your name"
          style={styles.input}
          placeholderTextColor={'black'}
        />

        <TextInput
          placeholder="Enter your password"
          style={styles.input}
          placeholderTextColor={'black'}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.actionButton} onPress={() => navigation.replace('MainApp')}>
        <Text style={styles.actionButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.linkText}>Don't have an account? Signup</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('ForgetPassword')}>
        <Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 60,
  },
  titleView: {
    paddingHorizontal: 30,
    justifyContent: 'center',
    height: 90,
  },
  titleText: {
    fontSize: 36,
    fontWeight: '700',
  },
  inputView: {
    paddingHorizontal: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    padding: 12,
    height: 50,
    marginTop: 12,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: '#ffffff',
  },
  actionButton: {
    marginTop: 24,
    borderRadius: 10,
    marginHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkButton: {
    marginTop: 16,
    alignItems: 'center',
  },
  linkText: {
    color: '#4F46E5',
    fontSize: 15,
    fontWeight: '600',
  },
});
