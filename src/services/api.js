import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://api.weatherbit.io/v2.0/forecast/daily?key=160aeba88b1d49b5ab412c3351398ba3',
});

export default api;
