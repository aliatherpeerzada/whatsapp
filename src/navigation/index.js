import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import ChatScreen from '../screens/ChatScreen'
import ChatMessageScreen from '../screens/ChatMessageScreen'
import MainTabNavigator from './MainTabNavigator'
import ContactsScreen from '../screens/ContactsScreen'
const Stack = createNativeStackNavigator();
const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'whitesmoke' } }}>
                
                <Stack.Screen name="Home" options={{ headerShown: false }} component={MainTabNavigator} />
                <Stack.Screen name='Chat' component={ChatMessageScreen} />
                <Stack.Screen name='Contacts' component={ContactsScreen} />

            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Navigator