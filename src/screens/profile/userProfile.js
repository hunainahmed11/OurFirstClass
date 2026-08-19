import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function UserProfile() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile Screen</Text>



            <TouchableOpacity style={styles.button} onPress={() => navigation.openDrawer()}>
        <Text style={styles.buttonText}>Open Drawer</Text>
      </TouchableOpacity>



            <TouchableOpacity style={styles.button} onPress={() => navigation.closeDrawer()}>
        <Text style={styles.buttonText}>Close Drawer</Text>
      </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.toggleDrawer()}>
        <Text style={styles.buttonText}>Toggle Drawer</Text>
      </TouchableOpacity>

      <Text style={styles.text}>Yeh screen profile ka example hai. Isay drawer aur profile stack dono se access kar sakte hain.</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserDetail')}>
        <Text style={styles.buttonText}>Go to User Detail</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.buttonText}>Go to Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#4b5563',
    marginBottom: 20,
  },
  button: {
    marginTop: 12,
    borderRadius: 10,
    paddingVertical: 12,
    backgroundColor: '#4F46E5',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
