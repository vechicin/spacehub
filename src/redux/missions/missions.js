const TOGGLE_MISSION = 'spacehub/src/redux/missions/TOGGLE_MISSION';
const FILTER_MISSION = 'spacehub/src/redux/missions/FILTER_MISSION';

const initialState = {
  missions: [],
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
    case TOGGLE_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.id === action.payload) {
            return (
              {
                ...mission,
                joined: !mission.joined,
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
