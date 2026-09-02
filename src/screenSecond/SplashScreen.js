
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

export default function SplashScreen() {
    return (
        <View style={styles.container}>
          <Ionicons name="checkmark-sharp" size={100} color="#143ed4" />
            <Text style={styles.subtitle}>Organize Your Tasks</Text>
            <Text style={styles.subtitle}>Build Better Habits</Text>
            <Text style={styles.Dots}>. . .</Text>
          
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
    },
    Dots:{
        color: '#394296',
        fontWeight: 'bold',
        fontSize: 40,
        top: 220,
    }
});