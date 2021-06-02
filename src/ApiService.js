import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8080/products";

class ApiService {

    // 해당 옵션 상품 리스트 출력 값 받아오기
    productsCategory(product_pageNum, product_gender, product_category, select_color, select_size, search_keyword, select_option){
        return axios.get(PRODUCT_API_BASE_URL+'/'+product_pageNum+'/'+product_gender+'/'+product_category+'/'+select_color+'/'+select_size+'/'+search_keyword+'/'+select_option);
    }

    // 해당 옵션 상품 TOTAL PAGE 값 받아오기
    findPageNum(product_gender, product_category, select_color, select_size, search_keyword){
        return axios.get(PRODUCT_API_BASE_URL+'/'+product_gender+'/'+product_category+'/'+select_color+'/'+select_size+'/'+search_keyword);
    }

    // 해당 상품 선택시 맞는 값 받아오기
    fetchProductByID(productID){
        return axios.get(PRODUCT_API_BASE_URL + '/' + productID);
    }
}

export default new ApiService();