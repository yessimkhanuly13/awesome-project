import { View, Text, Alert, TouchableOpacity } from "react-native"
import { useForm } from "react-hook-form"
import CustomInput from "./CustomInput"
import CustomButton from "./CustomButton"

function SignIn({setSigned, data}) {

    const {handleSubmit, control, formState: {errors}, reset} = useForm({defaultValues: {
        username: "",
        password: ""
    }})

    const handleSignIn = (formData) => {
        const isExist = data.find((user)=>user.username === formData.username)
        if(isExist){
            reset()
            Alert.alert(`Hello, ${formData.username}!`)
        }else{
            Alert.alert("There is no user with this username!")
        }
    }

  return (
    <View style={{marginTop: 10, width:"100%",display:"flex", flexDirection:"col", alignItems:"center", justifyContent: "center"}}>
        <CustomInput control={control} name="username" placeholder="Username" rules={{required: "Username is required"}}/>
        <CustomInput control={control} name="password" placeholder="Password" secureTextEntry={true} rules={{required: "Password is required", minLength: {value: 3, message: "Minimum length of password should be 5 characters", }}}/>
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
            
            <CustomButton title="Sign In" onPress={handleSubmit(handleSignIn)}/>
    </View>
  )
}

export default SignIn