import 'react-native-gesture-handler';
import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import bucket from './store';

import App from './App';

export default function Index() {
  return (
    <Provider store={bucket.store}>
      <PersistGate persistor={bucket.persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}
