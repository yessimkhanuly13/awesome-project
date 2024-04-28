import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './components/SignIn';
import { useState } from 'react';
import SignUp from './components/SignUp';

export default function App() {
  const [isSigned, setSigned] = useState(true)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{isSigned ? "Sign In:" : "Sign Up:"}</Text>
      <StatusBar style="auto" />

      {isSigned ? (<SignIn setSigned={setSigned}/>) : (<SignUp setSigned={setSigned}/>)}
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
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});
