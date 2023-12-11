import React, { useEffect, useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import store, { RootState } from './src/redux/store';
import ExampleComponent from './src/screen/ExampleComponent';
import SplashScreen from 'react-native-splash-screen'
import Splash from './src/screen/Splash';
import Login from './src/screen/Authentication/Login';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  // const userDetail = useSelector((state: RootState) => state.UserSlice)
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 300);
  }, [])

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <Provider store={store}>
      {/* {loading ? <Splash /> : userDetail == null ? <Login /> : <ExampleComponent />} */}
      <ExampleComponent />

    </Provider>
  );
}
export default App;
