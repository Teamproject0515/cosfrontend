import React, { useState, useEffect } from 'react';
import AxiosApiService from '../../AxiosApiService';
import ProductListTable from './component/ProductListTable'
import { useHistory } from "react-router-dom";

function ProductList({ props,productDetailOpen }) {
    const [products, setProducts] = useState({ product: [0] });
    const [product_title, setProduct_title] = useState('');
    const [pageNums, setPageNums] = useState(0);
    const [pageOpen,setPageOpen] = useState(true);
    let history = useHistory();

    useEffect(() => {
        getProductCount();
        getProductList(0);
    }, [])

    
    function onChangeSearch(e) {
        setProduct_title(e.currentTarget.value);
    }
    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            search();
        }
    }
    //검색
    function search() {
        AxiosApiService.seachProductList(product_title)
            .then(res => {
                res.data.map((data, index) => {
                    //만약 res.data[index]에 product_img를 가져올때 문자열에 ,가 있으면 아래 로직 실행
                    if (res.data[index].product_img.includes(',')) {
                        console.log(res.data[index].product_img);
                        //product_img안에 ,가 몇번째에 있는지 저장
                        let idx = res.data[index].product_img.indexOf(',');
                        //product_img 문자열 0번째부터 ,를 기준으로 배열로 나눔
                        let productImg = res.data[index].product_img.slice(0, idx);
                        res.data[index].product_img = productImg;
                    }
                }
                )
                setProducts({
                    product: res.data
                })
                setPageOpen(false);
            })
            .catch(err => {
                history.push('/managerDefaultErr');
                console.log('search() 에러', err);
            });
    }
    //상품페이지 개수
    function getProductCount() {
        AxiosApiService.productCount()
            .then(res => {
                setPageNums(res.data)
            })
            .catch(err => {
                history.push('/managerDefaultErr');
                console.log('getProductCount() Error!', err);
            })
    }
    const getProductList = (pageNum) => {
        console.log(pageNum);
        AxiosApiService.getProductList(pageNum)
            .then(res => {
                res.data.map((data, index) => {
                    //만약 res.data[index]에 product_img를 가져올때 문자열에 ,가 있으면 아래 로직 실행
                    if (res.data[index].product_img.includes(',')) {
                        console.log(res.data[index].product_img);
                        //product_img안에 ,가 몇번째에 있는지 저장
                        let idx = res.data[index].product_img.indexOf(',');
                        //product_img 문자열 0번째부터 ,를 기준으로 배열로 나눔
                        let productImg = res.data[index].product_img.slice(0, idx);
                        res.data[index].product_img = productImg;
                    }
                }
                )
                setProducts({
                    product: res.data
                })
                //페이지 맨위로 올림
                window.scrollTo(0, 0);
            })
            .catch(err => {
               history.push('/managerDefaultErr');
                console.log('getProductList() Error!', err);
            })
    }

    function returnProductDetail(seq) {
        //로컬스토리지 저장
        window.localStorage.setItem("product_seq", seq);
        console.log(seq);
        productDetailOpen();
    }
    
    return (
        <>
            <ProductListTable
            products={products}
            onKeyPress={onKeyPress}
            onChangeSearch={onChangeSearch}
            search={search}
            returnProductDetail={returnProductDetail}
            />
            <div style={{ display: 'flex', marginTop: '10px' }}>
            {pageOpen &&[...new Array(pageNums)].map((page, index) =>
                    <div style={{ marginRight: '5px' }}>
                        <button style={{ border: 'none', padding: '5px', cursor: 'pointer' }} onClick={() => getProductList(index + 1)}>{index + 1}</button>
                    </div>
                )}
            </div>
        </>
    )
}

export default ProductList
