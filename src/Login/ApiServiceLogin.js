import axios from 'axios';

const USER_API_BASE_URL =  "http://localhost:8080/cos";
 class APIService {

    postLogin(user){
        return axios.post(USER_API_BASE_URL+'/login', user);
    }

    findEmail(user){
        return axios.post(USER_API_BASE_URL+'/findEmail',user);
    }

    findPW(user){
        return axios.post(USER_API_BASE_URL+'/findPW',user);
    }  

}

export default new APIService();
