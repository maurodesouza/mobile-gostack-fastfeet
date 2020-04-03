import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Delivery from './Delivery';

import { signOut } from '~/store/modules/user/actions';
import { firtsLetters, onlyTwoNames } from '~/util/regex';
import api from '~/services/api';

import * as S from './styles';

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);
  const [state, setState] = useState('pendente');

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const per_page = 5;
  const isFocused = useIsFocused();

  const dispatch = useDispatch();
  const profile = useSelector(({ user }) => user.profile);

  const loadDeliveries = useCallback(async () => {
    setLoading(true);

    const response = await api.get(`/deliverymans/${profile.id}/deliveries`, {
      params: {
        state,
        page,
        per_page,
      },
    });

    const data = response.data.map(delivery => ({
      ...delivery,
      idFormatted: `00${delivery.id}`.slice(-2),
    }));

    const pageTotal = Math.ceil(response.headers['x-total-count'] / per_page);

    setDeliveries(d => (page === 1 ? data : [...d, ...data]));
    setTotalPages(pageTotal);
    setLoading(false);
    setRefreshing(false);
  }, [state, page, profile.id]);

  const loadMore = async () => {
    if (loading || page >= totalPages) return;

    setPage(page + 1);
  };

  const refresh = () => {
    setRefreshing(true);

    if (page === 1) loadDeliveries();
    else setPage(1);
  };

  useEffect(() => {
    if (isFocused) loadDeliveries();
  }, [loadDeliveries, isFocused]);

  return (
    <S.Container>
      <S.Header>
        {profile.avatar ? (
          <S.Avatar source={{ uri: profile.avatar.url }} />
        ) : (
          <S.NoAvatar>
            <S.NoAvatarText>{firtsLetters(profile.name)}</S.NoAvatarText>
          </S.NoAvatar>
        )}

        <S.UserInfo>
          <S.Text>Bem vindo de volta,</S.Text>
          <S.Name>{onlyTwoNames(profile.name)}</S.Name>
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
        onEndReachedThreshold={0.2}
        onEndReached={loadMore}
        onRefresh={refresh}
        refreshing={refreshing}
        ListFooterComponent={
          loading && !refreshing && <S.Loading size="large" />
        }
        ListEmptyComponent={
          !loading && (
            <S.NoResult>
              <S.NoResultText> Nenhuma encomenda encontrada ! </S.NoResultText>
            </S.NoResult>
          )
        }
        renderItem={({ item }) => <Delivery delivery={item} />}
      />
    </S.Container>
  );
}
