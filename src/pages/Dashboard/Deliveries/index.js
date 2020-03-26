import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Delivery from './Delivery';

import { signOut } from '~/store/modules/user/actions';
import api from '~/services/api';

import * as S from './styles';

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);
  const [state, setState] = useState('pendente');

  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const profile = useSelector(({ user }) => user.profile);

  const loadDeliveries = useCallback(async () => {
    const response = await api.get(`/deliverymans/${profile.id}/deliveries`, {
      params: {
        state,
        page,
      },
    });

    const data = response.data.map(delivery => ({
      ...delivery,
      idFormatted: `00${delivery.id}`.slice(-2),
    }));

    setDeliveries(d => (page === 1 ? data : [...d, ...data]));
  }, [state, page, profile.id]);

  useEffect(() => {
    loadDeliveries();
  }, [loadDeliveries]);

  return (
    <S.Container>
      <S.Header>
        <S.Avatar source={{ uri: profile.avatar.url }} />

        <S.UserInfo>
          <S.Text>Bem vindo de volta,</S.Text>
          <S.Name>{profile.name}</S.Name>
        </S.UserInfo>

        <S.LogoutButton onPress={() => dispatch(signOut())}>
          <Icon name="login-variant" size={25} color="#e74040" />
        </S.LogoutButton>
      </S.Header>

      <S.Wrapper>
        <S.Title>Entregas</S.Title>
        <S.StateButton
          active={state === 'pendente'}
          onPress={() => [setState('pendente'), setPage(1)]}
        >
          Pendentes
        </S.StateButton>
        <S.StateButton
          active={state === 'entregue'}
          onPress={() => [setState('entregue'), setPage(1)]}
        >
          Entregues
        </S.StateButton>
      </S.Wrapper>

      <S.List
        data={deliveries}
        keyExtractor={delivery => String(delivery.id)}
        renderItem={({ item }) => <Delivery delivery={item} />}
      />
    </S.Container>
  );
}
