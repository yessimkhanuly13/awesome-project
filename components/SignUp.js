import { View, Text, Alert, TouchableOpacity } from "react-native"
import { useForm } from "react-hook-form"
import CustomInput from "./CustomInput"
import CustomButton from "./CustomButton"

function SignUp({setSigned, data, setData}) {
    const {handleSubmit, control, formState:{errors}, reset, watch} = useForm({defaultValues: {
        username:"",
        password:"",
        confirmPassword:""
    }})
    const pass = watch('password')
    const handleSignUp = (formData) => {
        const isExist = data.find((user)=>user.username === formData.username)
        if(!isExist){
            reset()
            setSigned(true)
            setData((prevData)=>[...prevData, {
                username: formData.username,
                password: formData.password
            }])
            Alert.alert(`Succesfully signed up!`)
        }else{
            Alert.alert("User with this username already exist!")   
        }
    }
  return (
    <View style={{marginTop: 10, width:"100%",display:"flex", flexDirection:"col", alignItems:"center", justifyContent: "center"}}>
        <CustomInput control={control} name="username" placeholder="Username" rules={{required: "Username is required"}}/>
        <CustomInput control={control} name="password" placeholder="Password" secureTextEntry={true} rules={{required: "Password is required", minLength: {value: 3, message: "Minimum length of password should be 5 characters", }}}/>
        <CustomInput control={control} name="confirmPassword" placeholder="Confirm Password" secureTextEntry={true} rules={{validate: value => value === pass || "Passwords do not match. Please try again" }}/>
            <View style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: 10
            }}>
                <Text>Already have an account? </Text>
                <TouchableOpacity
                 onPress={()=>setSigned(true)}>
                    <Text style={{color:"blue"}}>Sign In</Text>
                </TouchableOpacity>
            </View>
            
            <CustomButton title="Sign Up" onPress={handleSubmit(handleSignUp)}/>
    </View>
  )
}

export default SignUp