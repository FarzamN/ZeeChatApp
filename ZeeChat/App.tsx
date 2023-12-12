import ExampleComponent from './src/screen/ExampleComponent';

import React, { useEffect, useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import store, { RootState } from './src/redux/store';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screen/Authentication/Login';
import Splash from './src/screen/Splash';
import AuthNavigator from './src/navigation/AuthNavigator';
import UserNavigator from './src/navigation/UserNavigation';

const Stack = createStackNavigator();

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const userDetail = useSelector((state: RootState) => state.userSlice);

  console.log(userDetail)
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Provider store={store}>
      {loading ? (
        <Splash />
      ) : (
        userDetail.isLoggedIn ? (
          <UserNavigator />
        ) : (
          <AuthNavigator />
        )
      )}
    </Provider>
  );
};

export default App;
