// import axios from 'axios';

// const API = axios.create({
//   baseURL: process.env.REACT_APP_STRAPI_URL || 'http://localhost:1337/api'
// });

// export default API;

// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:1337/api', // Strapi v4+ uses /api prefix
  timeout: 10000,
});

export default API;