// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import RootStack from './src/navigations/rootStack';


// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <RootStack />

//       </NavigationContainer>

//     </SafeAreaProvider>
//   );
// }

// let name = "Ayan";

// for (let i = name.length - 1; i >= 0; i--) {

//     console.log(name[i]);

// }

// import { View, Text } from "react-native";

// export default function App() {

//     let name = "Ayan";

// for (let i = 0; i < name.length; i++) {

//     console.log(name[i]);

// }

//     return (

//         <View
//         style={{
//             flex:1,
//             justifyContent:"center",
//             alignItems:"center"
//         }}>

//             <Text style={{fontSize:25}}>
//                 {name[0]}
//             </Text>

//         </View>

//     );

// }



// import React from 'react';
// import { View, Text, TouchableOpacity } from "react-native";

// export default function App() {

//   const students = [
//     { name: "Ali", id: 1, class: "10th", rank: 1 },

//     { name: "Ahmed", id: 2, class: "10th", rank: 2 },

//     { name: "Sara", id: 3, class: "10th", rank: 3 }
//   ];

//   const marks = [
//     50,
//     30,
//     90,
//     70,
//     40
//   ];

//   return (

//     <View style={{
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center"
//     }}>
//       {students.map((item) => (
//         <TouchableOpacity>
//           <View style={{ marginBottom: 10, borderWidth: 1, borderColor: 'gray', padding: 10 }} key={item.id}>
//             <Text>
//               {item.name} - {item.class} - Rank: {item.rank}
//             </Text>
//           </View>
//         </TouchableOpacity>

//       ))}



//       {marks.map((mark, index) => (
//         <View style={{ marginBottom: 10, borderWidth: 1, borderColor: 'gray', padding: 10 }} key={index}>
//           <Text style={{ fontSize: 28 ,color: mark >= 50 ? 'green' : 'red'}}>
//             Marks  of  students: {mark}-
//             {mark>=50 ?"Pass":"Fail"}
//           </Text>
//         </View>
//       ))}
//     </View>
//   )
// }

// import React from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
// } from 'react-native';

// export default function App() {
//   const foods = [
//     { id: '1', name: 'Burger', price: 600, emoji: '🍔' },
//     { id: '2', name: 'Pizza', price: 1200, emoji: '🍕' },
//     { id: '3', name: 'Fries', price: 350, emoji: '🍟' },
//     { id: '4', name: 'Sandwich', price: 500, emoji: '🥪' },
//     { id: '5', name: 'Burger', price: 600, emoji: '🍔' },
//     { id: '6', name: 'Pizza', price: 1200, emoji: '🍕' },
//     { id: '7', name: 'Fries', price: 350, emoji: '🍟' },
//     { id: '8', name: 'Sandwich', price: 500, emoji: '🥪' },
//     { id: '9', name: 'Burger', price: 600, emoji: '🍔' },
//     { id: '10', name: 'Pizza', price: 1200, emoji: '🍕' },
//     { id: '11', name: 'Fries', price: 350, emoji: '🍟' },
//     { id: '12', name: 'Sandwich', price: 500, emoji: '🥪' },
//     { id: '13', name: 'Burger', price: 600, emoji: '🍔' },
//     { id: '14', name: 'Pizza', price: 1200, emoji: '🍕' },
//     { id: '15', name: 'Fries', price: 350, emoji: '🍟' },
//     { id: '16', name: 'Sandwich', price: 500, emoji: '🥪' },
//     { id: '17', name: 'Burger', price: 600, emoji: '🍔' },
//     { id: '18', name: 'Pizza', price: 1200, emoji: '🍕' },
//     { id: '19', name: 'Fries', price: 350, emoji: '🍟' },
//     { id: '20', name: 'Sandwich', price: 500, emoji: '🥪' },
//   ];

//   const renderFoodItem = ({ item }) => (
//     <View style={styles.card}>
//       <Text style={styles.emoji}>{item.emoji}</Text>

//       <View style={styles.details}>
//         <Text style={styles.name}>{item.name}</Text>
//         <Text style={styles.price}>
//           Rs. {item.price}
//         </Text>
//       </View>

//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Order</Text>
//       </TouchableOpacity>
//     </View>

//   )
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.heading}>Today's Menu</Text>

//       <FlatList
//         data={foods}
//         keyExtractor={(item) => item.id}
//         renderItem={renderFoodItem}
//         ItemSeparatorComponent={() => <View style={styles.separator} />}
//         ListEmptyComponent={<Text style={styles.empty}>No items found!</Text>}
        
//         />

//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF7ED',
//     padding: 20,
//   },

//   heading: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },

//   card: {
//     backgroundColor: 'white',
//     padding: 15,
//     borderRadius: 16,
//     marginBottom: 15,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },

//   emoji: {
//     fontSize: 45,
//   },

//   details: {
//     flex: 1,
//     marginLeft: 15,
//   },

//   name: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },

//   price: {
//     marginTop: 5,
//     color: '#F97316',
//     fontWeight: 'bold',
//   },

//   button: {
//     backgroundColor: '#F97316',
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     borderRadius: 10,
//   },

//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   separator: { height: 10, backgroundColor: '#ccc' },
//   empty: { textAlign: 'center', marginTop: 20, color: 'gray',fontSize:30 },
// });






// import React from 'react';
// import { FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

// const App = () => {
//   // 1. Data Array
//   const students = [
//     { id: '1', name: 'Ali Khan', age: '20' },
//     { id: '2', name: 'Sara Ahmed', age: '22' },
//     { id: '3', name: 'Usman Ghani', age: '21' },
//     { id: '4', name: 'Zainab Bibi', age: '19' },
//     { id: '5', name: 'Zainab Bibi', age: '19' },
//     { id: '6', name: 'Zainab Bibi', age: '19' },
//   ];

//   // 2. Individual Item Component
//   const renderStudentCard = ({ item }) => (
//     <View style={styles.card}>
      
//       <Text style={styles.name}>{item.name}</Text>
  
//       <Text style={styles.age}>Age: {item.age}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Students sdsdsdsdsdsds Directory</Text>
      
//       {/* 3. FlatList Component */}
//       <FlatList
//         data={students}
//         renderItem={renderStudentCard}
//         keyExtractor={(item) => item.id}
//         ItemSeparatorComponent={}
        
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, paddingTop: 50, paddingHorizontal: 16 },
//   header: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
//   card: { backgroundColor: '#f9c2ff', padding: 15, marginBottom: 10, borderRadius: 8 },
//   name: { fontSize: 18, fontWeight: 'bold' },
//   age: { fontSize: 14, color: '#555' },
// });

// export default App;





import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DrawerNavigator from './src/navigation/DrawerNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#F5F7FB" />
        <DrawerNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


