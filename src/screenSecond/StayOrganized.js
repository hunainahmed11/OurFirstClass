import React from "react";
import { View, Text, TouchableOpacity ,StyleSheet} from "react-native";
import Ionicons from '@react-native-vector-icons/ionicons';




export default function StayOrganized() {
    return (
        <View style={styles.container}>
             <Ionicons name="checkmark-sharp" size={100} color="#143ed4" />
            <Text style={styles.title}>Stay Organized</Text>
            <Text style={styles.subtitle}>Manage your tasks and habits</Text>
            <Text style={styles.subtitle}>in one simple place.</Text>
            <Text style={styles.Dots}>. . .</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>

    )
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
        marginTop: 40,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
    },
    Dots:{
        color: '#394296',
        fontWeight: 'bold',
        fontSize: 40,
        alignSelf: 'center',
        marginTop: 220,
     
    },
    button: {
        backgroundColor: '#143ed4',
        paddingHorizontal: 170,
        paddingVertical: 15,
        borderRadius: 5,
        marginTop: 40,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    }
});