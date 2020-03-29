import linearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export default styled(linearGradient).attrs(props => ({
  colors: ['#7D40E7', '#fff'],
  locations: props.newLocation || [0.3, 0.3],
}))`
  flex: 1;
  padding: 20px 20px 0;
`;
