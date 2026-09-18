import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { getAuth, signOut } from '@react-native-firebase/auth';

const COLORS = {
  background: '#F6F7FB',
  primary: '#315C55',
  accent: '#F2B84B',
  card: '#FFFFFF',
  text: '#202124',
  secondaryText: '#74777F',
  light: '#EEF3F3',
  white: '#FFFFFF',
};

const basicLessons = [
  { title: 'Counter', subtitle: 'Practice useState', screen: 'Counter' },
  { title: 'Timer', subtitle: 'Practice useEffect & cleanup', screen: 'Timer' },
];

const apiLessons = [
  { title: 'GET API', subtitle: 'Fetch data from API', screen: 'GetApi' },
  { title: 'POST API', subtitle: 'Create data', screen: 'PostApi' },
  { title: 'PATCH API', subtitle: 'Update data', screen: 'PatchApi' },
  { title: 'DELETE API', subtitle: 'Delete data', screen: 'DeleteApi' },
];

const firebaseLessons = [
  { title: 'Firestore Students', subtitle: 'Add & Get student data', screen: 'AddStudent' },
];

export default function HomeScreen({ navigation }) {
  const user = getAuth().currentUser;
  const displayName = user?.displayName || user?.email?.split('@')[0] || 'Student';
  const userEmail = user?.email || 'student@gmail.com';

  const logoutUser = async () => {
    try {
      await signOut(getAuth());
    } catch (error) {
      console.log('Logout Error:', error);
    }
  };

  const renderLessonCards = (items) =>
    items.map((item) => (
      <Pressable
        key={item.title}
        style={styles.lessonCard}
        onPress={() => navigation.navigate(item.screen)}
      >
        <Text style={styles.lessonTitle}>{item.title}</Text>
        <Text style={styles.lessonSubtitle}>{item.subtitle}</Text>
      </Pressable>
    ));

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good morning,</Text>
          <Text style={styles.name}>{displayName}</Text>
          <Text style={styles.email}>{userEmail}</Text>
        </View>
      </View>

      <View style={styles.heroCard}>
        <Text style={styles.heroKicker}>React Native Learning Hub</Text>
        <Text style={styles.heroTitle}>Practice the concepts you have learned in class.</Text>
      </View>

      <Text style={styles.sectionLabel}>React Native Basics</Text>
      <View style={styles.lessonGrid}>{renderLessonCards(basicLessons)}</View>

      <Text style={styles.sectionLabel}>REST API Practice</Text>
      <View style={styles.lessonGrid}>{renderLessonCards(apiLessons)}</View>

      <Text style={styles.sectionLabel}>Firebase</Text>
      <View style={styles.lessonGrid}>{renderLessonCards(firebaseLessons)}</View>

      <Text style={styles.sectionLabel}>Account</Text>
      <View style={styles.accountRow}>
        <Pressable style={styles.accountCard} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.accountTitle}>Profile</Text>
        </Pressable>
        <Pressable style={styles.accountCard} onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.accountTitle}>Settings</Text>
        </Pressable>
      </View>

      <Pressable style={styles.logoutButton} onPress={logoutUser}>
        <Text style={styles.logoutText}>Logout</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: 20,
    paddingTop: 52,
    paddingBottom: 36,
  },
  header: {
    marginBottom: 18,
  },
  greeting: {
    color: COLORS.secondaryText,
    fontSize: 15,
  },
  name: {
    color: COLORS.text,
    fontSize: 28,
    fontWeight: '700',
    marginTop: 4,
  },
  email: {
    color: COLORS.secondaryText,
    fontSize: 14,
    marginTop: 4,
  },
  heroCard: {
    backgroundColor: COLORS.primary,
    borderRadius: 22,
    padding: 22,
    marginBottom: 18,
  },
  heroKicker: {
    color: COLORS.accent,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  heroTitle: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: '700',
    marginTop: 10,
    lineHeight: 30,
  },
  sectionLabel: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: '700',
    marginTop: 16,
    marginBottom: 12,
  },
  lessonGrid: {
    gap: 10,
  },
  lessonCard: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  lessonTitle: {
    color: COLORS.text,
    fontSize: 17,
    fontWeight: '700',
  },
  lessonSubtitle: {
    color: COLORS.secondaryText,
    fontSize: 13,
    marginTop: 4,
  },
  accountRow: {
    flexDirection: 'row',
    gap: 10,
  },
  accountCard: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    alignItems: 'center',
  },
  accountTitle: {
    color: COLORS.primary,
    fontWeight: '700',
  },
  logoutButton: {
    marginTop: 26,
    backgroundColor: COLORS.primary,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
  },
  logoutText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
  },
});