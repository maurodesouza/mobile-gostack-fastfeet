import React, { useRef } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import * as S from './styles';

export default function Confirm() {
  const cameraRef = useRef(null);

  const {
    params: { id },
  } = useRoute();

  const { navigate } = useNavigation();

  const takePicture = async () => {
    if (cameraRef) {
      const image = await cameraRef.current.takePictureAsync({
        orientation: 'landscapeLeft',
        base64: true,
      });

      navigate('Confirm', { image, id });
    }
  };

  return (
    <S.Container>
      <>
        <S.Camera ref={cameraRef} captureAudio={false} />
      </>
      <S.TackPicture onPress={takePicture}>
        <Icon name="camera" size={30} color="#fff" />
      </S.TackPicture>
    </S.Container>
  );
}
