const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';

const initialState = {
  joined_mission: false,
};

export const joinMission = (newMission) => (dispatch) => {
  dispatch({
    type: JOIN_MISSION,
    payload: newMission, 
  });
};

export const leaveMission = (leaveMission) => (dispatch) => {
  dispatch({
    type: LEAVE_MISSION,
    payload: leaveMission,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case JOIN_MISSION:
      return action.payload;
    
    case LEAVE_MISSION:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
