import axios from 'axios';

const api = axios.create({
  baseURL: 'https://admin.mirketgiller.com.tr/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
