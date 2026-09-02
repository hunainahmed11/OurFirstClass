import React, { useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function TimerScreen() {
  const [seconds, setSeconds] = useState(0);
  // useRef interval ID ko yaad rakhta hai
  const timerRef = useRef(null);

  function startTimer() {
    if (timerRef.current === null) {
      console.log('Timer Started');
      timerRef.current = setInterval(() => setSeconds((oldSeconds) => oldSeconds + 1), 1000);
    }
  }

  function stopTimer() {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      console.log('Timer Stopped');
    }
  }

  function resetTimer() {
    stopTimer();
    setSeconds(0);
  }

  // Cleanup function: component unmount hone par timer stop hoga
  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
      console.log('Cleanup Function Called');
    };
  }, []);

  return (
    <View style={styles.screen}>
      <Text style={styles.eyebrow}>LEARNING TOOL</Text>
      <Text style={styles.title}>Focus Timer</Text>
      <View style={styles.timerCircle}>
        <Text style={styles.seconds}>{seconds}</Text>
        <Text style={styles.unit}>SECONDS</Text>
      </View>
      <Pressable style={styles.primaryButton} onPress={startTimer}><Text style={styles.primaryText}>Start timer</Text></Pressable>
      <View style={styles.row}>
        <Pressable style={styles.smallButton} onPress={stopTimer}><Text style={styles.buttonText}>Stop</Text></Pressable>
        <Pressable style={styles.smallButton} onPress={resetTimer}><Text style={styles.buttonText}>Reset</Text></Pressable>
      </View>
      <Text style={styles.lesson}>Leaving this screen calls the cleanup function and stops the timer.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F8F8F6', padding: 24, paddingTop: 58 },
  eyebrow: { color: '#E87843', fontWeight: '800', fontSize: 11, letterSpacing: 1.5 },
  title: { color: '#20211F', fontSize: 36, fontWeight: '800', marginTop: 6, textAlign: 'center' },
  timerCircle: { borderWidth: 10, borderColor: '#F4C95D', backgroundColor: '#1D4F4A', width: 220, height: 220, borderRadius: 110, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginVertical: 35 },
  seconds: { color: '#FFFFFF', fontSize: 62, fontWeight: '800' },
  unit: { color: '#A8D4C5', fontSize: 12, letterSpacing: 2 },
  primaryButton: { backgroundColor: '#E87843', borderRadius: 12, padding: 17, alignItems: 'center' },
  primaryText: { color: '#FFFFFF', fontWeight: '800', fontSize: 16 },
  row: { flexDirection: 'row', gap: 12, marginTop: 12 },
  smallButton: { flex: 1, backgroundColor: '#FFFFFF', borderRadius: 12, padding: 16, alignItems: 'center' },
  buttonText: { color: '#1D4F4A', fontWeight: '800' },
  lesson: { color: '#99978F', textAlign: 'center', lineHeight: 20, marginTop: 30 },
});