import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background: #7d40e7;
  padding: 0 25px;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  margin-top: 40px;
  background: #fff;
  border-radius: 5px;
  height: 45px;
  padding: 12px 20px;
  color: #999;
  align-self: stretch;
  font-size: 16px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px;
  background: #82bf18;
  align-self: stretch;
`;
