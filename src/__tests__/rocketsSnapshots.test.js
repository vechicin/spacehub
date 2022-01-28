import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rockets from '../components/Rockets';
import store from '../redux/store';

test('matches ProfilePage component snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
