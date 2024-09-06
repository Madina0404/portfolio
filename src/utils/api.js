import axios from 'axios';


const api = axios.create({
    baseURL: 'http://localhost:3000'
});

// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';


api.interceptors.request

export default api;