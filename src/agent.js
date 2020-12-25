import axios from 'axios';

const API_ROOT = process.env.REACT_APP_API_URL;

let instance = axios.create({
  baseURL: API_ROOT,
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    config.headers['Content-Type'] = 'application/json';
    const AUTH_TOKEN = localStorage.getItem('token') || null;
    if (AUTH_TOKEN) {
      config.headers.Authorization = `Bearer ${AUTH_TOKEN}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// TODO implement response interceptor and handle unauthorized requests

const responseBody = (res) => res.data;
const catchError = (err) => {
  return Promise.reject(err.response);
};

const requests = {
  post: (url, body, params) =>
    instance.post(url, body, params).then(responseBody).catch(catchError),
  put: (url, body) =>
    instance.patch(url, body).then(responseBody).catch(catchError),
  del: (url) => instance.delete(url).then(responseBody).catch(catchError),
  get: (url, params) =>
    instance.get(url, { params }).then(responseBody).catch(catchError),
};

const Auth = {
  login: (credentials) => requests.post('/auth/login', { ...credentials }),
  register: (credentials) =>
    requests.post('/auth/register', { ...credentials }),
};

const Messages = {
  readAll: (params) => requests.get('/messages', params),
  deleteMessage: (id) => requests.del(`/messages/${id}`),
};

const Users = {
  updateProfilePicture: (body) => requests.post('/users/profile-picture', body),
  updateUserStatus: (body) => requests.put('/users/status', body),
};

const Media = {
  upload: (file) => {
    const mediaFormData = new FormData();
    mediaFormData.append('image', file);
    return requests.post('/media', mediaFormData);
  },
};

export { Auth, Messages, Users, Media };
