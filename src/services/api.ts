import axios from 'axios';

const bearer = process.env.REACT_APP_BEARER_TOKEN;
const url = process.env.REACT_APP_TWITTER_URL;

console.log(bearer);

const api = axios.create({
  baseURL: url,
  headers: {'Authorization' : 'bearer '+bearer}
});

export default api;