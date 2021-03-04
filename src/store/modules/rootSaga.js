import {all} from 'redux-saga/effects';

import climate from './climate/sagas';

export default function* rootSaga() {
  return yield all([climate]);
}
