import axios from 'axios';

const TOGGLE_MISSION = 'spacehub/src/redux/missions/TOGGLE_MISSION';
const FILTER_MISSION = 'spacehub/src/redux/missions/FILTER_MISSION';
const FETCH_MISSION = 'spacehub/src/redux/missions/FETCH_MISSION';
const baseURL = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
};

export const fetchMission = () => async (dispatch) => {
  const response = (await axios.get(baseURL)).data;
  const missions = [];
  response.forEach((item) => {
    const fetchedMission = {
      id: item.mission_id,
      name: item.mission_name,
      description: item.description,
      reserved: false,
    };
    missions.push(fetchedMission);
  });

  dispatch({
    type: FETCH_MISSION,
    payload: missions,
  });
};

export const toggleMission = (payload) => ({
  type: TOGGLE_MISSION,
  payload,
});

export const filterMission = () => ({
  type: FILTER_MISSION,
});

const missions = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSION:
      return {
        ...state,
        missions: action.payload,
      };

    case TOGGLE_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.id === action.payload) {
            return (
              {
                ...mission,
                reserved: !mission.reserved,
              }
            );
          }
          return mission;
        }),
      };

    default:
      return state;
  }
};

export default missions;
