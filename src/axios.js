import axios from 'axios';

export const server = '';

const instance = axios.create({
  baseURL: server,
});

export default instance;