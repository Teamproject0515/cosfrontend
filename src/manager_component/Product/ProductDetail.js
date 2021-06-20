import React, { useState, useEffect } from 'react';
import AxiosApiService from '../../AxiosApiService';
import '../managerCss/productDetail.css';
import Sidebar from './component/Sidebar';
import DetailBox from './component/DetailBox';
import DetailCategory from './component/DetailCategory';
import { useHistory } from "react-router-dom";
function ProductDetail({productUpdateOptionOpen, productDelete }) {
    let history = useHistory();
    const [products, setProducts] = useState({ product: [0] });
    const [productImg, setProductImg] = useState({ img: [] });
    const imgUrl = "/imgs/";

    /*
    window.onpopstate = (e)=>{
       if(window.history.back()){
        productListOpen();
       }
    }*/
    useEffect(() => {
        getProductDetail()
    }, [])

    //상세보기 들어올시 먼저 실행
    function getProductDetail() {
        AxiosApiService.getProductDetail(window.localStorage.getItem("product_seq"))
            .then(res => {
                //백단에서 받은 이미지를 ,로 나눠 배열에 저장
                setProductImg({ img: res.data[0].product_img.split(",") });
                setProducts({
                    product: res.data
                })
            })
            .catch(err => {
               history.push('/managerDefaultErr');
                console.log('getProductDetail() Error!', err);
            })
    }

    return (
        <>
            <h1 style={{ marginTop: '30px' }}>상세 보기</h1>
            <div className="detail_wapper">
                    <Sidebar productImg={productImg} />
                <div className="detail_img_box">
                    <img className="detail_img" src={imgUrl + productImg.img[0]} />
                </div>
                <div className="detail_category">
                    <DetailBox products={products} />
                    <DetailCategory products={products}/>
                    <div className="detail_button">
                        <button onClick={() => productUpdateOptionOpen()}>상품 수정하기</button>
                        <button onClick={() => productDelete(products.product[0].product_id)}>상품 삭제하기</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail
