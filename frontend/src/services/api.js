// This is a simple Axios instance setup for API calls to your backend

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Change according to your backend URL
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 5000,
});

export default api;
