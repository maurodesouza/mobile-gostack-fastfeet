import React from 'react';
import { format, parseISO } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/user/actions';
import { firtsLetters } from '~/util/regex';
import * as S from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(({ user }) => user.profile);

  return (
    <S.Container>
      {profile.avatar ? (
        <S.Avatar source={{ uri: profile.avatar.url }} />
      ) : (
        <S.NoAvatar>
          <S.NoAvatarText>{firtsLetters(profile.name)}</S.NoAvatarText>
        </S.NoAvatar>
      )}

      <S.Text>Nome Completo</S.Text>
      <S.Strong>{profile.name}</S.Strong>

      <S.Text>Email</S.Text>
      <S.Strong>{profile.email}</S.Strong>

      <S.Text>Data de cadastro</S.Text>
      <S.Strong>{format(parseISO(profile.createdAt), 'dd/MM/yyyy')}</S.Strong>

      <S.LogoutButton onPress={() => dispatch(signOut())}>
        Logout
      </S.LogoutButton>
    </S.Container>
  );
}
