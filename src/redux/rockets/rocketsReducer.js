import axios from 'axios';

const TOGGLE_RESERVATION = 'spacehub/src/redux/rockets/TOGGLE_RESERVATION';
const ADD_ROCKETS = 'spacehub/src/redux/rockets/ADD_ROCKETS';

const ROCKETS_URL = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rockets: [],
};

export const toggleReservation = (payload) => ({
  type: TOGGLE_RESERVATION,
  payload,
});

const addRockets = (payload) => ({
  type: ADD_ROCKETS,
  payload,
});

export const fetchRockets = () => async (dispatch) => {
  const response = (await axios(ROCKETS_URL)).data;
  const rockets = [];
  response.forEach((rocket) => {
    const newRocket = {
      id: rocket.rocket_id,
      name: rocket.rocket_name,
      description: rocket.description,
      img: rocket.flickr_images[0],
      reserved: false,
    };
    rockets.push(newRocket);
  });
  dispatch(addRockets(rockets));
};

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
    case ADD_ROCKETS:
      return {
        ...state,
        rockets: action.payload,
      };
    default:
      return state;
  }
};

export default rocketsReducer;
