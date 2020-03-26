import styled from 'styled-components/native';

export const Container = styled.View`
  border-radius: 5px;
  margin-bottom: 30px;
  border: 1px solid #0000001a;
  overflow: hidden;
`;

export const Header = styled.View`
  flex-direction: row;
  margin: 15px 15px 25px;
  align-items: center;
`;

export const Title = styled.Text`
  color: #7d40e7;
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
`;

export const Text = styled.Text`
  color: #999;
  font-weight: bold;
  font-size: 8px;
`;

export const Strong = styled.Text`
  color: #444;
  font-size: 12px;
  font-weight: bold;
`;

export const Link = styled.Text`
  color: #7d40e7;
  font-size: 12px;
  font-weight: bold;
`;

export const Info = styled.View`
  background: #f8f9fd;
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
`;

export const Wrapper = styled.View``;

export const customStyles = {
  currentStepIndicatorSize: 9,
  stepIndicatorSize: 9,
  stepIndicatorFinishedColor: '#7D40E7',
  stepIndicatorUnFinishedColor: '#fff',
  stepIndicatorCurrentColor: '#fff',

  currentStepStrokeWidth: 1,
  stepStrokeWidth: 1,
  stepStrokeCurrentColor: '#7D40E7',
  stepStrokeFinishedColor: '#7D40E7',
  stepStrokeUnFinishedColor: '#7D40E7',

  separatorStrokeWidth: 1,
  separatorFinishedColor: '#7D40E7',
  separatorUnFinishedColor: '#7D40E7',

  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,

  labelSize: 8,
  labelColor: '#999',
  currentStepLabelColor: '#999',
};
