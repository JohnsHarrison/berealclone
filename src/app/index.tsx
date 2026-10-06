import { Text, View, StyleSheet, TextInput } from "react-native";

// Image component from expo used for efficient image rendering
import { Image } from "expo-image"

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.helloworldTitle}>AHHHHHHHHHHHH</Text>

      {/* source={{uri:""}}  is the same as <img src="">*/}
      <Image source={{uri:"https://i.redd.it/0de7lsup1jff1.jpeg"}} style={styles.image}/>

      {/* input field from react-native.*/}
      {/* default height and width are 0. need to set manually as well as placeholder text */}
      <TextInput style={styles.input} placeholderTextColor={"blue"} placeholder="email"/>


      <Text>WHERE IS THIS</Text>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  helloworldTitle:{
    color:"blue"
  },
  image:{
    width:200,
    height:200,
  },
  input:{
    width:100,
    height:111,
    borderColor:"black",
    borderWidth:1,    
  }
});
