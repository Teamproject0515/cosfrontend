import axios from 'axios';

const USER_API_BASE_URL =  "http://localhost:8080/cos";
 class APIService {

    postLogin(user){
        return axios.post(USER_API_BASE_URL+'/signIn', user);
    }

    findEmail(user){
        return axios.post(USER_API_BASE_URL+'/findEmail',user);
    }

    findPW(user){
        return axios.post(USER_API_BASE_URL+'/findPW',user);
    } 
    
    checkSession(){
        return axios.get(USER_API_BASE_URL+'/sessionFalse');
    }

    lotout(userEmail){
        return axios.get(USER_API_BASE_URL+'/signOut/'+userEmail);
    }

    KakaoLogin(res){
        return axios.get(USER_API_BASE_URL+'/signIn/kakao',{
            headers: {
                Authorization: res.response.access_token,}
        });
    }

}

export default new APIService();
