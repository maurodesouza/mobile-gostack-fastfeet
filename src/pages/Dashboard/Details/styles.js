import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 60px;
  border-radius: 5px;
  overflow: hidden;
`;

export const Wrapper = styled.View`
  margin-bottom: 10px;
  padding: 15px 15px 0;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #0000001a;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  color: #7d40e7;
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
`;

export const Strong = styled.Text`
  color: #999;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

export const Text = styled.Text`
  color: #666;
  font-size: 14px;
  margin-bottom: 15px;
  text-transform: ${({ capitalize }) => (capitalize ? 'capitalize' : 'none')};
`;

export const Dates = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MenuActions = styled.View`
  background: #f8f9fd;
  border: 1px solid #0000001a;
  border-radius: 5px;
  overflow: hidden;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const Action = styled.TouchableOpacity.attrs(props => ({
  disabled: props.haveProblem,
}))`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 15px 0;

  ${({ border }) =>
    border &&
    css`
      border: 1px solid #0000001a;
      border-top-width: 0;
      border-bottom-width: 0;
    `}
`;

export const ActionText = styled.Text`
  text-align: center;
  font-size: 12px;
  color: #999;
  margin-top: 5px;
`;
