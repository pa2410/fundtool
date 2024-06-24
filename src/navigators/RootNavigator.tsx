import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login/Login';
import Fundraiser from '../screens/Fundraiser/Fundraiser';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const RootNavigator = () => {

    const token = useSelector((state) => state.auth.token);
    console.log('token', token);

    return (
        <NavigationContainer>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={token !== '' ? "Fundraiser" : "Login"}>
                <Stack.Screen component={Login} name='Login' />
                <Stack.Screen component={Fundraiser} name='Fundraiser' />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator;
