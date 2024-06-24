import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login/Login';
import Fundraiser from '../screens/Fundraiser/Fundraiser';
import { StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setToken } from '../features/authSlice';
import { RootState } from '@reduxjs/toolkit/query';

const Stack = createStackNavigator();

const RootNavigator = () => {

    const token = useSelector((state: RootState) => state.auth.token);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const storedToken = await AsyncStorage.getItem('token');
                if (storedToken) {
                    dispatch(setToken(storedToken));
                }
            } catch (error) {
                console.error('Error fetching token from AsyncStorage:', error);
            }
        };

        fetchToken();
    }, []);

    return (
        <NavigationContainer>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {token === null ?
                    <Stack.Screen component={Login} name='Login' />
                    :
                    <Stack.Screen component={Fundraiser} name='Fundraiser' />
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator;
