const axios = require('axios');

const API = axios.create({
    baseURL: 'http://10.0.2.2:9090',
    timeout: 1000,
});

export default API;