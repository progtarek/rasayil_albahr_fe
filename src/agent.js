import axios from 'axios';

const API_ROOT = process.env.REACT_APP_API_URL;
const AUTH_TOKEN = localStorage.getItem('token') || null;
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const responseBody = (res) => res.data;

const requests = {
  post: (url, body) => axios.post(`${API_ROOT}${url}`, body).then(responseBody),
  put: (url, body) => axios.put(`${API_ROOT}${url}`, body).then(responseBody),
  del: (url) => axios.delete(`${API_ROOT}${url}`).then(responseBody),
  get: (url) => axios.get(`${API_ROOT}${url}`).then(responseBody),
};

const Auth = {
  //   current: () => requests.get('/user'),
  login: (credentials) => requests.post('/auth/login', { ...credentials }),
  register: (credentials) =>
    requests.post('/auth/register', { ...credentials }),
  //   save: (user) => requests.put('/user', { user }),
};

export { Auth };
