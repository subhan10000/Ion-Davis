import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import colors from '../assets/colors/color';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default ForgotPassword = ({route, navigation }) => {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:colors.background, padding:16}}>
    <Text style={{color:colors.white, marginBottom:20, fontSize:34,}}>Forgot Password</Text>
    <Text style={{color:colors.white, marginBottom:10, fontSize:14, textAlign:'center'}}>Please enter your email address. You will receive a link to reset your password</Text>
    
  <View style={{ paddingHorizontal:0, width:'100%'}}>
  <SafeAreaView>
    <View style={styles.inputde}>
        <Text style={styles.ftcolor}>Email</Text>
        <TextInput 
            style={styles.incolor}
            placeholder=""
  />
    </View>
</SafeAreaView>
                    
    <TouchableOpacity
          onPress={() =>
            navigation.navigate('Signup')
          } style={{width:'100%'}}>
              <View style={{backgroundColor:colors.primary, padding:16, borderRadius:8, width:'100%', alignItems:'center' }}>
                  <Text style={{color:Colors.white, fontSize:18}}>
                      SEND
                  </Text>
              </View>
                
          </TouchableOpacity>
          
          
  </View>
  </View>
);
}
const styles = StyleSheet.create({
buttonStyle: {
    color: 'red',
    marginTop: 20,
    padding: 20,
    backgroundColor: 'green',
},
inputde:{
    borderRadius:10,
    padding:10,
    paddingBottom:0,
    borderColor:colors.primary,
    borderWidth:1,
    marginBottom:16,
    color:colors.white
},

ftcolor:{
    color:'#9b9b9b'
},
incolor:{
    color:colors.white,
    height:40
}
});