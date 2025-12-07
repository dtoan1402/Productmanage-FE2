import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
  timeout: 10000,
})

api.interceptors.response.use(
  (res) => res,
  (error) => {
    console.error('API Error:', error)
    return Promise.reject(error)
  }
)

export default api