import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 15px;
`;
