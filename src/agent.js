import axios from 'axios';

const API_ROOT = process.env.REACT_APP_API_URL;
const AUTH_TOKEN = localStorage.getItem('token') || null;
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const encode = encodeURIComponent;

const requests = {
  del: (url) => axios.delete`${API_ROOT}${url}`,
  get: (url) => axios.get(`${API_ROOT}${url}`),
  put: (url, body) => axios.put(`${API_ROOT}${url}`, body),
  post: (url, body) => axios.post(`${API_ROOT}${url}`, body),
};

const Auth = {
  //   current: () => requests.get('/user'),
  login: (username, password) =>
    requests.post('/auth/login', { username, password }),
  //   register: (username, email, password) =>
  //     requests.post('/users', { user: { username, email, password } }),
  //   save: (user) => requests.put('/user', { user }),
};

export default {
  Auth,
};
