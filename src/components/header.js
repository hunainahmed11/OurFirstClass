import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Platform } from 'react-native';

export default function Header({ title, onLeftPress, onRightPress, leftIcon = '←', rightIcon = '🔔' }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        
        {/* Left Action Button Slot */}
        <TouchableOpacity style={styles.buttonSlot} onPress={onLeftPress} activeOpacity={0.7}>
          {onLeftPress && <Text style={styles.iconText}>{leftIcon}</Text>}
        </TouchableOpacity>

        {/* Center Title Slot */}
        <View style={styles.titleSlot}>
          <Text style={styles.headerTitle} numberOfLines={1}>
            {title}
          </Text>
        </View>

        {/* Right Action Button Slot */}
        <TouchableOpacity style={styles.buttonSlot} onPress={onRightPress} activeOpacity={0.7}>
          {onRightPress && <Text style={styles.iconText}>{rightIcon}</Text>}
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#ffffff',
    // Shadow for iOS
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    // Shadow for Android
    elevation: 3,
  },
  headerContainer: {
    height: Platform.OS === 'ios' ? 44 : 56, // Native OS standards
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  titleSlot: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    textAlign: 'center',
  },
  buttonSlot: {
    flex: 0.5,
    minWidth: 40,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 22,
    color: '#007AFF', // Standard system accent color
  },
});
