import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store'; // Import your Redux store here
import App from './App'; // Assuming App is your top-level component
import {AppRegistry} from 'react-native';

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent('ZeeChat', () => Root);
