import axios from 'axios'

const Url = 'http://localhost:3001'

const Api = axios.create({
    baseURL: Url,
})

export default Api;