import {all, takeLatest, call, put} from 'redux-saga/effects';
import {Alert} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import NetInfo from '@react-native-community/netinfo';
import {request, PERMISSIONS} from 'react-native-permissions';

import {define, requestError, request as Request} from './actions';
import api from '../../../services/api';

function getLoc() {
  return new Promise((res, rej) => {
    Geolocation.getCurrentPosition(res, rej);
  });
}

export function* requestLocation() {
  try {
    const {_W: netState} = NetInfo.fetch();

    if (netState.isConnected && netState.isInternetReachable) {
      const requestStatus = yield request(PERMISSIONS.IOS.LOCATION_ALWAYS);

      if (
        requestStatus === 'blocked' ||
        requestStatus === 'unavailable' ||
        requestStatus === 'denied'
      ) {
        yield put(
          Request({
            latitude: '-15.7801',
            longitude: '-47.9292',
          }),
        );
      } else {
        const response = yield call(getLoc);

        console.log(response.coords);

        yield put(
          Request({
            latitude: response.coords.latitude,
            longitude: response.coords.longitude,
          }),
        );
      }
    } else {
      Alert.alert(
        'Sem conexão',
        'Parece que você não esta conectado a internet. Conecte-se para atualizar os dados novamente!',
      );
    }
  } catch (error) {
    console.log(error);

    yield put(requestError());
    //show error
  }
}

export function* requestData({payload}) {
  try {
    const {latitude, longitude} = payload;

    const response = yield call(api.get, '', {
      params: {
        lat: latitude,
        lon: longitude,
      },
    });

    let fixResponse = {
      days: response.data.data.slice(0, 9).map((item) => {
        let stringDate = String(item.datetime).split('-');

        return {
          date: new Date(stringDate[0], stringDate[1] - 1, stringDate[2]),
          temperature: item.temp,
          maxTemperature: item.max_temp,
          minTemperature: item.low_temp,
          description: item.weather.description,
          drainRate: item.pop,
        };
      }),
      cityName: response.data.city_name,
    };

    yield put(define(fixResponse));
  } catch (error) {
    //show error;
    yield put(requestError());
  }
}

export default all([
  takeLatest('@climate/REQUEST', requestData),
  takeLatest('@climate/REQUEST_LOCATION', requestLocation),
]);
