const TOGGLE_MISSION = 'spacehub/src/redux/missions/TOGGLE_MISSION';
const FILTER_MISSION = 'spacehub/src/redux/missions/FILTER_MISSION';

const initialState = {
  missions: [
    {
      joined: false,
      name: 'Mission',
      description: 'Mission description',
      id: '1',
    },
    {
      joined: false,
      name: 'Mission 2',
      description: 'Mission 2 description',
      id: '2',
    },
    {
      joined: false,
      name: 'Mission 3',
      description: 'Mission 3 description',
      id: '3',
    },
  ],
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
