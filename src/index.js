import 'react-native-gesture-handler';
import '~/config/reactotronConfig';

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { store, persistor } from '~/store';
import App from '~/App';

export default function Index() {
  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
