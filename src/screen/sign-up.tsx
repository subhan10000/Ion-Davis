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

export default Signup = ({route, navigation }) => {
    return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:colors.background, padding:16}}>
    <Text style={{color:colors.white, marginBottom:20, fontSize:34,}}>Sign Up</Text>
    {/* <TextInput
    style={styles.input}
  /> */}
  <View style={{ paddingHorizontal:0, width:'100%'}}>
  <SafeAreaView>
  <View style={styles.inputde}>
        <Text style={styles.ftcolor}>Name</Text>
    <TextInput 
    style={styles.incolor}
    placeholder=""
  />
    </View>
    <View style={styles.inputde}>
        <Text style={styles.ftcolor}>Email</Text>
    <TextInput 
    style={styles.incolor}
    placeholder=""
  />
    </View>
    <View style={styles.inputde}>
        <Text style={styles.ftcolor}>Password</Text>
    <TextInput style={styles.incolor}
    placeholder=""
  />
    </View>
</SafeAreaView>
                    <Text style={{color:colors.white, marginBottom:10, fontSize:14, textAlign:'right'}}
                    onPress={() =>
                        navigation.navigate('Login')
                      }>Already have an account?</Text>
                </View>
    <TouchableOpacity
          onPress={() =>
            navigation.navigate('Signup')
          } style={{width:'100%'}}>
              <View style={{backgroundColor:colors.primary, padding:16, borderRadius:8, width:'100%', alignItems:'center' }}>
                  <Text style={{color:Colors.white, fontSize:18}}>
                      SIGN UP
                  </Text>
              </View>
                
          </TouchableOpacity>
          <View style={{}}>
                    <Text style={{color:colors.white, marginTop:50, fontSize:14, textAlign:'center'}}>Already have an account?
              <Text style={{color:colors.primary,}}  onPress={() =>
            navigation.navigate('Login')
          }> Sign In</Text></Text>
                    <Text style={{color:colors.white, fontSize:14, textAlign:'center'}} >Or login Width facebook </Text>
                </View>
    {/* <Button  title="LOGIN" 
    onPress={() => navigation.navigate('Signup')}   color="#D99100" 
/> */}
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