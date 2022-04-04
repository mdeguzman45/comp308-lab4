import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export const runTest = payload => api.post(`/runTest`, payload)

const apis = {
  runTest
};

export default apis