import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export default axiosInstance