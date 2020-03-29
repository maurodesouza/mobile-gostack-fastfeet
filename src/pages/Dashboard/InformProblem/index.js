import React, { useState, useEffect, useCallback } from 'react';
import { Keyboard, useWindowDimensions, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { useRoute, useNavigation } from '@react-navigation/native';

import api from '~/services/api';
import Background from '~/components/Background';

import * as S from './styles';

export default function InformProblem() {
  const [description, setDescription] = useState('');
  const [newLocation, setNewLocation] = useState(null);

  const deliveryman_id = useSelector(({ user }) => user.profile.id);

  const { navigate } = useNavigation();
  const {
    params: { id },
  } = useRoute();
  const defaultHeight = useWindowDimensions().height;

  const onSubmit = async () => {
    try {
      await api.post(`problems/${id}`, {
        description,
        deliveryman_id,
      });

      Alert.alert('Sucesso !', 'Problema informado com sucesso !');
      navigate('Details');
    } catch (err) {
      const { error } = err.response.data;
      Alert.alert('Houve um problema', error);
    }
  };

  const recalculateLocation = useCallback(
    e => {
      const keyboardHeight = e.endCoordinates.height;

      const newHeight = defaultHeight - keyboardHeight;

      const percentFinal = (defaultHeight * 0.3) / newHeight;

      setNewLocation([percentFinal, percentFinal]);
    },
    [defaultHeight]
  );

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      recalculateLocation
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setNewLocation(null)
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [recalculateLocation]);

  return (
    <Background newLocation={newLocation}>
      <S.Container>
        <S.Input
          placeholder="Inclua aqui o problema que ocorreu na entrega."
          returnKeyType="send"
          blurOnSubmit
          multiline
          value={description}
          onChangeText={setDescription}
          onSubmitEditing={onSubmit}
        />
        <S.SubmitButton onPress={onSubmit}>Enviar</S.SubmitButton>
      </S.Container>
    </Background>
  );
}
