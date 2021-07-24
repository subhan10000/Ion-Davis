import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  Image,
  Text,
  useColorScheme,
  View,
  ImageBackground,
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

export default Home = ({route, navigation }) => {
    return (
        <ImageBackground  resizeMode="stretch"  source={require('../assets/images/bg.jpg')} style={{width: '100%', height: '100%',}}>
            <View style={{flex:1, padding:30, alignItems:'flex-start', justifyContent:'center'}}>
                <Text style={styles.headst}>
                    ION DASH
                </Text>
                <Text style={styles.commtext}>
                FOR
                </Text>
                <Text style={styles.commtext}>
                    ALL YOUR
                </Text>
                <Text style={styles.commtext}>
                CONSTRUCTION ff
                </Text>
                <Text style={styles.commtext}>
                LANDSCAPING & 
                </Text>
                <Text style={styles.commtext}>
                SPECIAL REQUEST
                </Text>
                <Text style={styles.commtext}>
                NEEDS
                </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Signup')
          } style={{width:'100%', marginTop:100}}>
              <View style={{borderColor:colors.primary, borderWidth:2, padding:16, borderRadius:8, width:'100%', alignItems:'center' }}>
                  <Text style={{color:Colors.white, fontSize:22, fontWeight:'700'}}>
                        START SHOPPING
                  </Text>
              </View>
                
          </TouchableOpacity>
            </View>
        
      
      </ImageBackground>


    );
}
const styles = StyleSheet.create({
    headst:{
        fontSize:30,
        fontWeight:'700',
        color:colors.white,
        borderBottomWidth:4,
        borderColor:colors.white,
        marginBottom:20
    },

    commtext:{
        fontSize:25,
        fontWeight:'700',
        color:colors.white,
        marginBottom:10
    }
});