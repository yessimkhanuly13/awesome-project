import { useState } from "react"
import { TextInput, View, Text, Button, Alert, TouchableOpacity } from "react-native"

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        if(!username || !password){
            Alert.alert("Fill all the fields!")
            return 
        }
        Alert.alert(`Hello, ${username}!`)
        setPassword('')
        setUsername('')
    }

  return (
    <View style={{marginTop: 10}}>
            <TextInput
                placeholder="email"
                onChangeText={setUsername}
                value={username}
            />
            <TextInput
                placeholder="password"
                onChangeText={setPassword}
                value={password}
                secureTextEntry
            />
            <View style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: 10
            }}>
                <Text>Don't have an account? </Text>
                <TouchableOpacity
                 onPress={()=>Alert.alert('Sign Up')}>
                    <Text style={{color:"blue"}}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            
            <Button
                title="SIGN IN"
                color={"green"}
                onPress={handleLogin}
            />
    </View>
  )
}

export default Login