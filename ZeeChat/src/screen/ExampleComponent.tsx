import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/store/slices/IncrimentSlice';
import { RootState } from '../redux/store';
import { Font } from '../utils/font';
import { logoutUser } from '../redux/store/slices/UserSlice';

const ExampleComponent = () => {
    const counter = useSelector((state: RootState) => state.counter.value);

    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(logoutUser())
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: '#000' }}>
            <Text style={{ fontFamily: Font.Work500Italic, color: '#fff' }}>log out ki screen</Text>
            {/* <Button title="Increment" onPress={() => dispatch(increment())} /> */}
            {/* <Button title="Decrement" onPress={() => dispatch(decrement())} /> */}
            <Button title="Log Out" onPress={logOut} />
            <Text style={{ fontFamily: Font.Work500Italic, color: '#000' }}>Counter: {counter}</Text>
        </View>
    );
};

export default ExampleComponent;
