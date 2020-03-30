import styled from 'styled-components/native';

import { RNCamera } from 'react-native-camera';

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
`;

export const TackPicture = styled.TouchableOpacity`
  position: absolute;
  width: 62px;
  height: 62px;
  border-radius: 31px;
  align-items: center;
  justify-content: center;
  background: #0000003d;
  bottom: 20px;
  align-self: center;
`;
