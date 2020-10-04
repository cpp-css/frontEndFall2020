import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight, Alert
} from 'react-native';


const email = () => {
  
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [isValid, setValid] = useState(true)


  const doSignUp = () => {

    if (email === "") {
      Alert.alert("Email Required")
      setError("Email required *")
      setValid(false)
      return
    } 
    else {
      Alert.alert("Email is correct")
    }
  }

  return (
    <View>

      
      <View style={styles.container}>

        <TextInput style={styles.textField}
                placeholder= "Email address"
                onChangeText={text => {setError
                                       setEmail(text)
                                      }}
                                      error={isValid}
                                      value={email}
             />      


      </View>

      

      <View style={{flexDirection: "row",
                    justifyContent: "space-around"}}>
         <TouchableHighlight
          style={styles.signInButtonStyle}
          onPress={doSignUp}>
            <Text style={styles.signInButtonText}>Continue</Text>
          </TouchableHighlight>
        
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
     height: 300,
     borderWidth: 1,
     marginTop: 5
  },

  textField: {
    marginTop: 100,
    marginHorizontal: 20,
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 20,
    fontWeight: '900',
    backgroundColor:  '#94d6a6',
    fontSize: 20,
    
  },

  signInButtonText: {
    fontSize: 20,
    color: 'red'
  },
  
})





export default email;
