import axios from 'axios'
// Auth Api
const authApi = axios.create({
    baseURL: import.meta.env.VITE_SERVER_AUTH_BASE_URL,
})
const mailApi = axios.create({
    baseURL: import.meta.env.VITE_SERVER_MAIL_BASE_URL,
})

const adminApi = axios.create({
    baseURL: import.meta.env.VITE_SERVER_ADMIN_BASE_URL,
})
const userApi = axios.create({
    baseURL: import.meta.env.VITE_SERVER_USER_BASE_URL,
})

export {authApi, mailApi, adminApi,userApi};