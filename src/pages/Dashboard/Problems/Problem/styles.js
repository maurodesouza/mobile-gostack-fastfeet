import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  background: #fff;
  border-radius: 5px;
  border: 1px solid #0000001a;
  padding: 20px 20px ${({ disabled }) => (disabled ? '20px' : '5px')};
  margin-bottom: 15px;
  align-items: center;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`;

export const Text = styled.Text.attrs(props => ({
  numberOfLines: props.open ? 0 : 1,
}))`
  flex-shrink: 1;
  color: #999;
  font-size: 16px;
`;

export const Data = styled.Text`
  display: ${({ open }) => (open ? 'none' : 'flex')};
  color: #c1c1c1;
  font-size: 12px;
  margin-left: 10px;
`;
