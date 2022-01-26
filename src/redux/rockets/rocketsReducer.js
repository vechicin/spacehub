const TOGGLE_RESERVATION = 'spacehub/src/redux/rockets/TOGGLE_RESERVATION';

const initialState = {
  rockets: [
    {
      id: '1',
      name: 'Rocket 1',
      description: 'Rocket 1 description',
      reserved: false,
    },
    {
      id: '2',
      name: 'Rocket 2',
      description: 'Rocket 2 description',
      reserved: false,
    },
    {
      id: '3',
      name: 'Rocket 3',
      description: 'Rocket 3 description',
      reserved: false,
    },
  ],
};

export const toggleReservation = (payload) => ({
  type: TOGGLE_RESERVATION,
  payload,
});

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_RESERVATION:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id === action.payload) {
            return ({ ...rocket, reserved: !rocket.reserved });
          }
          return rocket;
        }),
      };
    default:
      return state;
  }
};

export default rocketsReducer;
