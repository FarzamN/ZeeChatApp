import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExampleComponent from '../screen/ExampleComponent';


const Stack = createNativeStackNavigator();

const UserNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="ex"
                screenOptions={{ headerShown: false, animation: 'flip' }}>
                <Stack.Screen name="ex" component={ExampleComponent} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default UserNavigator;