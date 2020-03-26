import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding: 35px;
`;

export const Avatar = styled.Image`
  width: 136px;
  height: 136px;
  border-radius: 68px;
  align-self: center;
  margin-bottom: 40px;
`;

export const NoAvatar = styled.View`
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 136px;
  height: 136px;
  border-radius: 68px;
  margin-bottom: 40px;
  background: #f4effc;
`;

export const NoAvatarText = styled.Text`
  color: #a28fd0;
  text-transform: uppercase;
  font-size: 60px;
`;

export const Text = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const Strong = styled.Text`
  font-size: 22px;
  color: #444;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const LogoutButton = styled(Button)`
  background: #e74040;
  margin-top: 15px;
`;
