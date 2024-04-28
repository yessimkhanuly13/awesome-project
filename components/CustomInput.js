import { Controller } from "react-hook-form";
import { TextInput, StyleSheet, View, Text } from "react-native";

export default function CustomInput({control, placeholder, name, secureTextEntry, rules }) {
  
  return (
    <View style={styles.container}>
     <Controller
            control={control}
            rules={rules}
            render={({field: {onChange, onBlur, value}, fieldState:{error}})=>(
              <View style={{width: "50%"}}>
                <View 
                  style={{borderWidth:1, padding:5, margin:1, borderRadius: 5, borderColor: error ? "red" : "black"}}
                >
                    <TextInput
                      style={{width: "100%"}}
                      placeholder={placeholder}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      secureTextEntry={secureTextEntry}
                    />
              </View>
              {error && <Text style={{color: "red", alignSelf: "flex-start", padding: 3}}>{error.message || "Error"}</Text>}
              </View>
            )}
            name={name}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width:"100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
