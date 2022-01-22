import React, {useState} from 'react';
import { Text, View, StyleSheet,Alert,ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { TextInput, Button, Avatar } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function Login({navigation}) {

  // useState Using
  const [email, setEmail] = useState("")
  const [passsword, setPassword] = useState("")
  const [passStatus, setPassStatue] = useState(true)

  //create function
  const fncLogin=() => {

      setPassStatue(false)
      if(email == ''){

        Alert.alert('E-mail is not Empty!')

      }else if(passsword == ''){

        Alert.alert('Password is not Empty!')

      }
      
      console.log("flncLogin Call",email,passsword)

  }

  return (
    <View style={styles.container}>

    <ScrollView>

    <View style={{ alignSelf:'center', marginTop: 30,}}>
      <Avatar.Image style={{backgroundColor:'transparent'}} size={100} source={require('./assets/icn_google.png')} />
    </View>
     
        <Text style={styles.txtTitle}>User Login</Text>

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

  <View style={styles.cardView}>

  
    <Button  style={styles.btnStyle} onPress={() => fncLogin()} icon='login' mode='contained'>Login</Button>

     <Button  style={styles.btnStyle} onPress={() => navigation.navigate('register')} icon='account-arrow-right' mode='contained'>Register</Button>

  </View>


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
  cardView:{

    flexDirection:'row',
    justifyContent:'space-between',

  },
  footerCard: {

    margin: 10,

  },
  footerCardText: {

    textAlign:'center',

  }
});
