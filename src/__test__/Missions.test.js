import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Missions from '../components/Missions';
import store from '../redux/configureStore';

test('renders Missions component', () => {
  const tree = render(<Provider store={store}><Missions /></Provider>);
  expect(tree).toMatchSnapshot();
});
