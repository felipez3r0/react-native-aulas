import axios from "axios"

const axiosConfig = axios.create({baseURL: 'https://dummyjson.com/'})

export default axiosConfig