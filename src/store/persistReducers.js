import AsyncStorage from '@react-native-community/async-storage';

import {persistReducer} from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'HiringMilk',
      storage: AsyncStorage,
      whitelist: ['climate'],
    },
    reducers,
  );

  return persistedReducer;
};
