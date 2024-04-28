import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login';
import { useState } from 'react';

export default function App() {
  const [isSigned, setSigned] = useState(true)
  return (
    <View style={styles.container}>
      <Text>{isSigned ? "LOGIN:" : "SIGN UP:"}</Text>
      <StatusBar style="auto" />

      <Login/>
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
