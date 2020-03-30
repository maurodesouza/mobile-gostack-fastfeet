import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Image = styled.Image.attrs({
  resizeMethod: 'auto',
})`
  margin: 60px 0 20px;
  border-radius: 5px;
  flex: 1;
  transform: rotate(90deg);
`;

export const SubmitButton = styled(Button)`
  margin-bottom: 20px;
`;
