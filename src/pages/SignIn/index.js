import React, { useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '~/store/modules/user/actions';
import logo from '~/assets/images/logo.png';

import * as S from './styles';

export default function SignIn() {
  const [id, setId] = useState('');

  const dispatch = useDispatch();
  const loading = useSelector(({ user }) => user.loading);

  const onSubmit = () => dispatch(signInRequest(id));

  return (
    <S.Container>
      <Image source={logo} />
      <S.Input
        placeholder="Informe seu ID de cadastro"
        secureTextEntry
        value={id}
        onChangeText={setId}
        returnKeyType="send"
        onSubmitEditing={onSubmit}
      />
      <S.SubmitButton loading={loading} onPress={onSubmit}>
        Entrar no sistema
      </S.SubmitButton>
    </S.Container>
  );
}
