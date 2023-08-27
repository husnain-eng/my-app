import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3005',
});

// Add an interceptor to set the token in headers for each request
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
