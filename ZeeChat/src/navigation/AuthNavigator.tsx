import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screen/Authentication/Login/index.tsx';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="login"
                screenOptions={{ headerShown: false, animation: 'flip' }}>
                <Stack.Screen name="login" component={Login} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AuthNavigator;