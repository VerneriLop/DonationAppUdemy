import React, {useEffect, useRef} from 'react';
import {AppState} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store, {persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import RootNavigation from './navigation/RootNavigation';
import {checkToken} from './api/user';
import BootSplash from 'react-native-bootsplash';

const App = (): JSX.Element => {
  const appState = useRef(AppState.currentState);
  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      async nextAppState => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          //console.log('You have come back into the app');
          await checkToken();
          //we are coming from background to foreground
        }
        appState.current = nextAppState;
      },
    );
    checkToken();
    //console.log('App has rendered');
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer
          onReady={() => {
            BootSplash.hide();
          }}>
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
