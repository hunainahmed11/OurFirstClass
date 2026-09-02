import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StudentCard from '../components/StudentCard';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

export default function StudentScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Student Information Ahmed</Text>
            <View style={styles.card}>


             <StudentCard
             name="Ahmed"
             age={20}
             designation="Teacher"
       
             /> 
             <FontAwesome6 name="star" size={30} color="#000" />


             <FontAwesome6 name="address-card" size={40} color="#7b0909"  />
           
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
    },
});