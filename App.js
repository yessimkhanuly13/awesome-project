import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './components/SignIn';
import { useState } from 'react';

export default function App() {
  const [isSigned, setSigned] = useState(true)
  return (
    <View style={styles.container}>
      <Text>{isSigned ? "Sign In:" : "Sign Up:"}</Text>
      <StatusBar style="auto" />

      <SignIn/>
    </View>
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
