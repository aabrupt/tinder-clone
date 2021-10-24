import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://mern-tinder-clone-backend111.herokuapp.com'
})

export default instance