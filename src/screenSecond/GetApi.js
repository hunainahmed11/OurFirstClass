import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import axios from 'axios';



const GetApi = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {

    try {

      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );

      const data = await response.data;
      setUsers(data);
      console.log(data);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        Users
      </Text>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (

          <View style={styles.card}>

            <Text style={styles.name}>
              {item.name}
            </Text>

            <Text>
              {item.email}
            </Text>
            <Text>
              {item.phone}
            </Text>
          </View>

        )}
      />

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  card: {
    padding: 15,
    marginTop: 15,
    backgroundColor: '#eeeeee',
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },

});

export default GetApi;