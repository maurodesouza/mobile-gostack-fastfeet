import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 60px;
`;

export const Input = styled.TextInput.attrs({
  textAlignVertical: 'top',
  placeholderTextColor: '#999',
})`
  height: 300px;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 5px;
  background: #fff;
  border: 1px solid #0000001a;
  font-size: 16px;
  color: #999;
`;

export const SubmitButton = styled(Button)`
  margin-bottom: 20px;
`;
