import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Fontpage from './fontpage';
import cart from './cart';
import Setting from './setting';
import Orders from './orders';
import colors from '../assets/colors/color';
import { View, Text, Image } from 'react-native';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
      <Tab.Navigator tabBarOptions={{
          showLabel:false,
          style:{
            backgroundColor:colors.background,
            paddingBottom:0,
            paddingTop:8,
            height:90
          }
         
      }}>
        <Tab.Screen name="Home" component={Fontpage} 
        options={{
            tabBarIcon: ({focused}) =>(
                <View style={{
                    alignItems:'center'
                }}>
                    <Image source={require('../assets/images/home.png')}
                    style={{
                        tintColor: focused ? '#D99100' : '#fff',
                    }} /> 
                    <Text style={{
                        color: focused ? '#D99100' : '#fff',
                        fontSize:18
                    }}>Home</Text>
                </View>
            ),
        }}
        />
        <Tab.Screen name="cart" component={cart} 
        options={{
            tabBarIcon: ({focused}) =>(
                <View style={{
                    alignItems:'center'
                }}>
                    <Image source={require('../assets/images/cart.png')}
                    style={{
                        tintColor: focused ? '#D99100' : '#fff',
                    }} /> 
                    <Text style={{
                        color: focused ? '#D99100' : '#fff',
                        fontSize:18
                    }}>Cart</Text>
                </View>
            ),
        }}/>
        <Tab.Screen name="Orders" component={Orders} 
        options={{
            tabBarIcon: ({focused}) =>(
                <View style={{
                    alignItems:'center'
                }}>
                    <Image source={require('../assets/images/order.png')}
                    style={{
                        tintColor: focused ? '#D99100' : '#fff',
                    }} /> 
                    <Text style={{
                        color: focused ? '#D99100' : '#fff',
                        fontSize:18
                    }}>Orders</Text>
                </View>
            ),
        }}/>
        <Tab.Screen name="Setting" component={Setting} 
        options={{
            tabBarIcon: ({focused}) =>(
                <View style={{
                    alignItems:'center'
                }}>
                    <Image source={require('../assets/images/setting.png')}
                    style={{
                        tintColor: focused ? '#D99100' : '#fff',
                    }} /> 
                    <Text style={{
                        color: focused ? '#D99100' : '#fff',
                        fontSize:18
                    }}>Setting</Text>
                </View>
            ),
        }} />
      </Tab.Navigator>
  );
}
export default Tabs;