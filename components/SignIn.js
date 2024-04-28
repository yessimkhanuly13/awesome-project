import { View, Text, Button, Alert, TouchableOpacity } from "react-native"
import { useForm } from "react-hook-form"
import CustomInput from "./CustomInput"

function SignIn() {

    const {handleSubmit, control, formState: {errors}, reset} = useForm({defaultValues: {
        username: "",
        password: ""
    }})

    const handleLogin = (data) => {
        reset()
      Alert.alert(`Hello, ${data.username}!`)
    }

  return (
    <View style={{marginTop: 10, width:"100%",display:"flex", flexDirection:"col", alignItems:"center", justifyContent: "center"}}>
        <CustomInput control={control} name="username" placeholder="username" secureTextEntry={false}/>
        <CustomInput control={control} name="password" placeholder="password" secureTextEntry={true}/>
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
                title="Enter"
                style={{width:"50%", backgroundColor: "green", color: "white"}}
                color={"green"}
                onPress={handleSubmit(handleLogin)}
            />
    </View>
  )
}

export default SignIn