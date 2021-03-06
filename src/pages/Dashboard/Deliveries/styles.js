import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding: 20px 20px 0;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 34px;
`;

export const NoAvatar = styled.View`
  align-items: center;
  justify-content: center;
  width: 68px;
  height: 68px;
  border-radius: 34px;
  background: #f4effc;
`;

export const NoAvatarText = styled.Text`
  color: #a28fd0;
  text-transform: uppercase;
  font-size: 31px;
`;

export const UserInfo = styled.View`
  flex: 1;
  margin-left: 12px;
`;

export const Text = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const Name = styled.Text`
  font-size: 22px;
  color: #333;
  font-weight: bold;
`;

export const LogoutButton = styled.TouchableOpacity``;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #333;
  font-weight: bold;
  flex: 1;
`;

export const StateButton = styled.Text`
  font-size: 12px;
  color: ${({ active }) => (active ? '#7d40e7' : '#999')};
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
  font-weight: bold;
  margin-left: 15px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 10px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: '#7d40e7',
})`
  margin-bottom: 30px;
`;

export const NoResult = styled.View`
  flex: 1;
  margin-top: 60px;
  align-items: center;
`;

export const NoResultText = styled.Text`
  text-align: center;
  font-size: 22px;
  color: #333;
  font-weight: bold;
`;
