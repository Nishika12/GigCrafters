//taken out the axios work from login file and created this 
import axios from "axios";

const newRequest = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    withCredentials: true   //without this line we will not have our accessToken 
});

export default newRequest;