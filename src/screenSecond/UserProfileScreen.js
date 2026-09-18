import React, {useState} from 'react';
import {View, Text,Button, StyleSheet} from 'react-native';
function UserProfileScreen (){
    const [user,setUser] = useState (null);
    const loadUser = async () => {
       const response = await fetch
       ('https://jsonplaceholder.typicode.com/users/1');
       const data = await response.json();
       setUser(data);
    };
    return (
        <View style={styles.container}>
        <Text style= {styles.title}>User Profile</Text>
        <Button title="Load User" onPress={loadUser} />
        {user && (
            <View style={styles.card}>
            <Text>Name: {user.name}</Text>
            <Text>Email: {user.email}</Text>
            <Text>Phone: {user.phone}</Text>
            <Text>Website: {user.website}</Text>
            </View>
        )}
        </View>

    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    card: {
        backgroundColor: 'lightgray',
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'gray',
    },

});
export default UserProfileScreen;