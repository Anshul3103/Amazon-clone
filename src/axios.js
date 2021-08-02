import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-8c88e/us-central1/api'
});

export default instance;