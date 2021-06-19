import axios from 'axios';

const User_API_BASE_URL = "http://localhost:8080/cos";

class ApiService {

    //백엔드와 통신
    
    //이메일 중복체크
    getUserEmail(user_email) {
        return axios.get(User_API_BASE_URL+'/signUp/' + user_email);
    }
    //회원가입
    insertUser(user){
        console.log("insertUser접근");
        console.log(user);
        return axios.post(User_API_BASE_URL+'/signUp',user);
    }
    //유저목록
    getUserList(pageNum){
        return axios.get(User_API_BASE_URL+"/manager/userList/"+pageNum);
    }
    //유저수
    userCount(){
        return axios.get(User_API_BASE_URL+"/manager/userCount");
    }
     //유저검색
    userseachList(searchType,keyword){
        console.log(User_API_BASE_URL+"/manager/userSearch/"+keyword+"/"+searchType);
        return axios.get(User_API_BASE_URL+"/manager/userSearch/"+keyword+"/"+searchType);
    }
   
    //상품등록
    insertProduct(product){
        console.log(product);
        return axios.post(User_API_BASE_URL+'/manager/productInsert' ,product);
        //return axios.post(User_API_BASE_URL+'/manager/productInserttest' ,product);
    }
    //이미지 업로드
    uploadFile(FormData){
        console.log("uploadFile 접근");
        console.log(FormData);
        return axios.post(User_API_BASE_URL+'/manager/upload',FormData);
    }
    //상품페이지개수
    productCount(){
        return axios.get(User_API_BASE_URL+'/manager/productCount');
    }
    //상품검색
    seachProductList(product_title){
        return axios.get(User_API_BASE_URL+'/manager/seach/' + product_title);
    }
    //항목들 개수
    itemsCnt(){
        console.log("itemsCnt 접근");
        return axios.get(User_API_BASE_URL+"/manager");
    }
    //주문리스트
    orderState(pageNum){
        console.log("productState 접근");
        return axios.get(User_API_BASE_URL+"/manager/orderStatus/"+pageNum);
    }
    //주문상세
    orderDetail(order_detail_num,user_email){
        console.log("orderDetail 접근");
        return axios.get(User_API_BASE_URL+"/manager/orderDetail/"+order_detail_num+"/"+user_email);
    }
    //주문상태변경
    stateChange(order_status,order_id){
        console.log("stateChange 접근");
        return axios.put(User_API_BASE_URL+"/manager/stateChange/"+order_status+"/"+order_id);
    }
    //주문 처리중인 개수
    orderCount(){
        console.log("orderCount 접근");
        return axios.get(User_API_BASE_URL+"/manager/orderCount");
    }
    //주문 검색
    orderStatusSearch(searchType,keyword){
        console.log("orderStatusSearch 접근");
        return axios.get(User_API_BASE_URL+"/manager/orderStatusSearch/"+keyword+"/"+searchType);
    }
    //취소요청
    cancleOrder(pageNum){
        console.log("cancleOrder 접근");
        return axios.get(User_API_BASE_URL+"/manager/cancleOrder/"+pageNum);
    }
    //취소요청 개수
    cancleOrderCount(){
        console.log("cancleOrderCount 접근");
        return axios.get(User_API_BASE_URL+"/manager/cancleOrderCount");
    }
    //상품상세보기
    getProductDetail(seq){
        console.log('getProductDetail 접근');
        return axios.get(User_API_BASE_URL+"/manager/productDetail/"+seq);
    }
    //상품업데이트
    productUpdate(products){
        console.log("productUpdate 접근");  
        console.log(products);
        return axios.put(User_API_BASE_URL+"/manager/productUpdate", products);
    }
    //유저리스트
    getProductList(pageNum){
        console.log('getProductList 접근');
        return axios.get(User_API_BASE_URL+"/manager/productList/"+pageNum);
    }
    //상품삭제
    productDelete(productID){
        return axios.delete(User_API_BASE_URL+"/manager/productDelect/"+productID);
    }
    //유저현황
    UserState(pageNum){
        return axios.get(User_API_BASE_URL+"/manager/userState/"+pageNum);
    }
    //유저상태검색
    userStateSeachList(searchType,keyword){
        return axios.get(User_API_BASE_URL+"/manager/userStateSearch/"+keyword+"/"+searchType);
    }
    //유저현황개수
    getUserLogCount(){
        return axios.get(User_API_BASE_URL+"/manager/userLogCount");
    }
   
}


export default new ApiService();