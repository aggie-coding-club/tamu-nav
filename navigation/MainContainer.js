import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


// troubleshooting
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs'
// import MapScreen from './screens/MapScreen';
// import MapListScreen from './screens/MapListScreen';
// import { setNavigator } from './screens/navigationRef';


// Screens
import Search from './screens/Search'
import ListOfBuses from './screens/ListOfBuses'
import Settings from './screens/Settings'

// Screen Names (???)
const searchName = 'Search';
const lobName = 'ListOfBuses';
const settingsName = 'Settings';

const Tab = createBottomTabNavigator();



export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={lobName} // starts off app on the listofbuses page, change later (add new home page for MAPS)
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    // check if route name is lob page?
                    if (rn === lobName) {
                        iconName = focused ? 'ListOfBuses' : 'ListOfBuses-outine'
                    } else if (rn === settingsName) {
                        iconName = focused ? 'Settings' : 'Settings-outline'
                    } else if (rn === searchName) {
                        iconName = focused ? 'Search' : 'Search-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>

                },
            })}>

            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'grey',
                labelStyle: { paddingBottom: 10, fontSize: 10},
                style: {padding:10, height: 70}
            }}

        

            <Tab.Screen name={lobName} component={ListOfBuses}/> 
            <Tab.Screen name={searchName} component={Search}/>
            <Tab.Screen name={settingsName} component={Settings}/>




            </Tab.Navigator>
        </NavigationContainer>
    );
}