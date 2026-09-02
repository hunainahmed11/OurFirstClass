import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StudentCard from '../components/StudentCard';

export default function StudentScreen() {
  return (
    <StudentCard name="Ubaid" age={10} designation="Student" />
  );
}