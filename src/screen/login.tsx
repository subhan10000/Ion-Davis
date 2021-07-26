import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  Text,
  useColorScheme,
  Image,
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
import  Signup from './sign-up';
export default Login = ({route, navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:colors.background, padding:16}}>
        <Text style={{color:colors.white, marginBottom:20, fontSize:34,}}>Login</Text>
        {/* <TextInput
        style={styles.input}
      /> */}
      <View style={{ paddingHorizontal:0, width:'100%'}}>
        <SafeAreaView>
          <View style={styles.inputde}>
            <Text style={styles.ftcolor}>Email</Text>
            <TextInput style={styles.incolor}  placeholder=""/>
          </View>
          <View style={styles.inputde}>
            <Text style={styles.ftcolor}>Password</Text>
            <TextInput style={styles.incolor} placeholder="" />
          </View>
        </SafeAreaView>
        <View>
          <Text style={{color:colors.white, marginBottom:10, fontSize:14, textAlign:'right'}} 
          onPress={() => navigation.navigate('ForgotPassword')
                }>Forgot Password <Image source={require('../assets/images/right-icon.png')} /></Text>
        </View>
        <TouchableOpacity
              onPress={() =>
                navigation.navigate('Home')
              } style={{width:'100%'}}>
                  <View style={{backgroundColor:colors.primary, padding:16, borderRadius:8, width:'100%', alignItems:'center' }}>
                      <Text style={{color:Colors.white, fontSize:18}}>
                          Login
                      </Text>
                  </View>
        </TouchableOpacity>
        <View style={{}}>
          <Text style={{color:colors.white, marginTop:50, fontSize:14, textAlign:'center'}}>Don't have an account?
                  <Text style={{color:colors.primary,}}  
                  onPress={() =>
                    navigation.navigate('Signup')
                  }
                  > Sign Up</Text>
          </Text>
          <Text style={{color:colors.white, fontSize:14, textAlign:'center'}} >Or login Width facebook </Text>
        </View>
        <View style={{alignItems:'center', marginTop:10}}>
          <Image source={require('../assets/images/logos_facebook.png')} /> 
        </View>
      </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
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