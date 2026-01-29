import axios from 'axios';

const baseUrl = process.env.API_BASE_URL || 'http://localhost:3000/api/v1';

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
})

// Optional: global error handling
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error('Axios error:', error.response?.data || error.message)
    return Promise.reject(error)
  }
)

export default axiosInstance
