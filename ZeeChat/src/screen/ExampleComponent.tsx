import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/store/slices/IncrimentSlice';
import { RootState } from '../redux/store';
import { Font } from '../utils/font';

const ExampleComponent = () => {
    const counter = useSelector((state: RootState) => state.counter.value);

    const dispatch = useDispatch();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
            <Text style={{ fontFamily: Font.Work500Italic, color: '#fff' }}>Counter: {counter}</Text>
            <Button title="Increment" onPress={() => dispatch(increment())} />
            <Button title="Decrement" onPress={() => dispatch(decrement())} />
        </View>
    );
};

export default ExampleComponent;
