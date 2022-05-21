import axios from 'axios'

const baseURL = 'https://artur12312.pythonanywhere.com'

const instance = axios.create({ baseURL })

export default instance;