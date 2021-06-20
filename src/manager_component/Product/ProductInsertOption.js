import React, { useState, useEffect } from 'react';
import '../managerCss/productinsert.css'
import AxiosApiService from '../../AxiosApiService';
import { useHistory } from "react-router-dom";
import InsertOptionComponent from './component/InsertOptionComponent'
import { Input } from '@material-ui/core';

import '../managerCss/managerInsertOption.css';

function ProductInsert({productListOpen}) {
    const [product, setProduct] = useState({ product: [] });            //받아온 상품
    const [productOptions, setProductOptions] = useState([]);
    const history = useHistory();

    const onSize = (e, index) => {
        //setProduct_size(product_size.concat(e.currentTarget.value)); 
        let size = productOptions;
        size[index].product_size = e.currentTarget.value;
        setProductOptions(size);
    }

    const onColor = (e, index) => {
        let color = productOptions;
        color[index].product_color = e.currentTarget.value;
        setProductOptions(color);
    }
    const onStock = (e, index) => {
        let stock = productOptions;
        stock[index].product_stock = e.currentTarget.value;
        setProductOptions(stock);
    }

    useEffect(() => {
        console.log("getProduct 실행");
        getProduct();
    }, [])

    //랜더링시 로컬스토리지에 있는 객체를 가져옴(로컬에있는 객체를 가져올시 json으로 형변환)  
    function getProduct() {
        const products = window.localStorage.getItem('product');
        console.log(products);
        setProduct({
            product: JSON.parse(products)
        })
    }

    function saveProduceOption(e) {
        //객체에 담은 값들을 백엔드로 전송 axios로
        AxiosApiService.insertProduct(productOptions)
            .then(() => {
                productListOpen(); //입력성공시
                //로컬스토리지에 있는 데이터 삭제
                window.localStorage.removeItem('product');
            })
            .catch(err => {
                history.push('/productInsertError');
                console.log('saveProducet() 에러', err);
            });
    }

    //테이블 행 추가삭제
    //로컬에서 가져온 객체를 기본값으로 넣어줌
    function tablePlus() {
        setProductOptions(productOptions.concat(
            [{
                product_title: product.product.product_title,
                product_gender: product.product.product_gender,
                product_category: product.product.product_category,
                product_price: product.product.product_price,
                product_content: product.product.product_content,
                product_img: product.product.product_img,
                product_material: product.product.product_material,
                product_size: '',
                product_color: '',
                product_stock: '',
            }]
        ))
    }
    function tableMinus() {
        setProductOptions(productOptions.splice(1));
    }
    return (
        <>
            <h1>상품 옵션</h1>
            <InsertOptionComponent
                product={product}
                productOptions={productOptions}
                tablePlus={tablePlus}
                tableMinus={tableMinus}
                onSize={onSize}
                onColor={onColor}
                onStock={onStock}
            />
            
            <button onClick={saveProduceOption} className="productInsertSubmit" >상품 등록</button>
        </>
    )
}

export default ProductInsert
