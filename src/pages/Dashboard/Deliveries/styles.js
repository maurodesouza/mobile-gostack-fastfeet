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
