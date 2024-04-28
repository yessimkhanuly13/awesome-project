import { View, Text, Alert, TouchableOpacity } from "react-native"
import { useForm } from "react-hook-form"
import CustomInput from "./CustomInput"
import CustomButton from "./CustomButton"

function SignIn({setSigned}) {

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
        <CustomInput control={control} name="username" placeholder="username" secureTextEntry={false} rules={{required: "Username is required"}}/>
        <CustomInput control={control} name="password" placeholder="password" secureTextEntry={true} rules={{required: "Password is required", minLength: {value: 3, message: "Minimum length of password should be 5 characters", }}}/>
            <View style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: 10
            }}>
                <Text>Don't have an account? </Text>
                <TouchableOpacity
                 onPress={()=>setSigned(false)}>
                    <Text style={{color:"blue"}}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            
            <CustomButton title="Sign In" onPress={handleSubmit(handleLogin)}/>
    </View>
  )
}

export default SignIn