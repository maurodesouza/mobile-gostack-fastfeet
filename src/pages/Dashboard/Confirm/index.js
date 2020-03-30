import React from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { useRoute, useNavigation } from '@react-navigation/native';

import Background from '~/components/Background';
import api from '~/services/api';

import * as S from './styles';

export default function Confirm() {
  const { navigate } = useNavigation();
  const {
    params: { image, id },
  } = useRoute();

  const deliveryman_id = useSelector(({ user }) => user.profile.id);

  const postFile = async () => {
    const data = new FormData();

    data.append('file', {
      uri: image.uri,
      name: `sig_delivery_${id}.jpeg`,
      type: 'image/jpeg',
    });

    try {
      const response = await api.post('/files', data);

      return response.data.id;
    } catch (err) {
      return null;
    }
  };

  const onSubmit = async () => {
    try {
      const signature_id = await postFile();

      await api.put(`deliveries/${id}/completed`, {
        signature_id,
        deliveryman_id,
      });

      navigate('Deliveries');
      Alert.alert('Sucesso', 'Encomenda finalizada com sucesso !');
    } catch (err) {
      const { error } = err.response.data;

      Alert.alert('Ocorreu um erro', error);
    }
  };

  return (
    <Background>
      <S.Image source={{ uri: image.uri }} />
      <S.SubmitButton onPress={onSubmit}>Enviar</S.SubmitButton>
    </Background>
  );
}
