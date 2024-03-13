import axios from 'axios';

const restClient = axios.create({
  baseURL: 'http://localhost:8080/api', 
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 3000 
});

export default restClient;
