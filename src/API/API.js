import axios from 'axios';

const baseURL = 'https://api.spacexdata.com/v3/missions';

const fetchMissions = axios.get(baseURL);

export default fetchMissions;
