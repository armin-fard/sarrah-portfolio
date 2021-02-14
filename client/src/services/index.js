import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://localhost:8181',
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
