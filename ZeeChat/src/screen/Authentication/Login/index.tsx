import React, {FC} from 'react';
import {View, Text, Button} from 'react-native';

const Login: FC = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
      }}>
      <Button title="Click here"/>
    </View>
  );
};

export default Login;
