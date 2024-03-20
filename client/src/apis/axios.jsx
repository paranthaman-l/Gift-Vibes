import axios from 'axios'
// Auth Api
const authApi = axios.create({
    baseURL: import.meta.env.VITE_SERVER_AUTH_BASE_URL,
})

export {authApi};