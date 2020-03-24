import { useSelector } from 'react-redux';
import createRouter from '~/routes';

export default function App() {
  const signed = useSelector(({ user }) => user.signed);

  return createRouter(signed);
}
