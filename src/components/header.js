import React from "react"
import { View,Text ,StyleSheet,useWindowDimensions} from "react-native"

export default function Header(){

     const {width} = useWindowDimensions();
    
      const isSmallScreen = width < 360;
    return(
     <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good Morning</Text>
            <Text
              style={[
                styles.studentName,
                {
                  fontSize: isSmallScreen ? 22 : 28,
                },
              ]}>
              Muhammad Ali
            </Text>
          </View>

          <View style={styles.notificationButton}>
            <Text style={styles.notificationIcon}>🔔</Text>

            <View style={styles.notificationDot} />
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
      header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  greeting: {
    fontSize: 15,
    color: '#777',
  },

  studentName: {
    fontWeight: 'bold',
    color: '#1D2433',
    marginTop: 3,
  },

  notificationButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    elevation: 3,
  },

  notificationIcon: {
    fontSize: 21,
  },

  notificationDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: 'red',
    position: 'absolute',
    right: 10,
    top: 9,
  },

})