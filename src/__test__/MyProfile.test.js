import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import MyProfile from '../components/MyProfile';
import store from '../redux/configureStore';

test('render MyProfile component', () => {
  const tree = render(<Provider store={store}><MyProfile /></Provider>);
  expect(tree).toMatchSnapshot();
});
