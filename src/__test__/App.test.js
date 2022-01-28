import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/configureStore';

test('renders App component', () => {
  const tree = render(<Provider store={store}><App /></Provider>);
  expect(tree).toMatchSnapshot();
});
