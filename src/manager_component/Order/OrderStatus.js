import React, { useState, useEffect } from 'react';
import AxiosApiService from '../../AxiosApiService'
import OrderStatusBox from './component/OrderStatusBox'
import { useHistory } from "react-router-dom";

function OrderStatus({orderDetailOpen }) {
    //서버에서 받아올 유저 저장소
    const [orders, setOrders] = useState({ order: [] });
    const [keyword, setKeyword] = useState('');
    const [searchType, setSearchType] = useState('product_title');
    const [pageNums, setPageNums] = useState(0);
    const [pageOpen, setPageOpen] = useState(true);
    let history = useHistory();

    function onChangeSearch(e) {
        setKeyword(e.currentTarget.value);
    }
    function onSearchType(e) {
        setSearchType(e.currentTarget.value);
    }

    //새로고침시에만 실행
    useEffect(() => {
        getProductOrder(0);
        getOrderCount();
    }, [])
    
    //검색 엔터키 감지
    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            search();
        }
    }

    //서버 상품주문목록 가져옴
    const getProductOrder = (pageNum) => {
        AxiosApiService.orderState(pageNum)
            .then(res => {
                setOrders({ order: res.data });
            })
            .catch(err => {
                history.push('/managerDefaultErr');
                console.log('getUserState() Error!', err);
            })
        window.scrollTo(0, 0);
    }
    //주문개수
    function getOrderCount() {
        AxiosApiService.orderCount()
            .then(res => {
                setPageNums(res.data)
            })
            .catch(err => {
                history.push('/managerDefaultErr');
                console.log('getOrderCount() Error!', err);
            })
    }

    function search() {
        console.log(searchType, keyword);
        AxiosApiService.orderStatusSearch(searchType, keyword)
            .then(res => {
                setOrders({
                    order: res.data
                })
                setPageOpen(false);
            })
            .catch(err => {
                history.push('/managerDefaultErr');
                console.log('search() 에러', err);
            });
    }

    const returnOrderDetail = (order_detail_num, user_email) => {
        window.localStorage.setItem('order_detail_num', order_detail_num);
        window.localStorage.setItem('user_email', user_email);
        orderDetailOpen();
    }

    return (
        <>
            <OrderStatusBox 
            onSearchType={onSearchType}
            onChangeSearch={onChangeSearch}
            onKeyPress={onKeyPress}
            search={search}
            orders={orders}
            returnOrderDetail={returnOrderDetail}
            />
            <div style={{ display: 'flex', marginTop: '10px' }}>
                {pageOpen && [...new Array(pageNums)].map((page, index) =>
                    <div style={{ marginRight: '5px' }}>
                        <button style={{ border: 'none', padding: '5px', cursor: 'pointer' }} onClick={() => getProductOrder(index + 1)}>{index + 1}</button>
                    </div>
                )}
            </div>
        </>
    )
}

export default OrderStatus
