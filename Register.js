import React, {useState} from 'react';
import { Text,View, StyleSheet,Alert,ScrollView } from 'react-native';
import { TextInput, Button, Avatar } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function Register() {
  // useState Using
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [passsword, setPassword] = useState("")
  const [passStatus, setPassStatue] = useState(true)

  const isValidEmail = (email) =>{

      const rgx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{3,3}$/; 

      return rgx.test(email)

  }

  const isValidPhone = (phone) =>{

      const rgx = /^[0]?[1-9]\d{9}$/;

      return rgx.test(phone)

  }
 

   //create function
  const fncSave=() => {

      if(name == '' || surname == '' || phone == '' || email == '' || passsword ==''){

        Alert.alert('Please fill in all fields!') 

      }else if(!isValidEmail(email)){

          Alert.alert('Invalid Email!')

      }else if(!isValidPhone(phone)){

          Alert.alert('Invalid Phone!')

      }
      
      else{

        console.log("flncLogin Call",name,surname,phone,email,passsword)

      }
      
     

  }
  
  return (
    <View style={styles.container}>

    <ScrollView>

    <View style={{ alignSelf:'center', marginTop: 30,}}>
      <Avatar.Image style={{backgroundColor:'transparent'}} size={100} source={require('./assets/icn_google.png')} />
    </View>
     
        <Text style={styles.txtTitle}>Add User</Text>

      <TextInput
      label="Username"
      value={name}
      onChangeText={text => setName(text)}
      mode= 'outlined'
      keyboardType= 'default'
      style={styles.txtField}
      autoCapitalize='none'

    />
      <TextInput
      label="Surname"
      value={surname}
      onChangeText={text => setSurname(text)}
      mode= 'outlined'
      keyboardType= 'default'
      style={styles.txtField}
      autoCapitalize='none'

    />
      <TextInput
      label="Phone"
      value={phone}
      onChangeText={text => setPhone(text)}
      mode= 'outlined'
      keyboardType= 'phone-pad'
      style={styles.txtField}
      autoCapitalize='none'

    />
      <TextInput
      label="E-Mail"
      value={email}
      onChangeText={text => setEmail(text)}
      mode= 'outlined'
      keyboardType= 'email-address'
      style={styles.txtField}
      autoCapitalize='none'

    />

      <TextInput
      label="Password"
      value={passsword}
      onChangeText={text => setPassword(text)}
      mode= 'outlined'
      secureTextEntry={passStatus} 
      style={styles.txtField}    

    />

    <Button  style={styles.btnStyle} onPress={() => fncSave()} icon='account-plus-outline' mode='contained'>Save</Button>

  </ScrollView>

      <View style={styles.footerCard}>
    
      <AwesomeIcon name = 'google' size = {30} color = '#bababa' style = {{textAlign:'center'}} />
      
      <Text style={styles.footerCardText}>
        Neque porro quisquam est qui dolorem 
      </Text>
  
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
 },
  txtTitle:{

    fontSize: 20,
    textAlign:'center',
    marginTop: 20,
    color:'#3ebbde',
    marginBottom: 10

  },
  btnStyle: {

    marginTop: 20,
    padding: 10,
    fontSize:20,

  },
  txtField: {

    marginTop: 10

  },
  footerCard: {

    margin: 10,

  },
  footerCardText: {

    textAlign:'center',

  }
});