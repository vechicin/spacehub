import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as reactRedux from 'react-redux';
import Rockets from '../components/Rockets';
import Rocket from '../components/Rocket';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Test Rockets component', () => {
  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;
  const mockStore = {
    rockets: {
      rockets: [
        {
          id: '1',
          name: 'Rocket Test',
          description: 'Testing rockets',
          image: 'image-link',
        },
      ],
    },
  };
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });
  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  test('Create and Show list', () => {
    render(<Rockets />);
    expect(screen.getByTestId('rocket-list-test')).toBeInTheDocument();
  });
  test('Create a Rocket Component inside Rockets List', () => {
    const rocketData = useSelectorMock(
      (mockStore) => mockStore.rockets.rockets[0],
    );
    render(
      <Rocket
        id={rocketData.id}
        name={rocketData.name}
        description={rocketData.description}
        image="{rocketData.image}"
      />,
    );
    expect(screen.getByTestId('rocket-item-group')).toBeInTheDocument();
  });
  test('Check if button show Cancel Reservation when reserved its true', () => {
    mockStore.rockets.rockets = [
      { ...mockStore.rockets.rockets[0], reserved: true },
    ];
    render(<Rockets />);
    const reservedBtn = screen.getByText('CANCEL RESERVATION');
    expect(reservedBtn).toBeInTheDocument();
  });
});
