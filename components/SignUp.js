import { View, Text, Button, Alert, TouchableOpacity } from "react-native"
import { useForm } from "react-hook-form"
import CustomInput from "./CustomInput"
import CustomButton from "./CustomButton"

function SignUp({setSigned}) {

  return (
    <View style={{marginTop: 10, width:"100%",display:"flex", flexDirection:"col", alignItems:"center", justifyContent: "center"}}>
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
            
            <CustomButton title="Sign Up" onPress={()=>Alert.alert("XDD")}/>
    </View>
  )
}

export default SignUp