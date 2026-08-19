import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 6,
  },
  subtitle: {
    color: '#475569',
    marginBottom: 12,
  },
});
