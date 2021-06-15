import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8080/products";
const USER_API_BASE_URL = "http://localhost:8080/mycos";
const ORDER_API_BASE_URL = "http://localhost:8080/order";


class ApiService {

    // 해당 옵션 상품 리스트 출력 값 받아오기
    productsCategory(ProductVO){
        return axios.post(PRODUCT_API_BASE_URL+'/list', ProductVO);
    }

    // 해당 옵션 상품 TOTAL PAGE 값 받아오기
    findPageNum(ProductVO){
        return axios.post(PRODUCT_API_BASE_URL+'/pagenum', ProductVO);
    }

    // 해당 상품 선택시 맞는 값 받아오기
    fetchProductByID(productID){
        return axios.get(PRODUCT_API_BASE_URL + '/' + productID);
    }


    // 해당 유저 정보 출력하기
    getUserByID(user_email){
        return axios.get(USER_API_BASE_URL+'/userinfo/'+user_email);
    }

    // 해당 유저의 배송지 리스트 출력하기
    getUserAddressList(user_email){
        return axios.get(USER_API_BASE_URL+'/useraddressinfo/'+user_email);
    }

    updateUserInfo(Change_user){
        return axios.post(USER_API_BASE_URL+'/updateuserinfo', Change_user);
    }

    deleteUserInfo(Change_user){
        return axios.post(USER_API_BASE_URL+'/deleteuserinfo', Change_user);
    }

    insertUserAccount(userAccount){
        return axios.post(USER_API_BASE_URL+'/insertuseraccount', userAccount);
    }

    userAccount(user_email){
        return axios.get(USER_API_BASE_URL+'/useraccount/'+user_email);
    }

    updateUserAccount(userAccount){
        return axios.post(USER_API_BASE_URL+'/updateuseraccount', userAccount);
    };

    insertUserRepay(userRepay){
        return axios.post(USER_API_BASE_URL+'/insertuserrepay', userRepay);
    }

    updateUserRepay(userRepay){
        return axios.post(USER_API_BASE_URL+'/updateuserrepay', userRepay);
    }

    getUserAddressByAddress_seq(address_seq){
        return axios.post(USER_API_BASE_URL+'/useraddressbyseq/'+address_seq);
    }

    UpdateUserAddress(userinfo){
        return axios.post(USER_API_BASE_URL+'/updateuseraddress',userinfo);
    }

    deleteUserAddress(address_seq){
        return axios.get(USER_API_BASE_URL+'/deleteuseraddress/'+address_seq);
    }

    insertUserAddress(user_info){
        return axios.post(USER_API_BASE_URL+'/insertuseraddress',user_info);
    }

    getUserOrderList(user_email){
        return axios.get(ORDER_API_BASE_URL+'/getuserorderlist/'+user_email);
    }

    returnOrder(order_id){
        return axios.get(ORDER_API_BASE_URL+'/returnorder/'+order_id);
    }

    selectOrderInfo(order_id){
        return axios.get(ORDER_API_BASE_URL+'/selectorderinfo/'+order_id);
    }

    selectOrderDetailInfo(order_id){
        return axios.get(ORDER_API_BASE_URL+'/selectorderdetailinfo/'+order_id);
    }
}

export default new ApiService();