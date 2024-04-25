import { ThemeProvider } from 'react-native-magnus';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
  <ThemeProvider>

  </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
