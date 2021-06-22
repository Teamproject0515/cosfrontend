import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/board";

class ApiServiceChu {


    addCart(cart){
        return axios.post("http://localhost:8080/cart/insert",cart)
    }
    showCartList(email){
        return axios.get("http://localhost:8080/cart/list/"+email)
    }
    deleteCart(cartId){
        return axios.delete("http://localhost:8080/cart/"+cartId)
    }
    updateCart(cart){
        return axios.put("http://localhost:8080/cart/modify",cart)
    }
    showSumMoney(){
        return axios.get("http://localhost:8080/cart/summoney")
    }
    
    showAddressList(email){
        return axios.get("http://localhost:8080/order/address/"+email)
    }

    showUserInfo(email){
        return axios.get("http://localhost:8080/order/user/"+email)
    }
    
    addOrderInfo(order){
        return axios.post("http://localhost:8080/order/insert",order)
    }

    kakaoPay(){
        return axios.post("http://localhost:8080/order/kakaoPay")
    }


    kakaoPayTest(test){
        return axios.get("http://localhost:8080/order/kakaoPaySuccess"+test)
    }
    
    //채팅 보낸 내용 backend로전송
    submitChat(chat){
        return axios.post("http://localhost:8080/chat/submit",chat)
    }


}

export default new ApiServiceChu();
