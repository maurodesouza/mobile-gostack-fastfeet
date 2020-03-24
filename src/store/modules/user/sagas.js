import { Alert } from 'react-native';
import { all, takeLatest, put, call } from 'redux-saga/effects';

import { signInSuccess, signFailure } from './actions';

import api from '~/services/api';

export function* signIn({ payload }) {
  const { id } = payload;

  try {
    const { data } = yield call(api.get, `deliverymans/${id}`);

    yield put(signInSuccess(data));
  } catch (err) {
    const { error } = err.response.data;

    Alert.alert('Erro ao entrar no sistema', error);
    yield put(signFailure());
  }
}

export default all([takeLatest('@user/SIGN_IN_REQUEST', signIn)]);
