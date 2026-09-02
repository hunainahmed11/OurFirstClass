import React, { useEffect, useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);

  // Dark mode change hone par useEffect chalega
  useEffect(() => {
    console.log('Dark mode changed:', darkMode);
  }, [darkMode]);

  return (
    <View style={[styles.screen, darkMode && styles.darkScreen]}>
      <Text style={styles.eyebrow}>PREFERENCES</Text>
      <Text style={[styles.title, darkMode && styles.darkText]}>Settings</Text>
      <View style={[styles.setting, darkMode && styles.darkSetting]}>
        <View>
          <Text style={[styles.settingTitle, darkMode && styles.darkText]}>Dark mode</Text>
          <Text style={styles.description}>Change the app appearance</Text>
        </View>
        <Switch value={darkMode} onValueChange={setDarkMode} trackColor={{ false: '#D8D7D1', true: '#E87843' }} />
      </View>
      <Text style={[styles.status, darkMode && styles.darkText]}>Dark Mode {darkMode ? 'ON' : 'OFF'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F8F8F6', padding: 24, paddingTop: 58 },
  darkScreen: { backgroundColor: '#20211F' },
  eyebrow: { color: '#E87843', fontWeight: '800', fontSize: 11, letterSpacing: 1.5 },
  title: { color: '#20211F', fontSize: 36, fontWeight: '800', marginTop: 6, marginBottom: 28 },
  darkText: { color: '#FFFFFF' },
  setting: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 18, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  darkSetting: { backgroundColor: '#30312E' },
  settingTitle: { color: '#20211F', fontSize: 17, fontWeight: '700' },
  description: { color: '#99978F', marginTop: 5 },
  status: { color: '#1D4F4A', fontSize: 19, fontWeight: '700', marginTop: 24 },
});